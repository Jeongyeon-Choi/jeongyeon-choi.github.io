(() => {
  document.querySelectorAll('[data-research-network]').forEach((network) => {
    const nodes = [...network.querySelectorAll('.network-paper')];
    const buttons = [...network.querySelectorAll('.network-paper-picker button')];
    const details = [...network.querySelectorAll('.network-detail')];
    if (!nodes.length || !details.length) return;

    function selectPaper(id) {
      [...nodes, ...buttons].forEach((control) => {
        control.setAttribute('aria-pressed', String(control.dataset.paper === id));
      });
      details.forEach((detail) => { detail.hidden = detail.dataset.paper !== id; });
      network.querySelectorAll('.network-edges [data-paper], .network-topic').forEach((element) => {
        element.classList.toggle('is-selected', element.dataset.paper === id);
      });
    }

    [...nodes, ...buttons].forEach((control) => {
      control.addEventListener('click', () => selectPaper(control.dataset.paper));
    });
    nodes.forEach((node) => {
      node.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectPaper(node.dataset.paper);
        }
      });
    });

    // The same graph reflows vertically on small screens; text never scales down.
    const narrow = window.matchMedia('(max-width: 575px)');
    function arrange() {
      const mobile = narrow.matches;
      network.querySelector('svg').setAttribute('viewBox', mobile ? '0 0 340 440' : '0 0 700 420');
      network.querySelector('.network-ego').setAttribute('transform', mobile ? 'translate(170 68)' : 'translate(350 190)');
      nodes.forEach((node, index) => {
        const x = mobile ? (index === 0 ? 85 : 255) : (index === 0 ? 150 : 550);
        const paperY = mobile ? 245 : 130;
        const topicY = mobile ? 365 : 330;
        const id = node.dataset.paper;
        node.setAttribute('transform', `translate(${x} ${paperY})`);
        network.querySelector(`.network-topic[data-paper="${id}"]`).setAttribute('transform', `translate(${x} ${topicY})`);
        const mobileEdge = index === 0 ? 'M136 68 C20 70 5 245 66 245' : 'M204 68 C320 70 335 245 274 245';
        network.querySelector(`.network-authorship[data-paper="${id}"]`).setAttribute('d', mobile ? mobileEdge : `M350 190 L${x} ${paperY}`);
        network.querySelector(`.network-topic-edge[data-paper="${id}"]`).setAttribute('d', `M${x} ${paperY + 23} L${x} ${topicY - 10}`);
      });
    }
    arrange();
    narrow.addEventListener('change', arrange);
    selectPaper(nodes[0].dataset.paper);
    network.classList.add('is-interactive');
    network.querySelector('.network-canvas').hidden = false;
    network.querySelector('.network-paper-picker').hidden = false;
  });
})();
