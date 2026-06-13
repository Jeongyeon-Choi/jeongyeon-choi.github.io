---

layout: page
title: "Mental Health Discourse Analysis"
description: "LIS3813 Introduction to Text Processing"
img: assets/img/mindcafe_cover.jpg
importance: 1
category: 2024
published: true
---

## Overview

This project explores **mental health challenges across social groups** through large-scale text analysis of posts collected from the Korean online community platform *MindCafe*. Focusing on the **Employment/Career board** and the **Mental Health board**, the project investigates how concerns related to education, employment, interpersonal relationships, and emotional well-being vary across different life stages.

Using computational text analysis and visualization techniques, the project examines how stress, depression, anxiety, and academic pressure emerge within online discourse. The analysis combines temporal trend analysis, topic modeling, social network analysis, and word cloud visualization to identify recurring themes and emotional patterns across user groups.

---

## Data and Preprocessing

The dataset was collected from MindCafe’s **Employment/Career board** and **Mental Health board** using web crawling techniques. Approximately 15,000 posts were gathered, including post titles, authors, dates, and content.

The data source was selected because of:

* Diverse user demographics across age groups and occupations
* Continuous accumulation of posts since 2018
* Real-time reflection of employment, academic, and emotional concerns

To collect dynamically generated web content, the project utilized:

* BeautifulSoup
* Selenium

The collected data was stored and processed using:

* Pandas
* NumPy
* NLTK

Preprocessing included keyword filtering, regular expression matching, and demographic classification. The collected data was ultimately categorized into two primary groups — Teenagers and Adults — enabling comparative analysis of emotional and social concerns across different stages of life.

---

## Method

### Temporal Trend Analysis

The project analyzed monthly trends of posts containing keywords such as *job/employment*, *stress*, *study*, *school*, and *friends*.

The analysis revealed that:

* Employment-related stress increased during recruitment seasons
* School-related concerns peaked during examination and semester transition periods
* Stress-related discourse closely paralleled employment-related discourse over time

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/mindcafe_timeseries.png" class="img-fluid rounded z-depth-1">
  </div>
</div>

<div class="caption">
Monthly trend analysis of employment-, stress-, and school-related keywords.
</div>

---

### Word Cloud Visualization

To compare thematic differences between teenagers and adults, word cloud visualizations were generated for each group. Because MindCafe is a Korean online community platform, the visualizations were produced using Korean-language text data.

The teenager group emphasized words related to:

* Dreams
* Study
* Friends
* Parents

The adult group showed stronger associations with:

* Employment
* Stress
* Depression
* Social pressure

The visual contrast shows how concerns shift from aspiration and academic identity toward employment instability and emotional exhaustion over time.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    <img src="/assets/img/mindcafe_wordcloud.png" class="img-fluid rounded z-depth-1">
  </div>
</div>

<div class="caption">
Comparative word cloud visualization between teenager and adult groups.
</div>

---

### Social Network Analysis

To investigate relationships between mental health-related concepts, the project applied **co-occurrence network analysis** and **ego network analysis** to posts collected from MindCafe’s Employment/Career board and Mental Health board.

The first visualization compares **keyword co-occurrence structures** between the two boards. Nodes represent frequently appearing keywords, while edges indicate co-occurrence relationships between terms. Variations in node centrality and edge density reveal how emotional concerns are organized differently across discussion contexts.

In the **Employment/Career board**, keywords related to study, university, and exams formed dense central clusters, suggesting job preparation and university entrance exam-related pressures are contributors to stress. The **Mental Health board** showed stronger associations between depression, parents, psychiatry, and interpersonal relationships, reflecting parental and peer relationships are significant stressors.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/mindcafe_network.png" class="img-fluid rounded z-depth-1">
  </div>
</div>

<div class="caption">
Keyword co-occurrence networks from the Employment/Career board and Mental Health board.
</div>

---

The second visualization presents **ego network analyses** centered on the keywords *Depression* and *Stress*. These networks isolate relationships surrounding specific emotional concepts to examine how associated terms cluster around them.

The *Depression* network showed strong connections with keywords related to anxiety, suicide, school life, friendships, and treatment, suggesting that depressive discourse frequently overlaps with interpersonal and institutional pressures. Meanwhile, the *Stress* network demonstrated broader and denser interconnections between school, consultation, anxiety, and interpersonal relationships. One interesting takeaway from qualitative content analysis was that stress often exacerbates to depression and suicidal ideation.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/mindcafe_ego.png" class="img-fluid rounded z-depth-1">
  </div>
</div>

<div class="caption">
Ego network analysis centered on the keywords <i>Depression</i> and <i>Stress</i>.
</div>


---

### Topic Modeling

**LDA (Latent Dirichlet Allocation) topic modeling** was conducted to identify recurring thematic structures across posts.

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

---

## Conclusion

Across both boards, stressors related to education, career, and interpersonal relationships are prevalent. In the mental health context, depression and stress are central, closely linked to school, family, and peer relations. Effective mental health strategies should consider these factors, emphasizing continuous support, personalized counseling, and fostering a supportive
community environment.

---

## Tools Used

`Python · BeautifulSoup · Selenium · Pandas · NLTK · pyLDAvis · WordCloud · Topic Modeling · Social Network Analysis`
