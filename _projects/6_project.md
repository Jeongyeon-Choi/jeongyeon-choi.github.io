---
layout: page
title: "User Experience in Mental Health Applications"
description: "LIS7010 User Interface Design"
img: "assets/img/mhapps_cover.jpg"
importance: 1
category: "2025"
published: true
---

## Overview

This project investigates the relationship between application quality factors and user experience in mental health applications (MHapps). As MHapps have become increasingly popular tools for emotional support and self-management, understanding how users evaluate these apps has become an important research issue. This project focuses on user-generated reviews from the Google Play Store. Using text mining, sentiment analysis, and regression modeling, this project examines how different app quality factors appear in user reviews and how they are associated with user ratings.

---

## Research Questions

This project addresses three main research questions:

1. What quality factors are emphasized in existing app usability and quality evaluation questionnaires?
2. How do mental health app quality factors influence user experience?
3. Does emotional polarity moderate the relationship between app quality factors and user experience?

---

## Research Framework

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/mhapps_research_model.png" class="img-fluid rounded z-depth-1" alt="Research framework for app quality and user experience">
  </div>
</div>

<div class="caption">
Research framework
</div>

The research framework consists of four major app quality dimensions: **Usability**, **Functionality**, **Information**, and **Engagement**. These quality dimensions are expected to influence **User experience**, measured through Google Play Store review ratings. **Effective polarity**, derived from sentiment analysis, is included as a moderating variable to examine whether emotional context changes the relationship between app quality and user experience.

---
## Data

The dataset consists of Google Play Store reviews collected from six mental health applications.

| Application | App ID | Number of Reviews |
|---|---:|---:|
| Voidpet Garden: Mental Health | com.voidpet | 3,210 |
| BetterMe: Mental Health | com.gen.bettermeditation | 4,886 |
| MindDoc: Mental Health Support | de.moodpath.android | 8,120 |
| BetterHelp - Therapy | com.betterhelp | 10,000 |
| Youper: AI Therapy | br.com.youper | 10,000 |
| Wysa: Anxiety, therapy chatbot | bot.touchkin | 10,000 |
<br>
In total, **46,216 user reviews** were collected. After the quality-factor labeling process, **33,923 valid labeled reviews** were used for the final analysis.

---

## App Quality Framework

To construct the app quality framework, this project reviewed four established usability and quality evaluation instruments:

- **MARS**: Mobile App Rating Scale
- **MAUQ**: Mobile App Usability Questionnaire
- **PSSUQ**: Post-Study System Usability Questionnaire
- **SUS**: System Usability Scale

Based on these instruments, app quality was organized into four higher-level categories and sixteen detailed quality factors.

| Higher-level Quality Factor | Detailed Quality Factors |
|---|---|
| Usability | Learnability, Navigation, Error Recovery, Feedback |
| Functionality | Completeness, Stability, Responsiveness, Integration |
| Information | Accuracy, Visual Explanation, Credibility, Structure |
| Engagement | Design, Interactivity, Customization, Entertainment |

---

## Methodology

### 1. Text Preprocessing

The review texts were cleaned and standardized before analysis. The preprocessing steps included:

- Lowercase conversion
- Stopword removal
- Punctuation removal
- Number and whitespace removal
- Stemming
- Document-term matrix construction

This process converted unstructured review text into a structured format for quantitative analysis.
<br>
### 2. TF-IDF Keyword Extraction

TF-IDF was used to identify important word stems in the review corpus. Words with a maximum TF-IDF value of **0.7 or higher** were selected and then mapped to the app quality framework.

Examples of mapped word stems include:

| Quality Factor | Example Word Stems |
|---|---|
| Learnability | easy, learn, quick, simple, understand |
| Navigation | screen, menu, button, access, page |
| Stability | crash, bug, freeze, lag, load |
| Credibility | trust, evidence, expert, source, reliable |
| Entertainment | fun, enjoy, game, interesting, love |
<br>
### 3. Quality Factor Labeling

Each review was labeled according to whether it contained word stems associated with specific app quality factors. A single review could be assigned to multiple quality factors if it included several relevant terms. For example, a review mentioning both “easy to use” and “fun” could be labeled as both "Learnability" and "Entertainment".
<br>
### 4. Sentiment Analysis

VADER sentiment analysis was applied to calculate the emotional polarity of each review. This project used **effective polarity**, defined as the difference between positive and negative sentiment scores. Effective polarity was used as a moderating variable to examine whether emotional context changes the effect of app quality factors on user ratings.
<br>
### 5. Linear Regression

Linear regression models were used to examine the relationship between app quality factors and user ratings. The dependent variable was the review rating, and the independent variables were app quality factor labels. Interaction terms between detailed quality factors and effective polarity were also included to examine whether emotional tone moderates the relationship between app quality and user experience.

---

## Results

### Higher-Level Quality Factors

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/mhapps_top_quality_coefficients.png" class="img-fluid rounded z-depth-1" alt="Regression coefficients of higher-level app quality factors">
  </div>
</div>

<div class="caption">
Regression coefficients of higher-level app quality factors.
</div>

| Quality Factor | Coefficient | Interpretation                           |
| -------------- | ----------: | ---------------------------------------- |
| Functionality  |      -0.674 | Strong negative association with ratings |
| Information    |      -0.441 | Negative association with ratings        |
| Usability      |       0.192 | Positive association with ratings        |
| Engagement     |       0.266 | Positive association with ratings        |
<br>
The results show that **Functionality** and **Information** were negatively associated with user ratings, while **Usability** and **Engagement** were positively associated with ratings. Functionality showed the strongest negative coefficient. This suggests that users often mention functionality when they are dissatisfied with app performance, missing features, crashes, slow responses, or technical problems. By contrast, Engagement showed the strongest positive coefficient among the higher-level factors, which indicates that users tend to rate apps more positively when they describe them as enjoyable, interactive, visually appealing, or engaging.

---

### Detailed Quality Factors

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/mhapps_detailed_quality_coefficients.png" class="img-fluid rounded z-depth-1" alt="Regression coefficients of detailed app quality factors">
  </div>
</div>

<div class="caption">
Regression coefficients of detailed app quality factors.
</div>

Among the detailed factors, **Navigation** and **Completeness** showed the strongest negative associations with ratings. This suggests that users are likely to give lower ratings when they mention difficulty navigating the app or when they feel that important features are missing. **Credibility** also showed a strong negative relationship with ratings. This may reflect user concerns about whether app content is trustworthy, evidence-based, or professionally reliable. On the other hand, **Entertainment** and **Interactivity** was also positively associated with ratings, which suggestes that users value apps that respond to their input and provide interactive and enjoyable experiences.

---

### Moderating Effect of Emotional Polarity

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/mhapps_interaction_coefficients.png" class="img-fluid rounded z-depth-1" alt="Interaction effects between app quality factors and effective polarity">
  </div>
</div>

<div class="caption">
Interaction effects between detailed app quality factors and effective polarity.
</div>

The interaction analysis shows that emotional polarity plays an important moderating role. **Navigation × Polarity** and **Completeness × Polarity** showed the strongest positive interaction effects. This means that although navigation and completeness were negatively associated with ratings when considered alone, they became strong positive satisfaction factors when mentioned in a positive emotional context. For example, users may complain when navigation is confusing or when features are incomplete, but they may also give high ratings when they describe navigation as smooth or features as complete. This finding shows that the meaning of a quality factor depends on the emotional context in which it appears.

---

## Discussion

The results suggest that mental health app users evaluate applications through both practical and emotional dimensions. Technical and functional issues are strongly connected to dissatisfaction, while engaging and interactive experiences are associated with positive ratings.

Functionality-related complaints may be especially damaging in mental health apps because users may rely on these tools during moments of stress, anxiety, or emotional vulnerability. If an app crashes, responds slowly, or lacks expected features, users may feel unsupported or frustrated. At the same time, the positive role of engagement suggests that mental health apps are not evaluated only by clinical or functional usefulness. Users also value whether the app feels enjoyable, responsive, personalized, and emotionally supportive.

The moderating effect of emotional polarity further suggests that keyword-based review analysis should be interpreted carefully. The same quality factor can appear in either a complaint or a compliment. Therefore, review analysis should consider both what users mention and how they emotionally frame it.

---

## Contributions

* Developed a mental health app quality framework by synthesizing MARS, MAUQ, PSSUQ, and SUS.
* Analyzed 46,216 Google Play Store reviews from six mental health applications.
* Used TF-IDF-based text mining to identify quality-related word stems.
* Applied VADER sentiment analysis to calculate effective polarity.
* Used linear regression to examine the relationship between app quality factors and user ratings.
* Examined how emotional polarity moderates the effect of app quality factors on user experience.
* Identified key satisfaction and dissatisfaction factors in mental health app reviews.

---

## Tools Used
`Python · Pandas · Scikit-learn · Statsmodels · TF-IDF · VADER · Text Mining · Linear Regression · User Review Analysis `
