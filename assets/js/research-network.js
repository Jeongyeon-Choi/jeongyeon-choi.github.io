(() => {
  document.querySelectorAll('[data-research-network]').forEach((network) => {
    const svg = network.querySelector('.network-svg');
    const paperElements = [...network.querySelectorAll('.network-paper')];
    const topicElements = [...network.querySelectorAll('.network-topic')];
    const buttons = [...network.querySelectorAll('.network-paper-picker button')];
    const details = [...network.querySelectorAll('.network-detail')];
    if (!svg || !paperElements.length || !details.length) return;

    const makeNode = (element, kind) => ({ element, kind, x: 0, y: 0, vx: 0, vy: 0, pinned: false });
    const ego = makeNode(network.querySelector('.network-ego'), 'ego');
    const papers = paperElements.map((el) => makeNode(el, 'paper'));
    const topics = topicElements.map((el) => makeNode(el, 'topic'));
    const topicByName = new Map(topics.map((node) => [node.element.dataset.topic, node]));
    const nodes = [ego, ...papers, ...topics];
    const edges = [];
    papers.forEach((paper) => {
      const id = paper.element.dataset.paper;
      const topic = topicByName.get(paper.element.dataset.topic);
      edges.push({ source: ego, target: paper, element: network.querySelector(`.network-authorship[data-paper="${id}"]`) });
      if (topic) edges.push({ source: paper, target: topic, element: network.querySelector(`.network-topic-edge[data-paper="${id}"]`) });
    });

    const narrow = window.matchMedia('(max-width: 575px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 700;
    let height = 580;
    let selectedId = papers[0].element.dataset.paper;
    let frame = 0;
    let ticks = 0;
    let drag = null;
    const suppressedClicks = new WeakSet();

    function selectPaper(id) {
      const selected = papers.find((paper) => paper.element.dataset.paper === id);
      if (!selected) return;
      selectedId = id;
      const selectedTopic = selected.element.dataset.topic;
      [...paperElements, ...buttons].forEach((control) => {
        control.setAttribute('aria-pressed', String(control.dataset.paper === id));
      });
      details.forEach((detail) => { detail.hidden = detail.dataset.paper !== id; });
      edges.forEach((edge) => {
        edge.element.classList.toggle('is-selected', edge.element.dataset.paper === id);
        edge.element.classList.toggle('is-related', edge.element.dataset.topic === selectedTopic);
      });
      topics.forEach((topic) => topic.element.classList.toggle('is-selected', topic.element.dataset.topic === selectedTopic));
      papers.forEach((paper) => paper.element.classList.toggle('is-related', paper.element.dataset.topic === selectedTopic));
    }

    function cycleTopic(topic) {
      const related = papers.filter((paper) => paper.element.dataset.topic === topic.element.dataset.topic);
      if (!related.length) return;
      const index = related.findIndex((paper) => paper.element.dataset.paper === selectedId);
      selectPaper(related[(index + 1) % related.length].element.dataset.paper);
    }

    function constrain(node) {
      node.x = Math.max(95, Math.min(width - 95, node.x));
      node.y = Math.max(90, Math.min(height - 65, node.y));
    }

    function draw() {
      nodes.forEach((node) => node.element.setAttribute('transform', `translate(${node.x.toFixed(2)} ${node.y.toFixed(2)})`));
      edges.forEach((edge) => {
        const { source, target } = edge;
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const distance = Math.hypot(dx, dy) || 1;
        const startRadius = source.kind === 'ego' ? 47 : 27;
        const endRadius = target.kind === 'topic' ? 12 : 27;
        edge.element.setAttribute('d', `M${source.x + dx / distance * startRadius} ${source.y + dy / distance * startRadius} L${target.x - dx / distance * endRadius} ${target.y - dy / distance * endRadius}`);
      });
    }

    // A small bounded spring simulation keeps connected nodes responsive to dragging.
    // It settles to rest instead of running an endless background animation.
    function integrate() {
      nodes.forEach((node) => {
        if (!node.pinned) {
          node.vx += (node.homeX - node.x) * 0.006;
          node.vy += (node.homeY - node.y) * 0.006;
        }
      });
      edges.forEach(({ source, target, length }) => {
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const distance = Math.hypot(dx, dy) || 1;
        const force = (distance - length) * 0.012;
        if (!source.pinned) { source.vx += dx / distance * force; source.vy += dy / distance * force; }
        if (!target.pinned) { target.vx -= dx / distance * force; target.vy -= dy / distance * force; }
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x || 0.1;
          const dy = b.y - a.y || 0.1;
          const distance = Math.max(30, Math.hypot(dx, dy));
          const force = Math.min(2, 1500 / (distance * distance));
          if (!a.pinned) { a.vx -= dx / distance * force; a.vy -= dy / distance * force; }
          if (!b.pinned) { b.vx += dx / distance * force; b.vy += dy / distance * force; }
          // Account for labels as well as the dots when resolving collisions.
          const ay = a.y + (a.kind === 'topic' ? 20 : -20);
          const by = b.y + (b.kind === 'topic' ? 20 : -20);
          const overlapX = 185 - Math.abs(dx);
          const overlapY = 125 - Math.abs(by - ay);
          if (overlapX > 0 && overlapY > 0) {
            if (overlapX < overlapY) {
              const push = Math.sign(dx) * overlapX * 0.06;
              if (!a.pinned) a.vx -= push;
              if (!b.pinned) b.vx += push;
            } else {
              const push = Math.sign(by - ay || 1) * overlapY * 0.06;
              if (!a.pinned) a.vy -= push;
              if (!b.pinned) b.vy += push;
            }
          }
        }
      }
      nodes.forEach((node) => {
        if (node.pinned) { node.vx = 0; node.vy = 0; return; }
        node.vx = Math.max(-12, Math.min(12, node.vx * 0.74));
        node.vy = Math.max(-12, Math.min(12, node.vy * 0.74));
        node.x += node.vx;
        node.y += node.vy;
        constrain(node);
      });
    }

    function animate() {
      frame = 0;
      integrate();
      draw();
      ticks -= 1;
      if (ticks > 0) frame = requestAnimationFrame(animate);
    }

    function settle() {
      if (reducedMotion.matches) {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        ticks = 0;
        for (let i = 0; i < 90; i++) integrate();
        draw();
        return;
      }
      ticks = 120;
      if (!frame) frame = requestAnimationFrame(animate);
    }

    function arrange() {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      const mobile = narrow.matches;
      width = mobile ? 360 : 700;
      height = mobile ? Math.max(670, papers.length * 220 + 170) : Math.max(580, papers.length * 150 + 130);
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      nodes.forEach((node) => { node.pinned = false; node.vx = 0; node.vy = 0; });
      ego.x = mobile ? 180 : 330;
      ego.y = mobile ? 110 : 285;
      topics.forEach((topic, index) => {
        const related = papers.filter((paper) => paper.element.dataset.topic === topic.element.dataset.topic);
        related.forEach((paper, localIndex) => {
          const paperIndex = papers.indexOf(paper);
          paper.x = mobile ? 95 : (index === 0 ? 145 : 550);
          paper.y = mobile ? 280 + paperIndex * 220 : (index === 0 ? 180 + localIndex * 190 : 150 + localIndex * 220);
        });
        topic.x = mobile ? 265 : (index === 0 ? 145 : 390);
        topic.y = mobile ? related.reduce((sum, node) => sum + node.y, 0) / related.length + 20 : height - 90;
      });
      nodes.forEach((node) => {
        constrain(node);
        node.homeX = node.x;
        node.homeY = node.y;
      });
      edges.forEach((edge) => { edge.length = Math.hypot(edge.target.x - edge.source.x, edge.target.y - edge.source.y); });
      draw();
      settle();
    }

    function point(event) {
      const matrix = svg.getScreenCTM();
      if (!matrix) return null;
      return new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    }

    nodes.forEach((node) => {
      const el = node.element;
      el.addEventListener('pointerdown', (event) => {
        if (event.button !== 0 || drag) return;
        const p = point(event);
        if (!p) return;
        suppressedClicks.delete(el);
        drag = { node, id: event.pointerId, startX: event.clientX, startY: event.clientY, offsetX: node.x - p.x, offsetY: node.y - p.y, moved: false, wasPinned: node.pinned };
        node.pinned = true;
        el.setPointerCapture(event.pointerId);
      });
      el.addEventListener('pointermove', (event) => {
        if (!drag || drag.node !== node || drag.id !== event.pointerId) return;
        if (!drag.moved && Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < 5) return;
        const p = point(event);
        if (!p) return;
        drag.moved = true;
        node.x = p.x + drag.offsetX;
        node.y = p.y + drag.offsetY;
        constrain(node);
        node.vx = 0;
        node.vy = 0;
        el.classList.add('is-dragging');
        draw();
        settle();
      });
      function endDrag(event) {
        if (!drag || drag.node !== node || drag.id !== event.pointerId) return;
        const moved = drag.moved;
        if (!moved) node.pinned = drag.wasPinned;
        else suppressedClicks.add(el);
        drag = null;
        el.classList.remove('is-dragging');
        if (el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId);
        if (moved) settle();
      }
      el.addEventListener('pointerup', endDrag);
      el.addEventListener('pointercancel', endDrag);
      el.addEventListener('lostpointercapture', endDrag);
      el.addEventListener('click', () => {
        if (suppressedClicks.has(el)) { suppressedClicks.delete(el); return; }
        if (node.kind === 'paper') selectPaper(el.dataset.paper);
        if (node.kind === 'topic') cycleTopic(node);
      });
      el.addEventListener('keydown', (event) => {
        const steps = { ArrowLeft: [-16, 0], ArrowRight: [16, 0], ArrowUp: [0, -16], ArrowDown: [0, 16] };
        if (steps[event.key]) {
          event.preventDefault();
          node.pinned = true;
          node.x += steps[event.key][0];
          node.y += steps[event.key][1];
          constrain(node);
          draw();
          settle();
        } else if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          if (node.kind === 'paper') selectPaper(el.dataset.paper);
          if (node.kind === 'topic') cycleTopic(node);
        }
      });
    });
    buttons.forEach((button) => button.addEventListener('click', () => selectPaper(button.dataset.paper)));
    network.querySelector('.network-reset').addEventListener('click', arrange);
    narrow.addEventListener('change', arrange);
    reducedMotion.addEventListener('change', settle);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && frame) { cancelAnimationFrame(frame); frame = 0; ticks = 0; }
    });
    selectPaper(selectedId);
    network.classList.add('is-interactive');
    network.querySelector('.network-canvas').hidden = false;
    network.querySelector('.network-paper-picker').hidden = false;
    arrange();
  });
})();
