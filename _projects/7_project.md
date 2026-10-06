---
layout: page
title: "Mental Health Discourse Analysis"
description: "LIS3813 Introduction to Text Processing"
img: assets/img/mindcafe_cover.jpg
importance: 1
category: 2024
published: false
---

## Overview

Analyzed approximately **15,000 posts** from *MindCafe*, a Korean online mental health community, to explore how academic, career, and interpersonal concerns differ between teenagers and adults.

**Methods:** Temporal Analysis · Topic Modeling (LDA) · Social Network Analysis · Word Cloud Visualization

## Key Findings

- **Age-group differences:** Teenagers frequently discussed studies, friendships, and parents, while adults emphasized employment, stress, and depression.
- **Temporal patterns:** Employment- and school-related discussions peaked around recruitment seasons, examinations, and semester transitions.
- **Social network analysis:** Keyword co-occurrence networks highlighted study and exam clusters in the Employment/Career board and links among depression, family, and interpersonal relationships in the Mental Health board. Ego networks further explored terms associated with depression and stress.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/mindcafe_ego.png" class="img-fluid rounded z-depth-1">
  </div>
</div>

<div class="caption">
Ego network analysis centered on the keywords <i>Depression</i> and <i>Stress</i>.
</div>

## Topic Modeling (LDA) Results

For the **Employment/Career board**, the identified topics included:

1. Pre-university stress — study, school, parents, exams
2. University students’ academic and career worries — study, career, job, graduation
3. Anxiety and lethargy — anxiety, mood, depression
4. Job preparation stress — job, interview, qualifications
5. Family relations and conflicts — parents, family, counseling
6. Workplace stress — job, company, resignation, workload

For the **Mental Health board**, the identified topics included:

1. Interpersonal relationships — friends, emotions, personality
2. Depression and emotional regulation — depression, self-harm, suicidal thoughts
3. Family and school life — parents, school, family conflicts
4. Anxiety and stress — anxiety, stress, trauma
5. Mental health counseling — counseling, psychiatry, treatment
6. Workplace stress — workplace, job, career
7. Psychiatric care and depression treatment — depression, treatment, diagnosis
8. Academic stress — study, school, exams
9. Life and marriage concerns — marriage, life, existential worries



**Tools:** Python · BeautifulSoup · Selenium · Pandas · NLTK · pyLDAvis · WordCloud
