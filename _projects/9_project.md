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

Analyzed **46,216 Google Play Store reviews from six mental health apps** to examine how app quality and emotional tone relate to user ratings. Developed a framework of **four quality dimensions and sixteen factors** based on MARS, MAUQ, PSSUQ, and SUS.

**Methods:** TF-IDF Keyword Extraction · Quality Factor Labeling · VADER Sentiment Analysis · Linear Regression · Moderation Analysis

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

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/mhapp_research framework.png" class="img-fluid rounded z-depth-1" alt="Research framework for app quality and user experience">
  </div>
</div>

<div class="caption">
Research framework
</div>
---

## TF-IDF Keyword Extraction

TF-IDF was used to identify important word stems in the review corpus. Words with a maximum TF-IDF value of **0.7 or higher** were selected and then mapped to the app quality framework.

Examples of mapped word stems include:

| Quality Factor | Example Word Stems |
|---|---|
| Learnability | easy, learn, quick, simple, understand |
| Navigation | screen, menu, button, access, page |
| Stability | crash, bug, freeze, lag, load |
| Credibility | trust, evidence, expert, source, reliable |
| Entertainment | fun, enjoy, game, interesting, love |

## Key Findings

- **App quality:** Functionality and information mentions were associated with lower ratings, while usability and engagement mentions were associated with higher ratings.
- **Specific factors:** Navigation and completeness showed the strongest negative associations with ratings, while entertainment and interactivity were positively associated.
- **Emotional context:** Sentiment moderated the relationship between quality-factor mentions and ratings, with the strongest positive interaction effects for navigation and completeness.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/mhapps_detailed_quality_coefficients.png"
         class="img-fluid rounded z-depth-1"
         alt="Regression coefficients of detailed app quality factors">
  </div>
</div>

<div class="caption">
  Associations between app quality factors and user ratings.
</div>

**Takeaway:** Understanding user experience requires considering both the quality factors users mention and the emotional context of their reviews.

**Tools:** Python · Pandas · Scikit-learn · Statsmodels · VADER
## Tools Used
`Python · Pandas · Scikit-learn · Statsmodels · TF-IDF · VADER · Text Mining · Linear Regression · User Review Analysis `
