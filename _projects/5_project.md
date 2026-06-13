---

layout: page
title: "Information Behavior in Serious Leisure"
description: "LIS7000 Research Methods in Library and Information Science"
img: "assets/img/serious_leisure_cover.png"
importance: 2
category: "2024"
published: true
---

## Overview

This project investigates the **information behavior of baseball enthusiasts** through the lens of **Serious Leisure Theory** (Stebbins, 1982). Focusing on baseball fandom as a serious leisure activity, the study explores how different levels of leisure engagement shape information activities. The project connects leisure studies with information behavior research by showing how fandom can become an information-rich activity. The project was designed as an opportunity to practice applying as many statistical methods learned in class as possible to a personally interesting research topic.

---

## Research Framework

The study is based on two conceptual frameworks: **Gibson (1982)'s Serious Leisure Theory** and **Hektor (2001)’s information activity framework**.

**Serious leisure** is described as the systematic pursuit of an activity that participants find so substantial and interesting that they acquire and express the special skills, knowledge, and experience required for that activity (Stebbins, 1982). The adjective “serious” refers to characteristics such as sincerity, dedication, importance, and carefulness, rather than emotions such as solemnity, lack of enjoyment, pain, or anxiety (Stebbins, 2001). Serious leisure was measured through six characteristics:

* **Perseverance**: The willingness to continue participating in the activity despite challenges, failures, or difficulties.
* **Career**: The long-term progression of participation through stages such as beginning, development, establishment, maintenance, and decline.
* **Significant Effort**: The investment of substantial time, knowledge, training, or skill development related to the activity.
* **Durable Benefits**: The lasting personal and social rewards gained through participation, such as self-development, achievement, and social connection.
* **Identity**: A strong sense of self-definition and personal attachment formed through participation in the activity.
* **Unique Ethos**: The shared culture, values, norms, language, and social practices that emerge within the participant community.

**Information behavior** was examined through four information activities:

* **Search**
* **Browsing**
* **Monitoring**
* **Sharing**

The main research question was whether baseball fans with higher serious leisure scores engage in more active information behavior than those with lower scores.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/serious_leisure_framework.png" class="img-fluid rounded z-depth-1" alt="Research framework">
  </div>
</div>

<div class="caption">
Research framework
</div>

---

## Data Collection

Data were collected through an online survey using Google Forms with a 5-point Likert scale. A total of **52 valid responses** were collected. Most survey participants were female (63.5%) and were between the ages of 20 and 24 (75%), while only 5.7% were over the age of 30. Additionally, 61.5% of participants reported having watched baseball games for more than seven years. The internal consistency of the serious leisure scale was high, with **Cronbach’s alpha = 0.86**. 

---

## Results
### Information Needs 

The study found that baseball fans’ information needs changed depending on the game context.

**Before games**, participants mainly searched for schedule information (28.40%), starting pitchers (23.45%), weather (18.52%), player statistics (10.49%), and team records (9.88%). 

**During games**, they focused on real-time scores (35.34%), player substitutions (25.00%), live reactions (18.10%), and commentary (17.24%). 

**After games**, they looked for highlights (26.62%), game records (24.46%), fan community responses (18.71%), player interviews (17.27%), and information about upcoming games (12.23%).

---

### Information Activities

The study examined four types of information activities: search, browsing, monitoring, and sharing.

Across all participants, **monitoring** (Mean=4.21, SD=1.09) was the most active information behavior, followed by search (Mean=4.04, SD=0.97), browsing (Mean=3.92, SD=1.17), and sharing (Mean=3.84, SD=1.16). The high serious leisure group scored higher than the low serious leisure group in all four information activities.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/baseball_information_activities.png" class="img-fluid rounded z-depth-1" alt="Information activity comparison">
  </div>
</div>

<div class="caption">
Comparison of information activities between serious leisure groups.
</div>

Independent t-tests showed statistically significant differences between the high and low serious leisure score groups:

* **Search**: t = 3.92, p = < 0.01
* **Browsing**: t = 4.00, p = < 0.01
* **Monitoring**: t = 3.08, p = < 0.01
* **Sharing**: t = 2.35, p = < 0.05

---

### Regression Analysis

Simple linear regression showed that serious leisure score had a positive effect on all four information activities and on total information activity.

The regression model showed the strongest explanatory power for **total information activity** (R² = 0.54), which was calculated by summing the scores of the four information activities.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0 text-center">

    <img src="/assets/img/baseball_regression_total.png"
         class="img-fluid rounded z-depth-1"
         alt="Regression analysis">

    <div class="caption mt-2">
      Regression analysis showing the relationship between serious leisure score and total information activity.
    </div>

  </div>
</div>

---

### Multiple Regression Analysis

Multiple regression analysis was conducted to examine which serious leisure characteristics most strongly influenced information activities.

Among the six serious leisure characteristics, **significant effort** (coef = 1.57, p < 0.001) had the strongest positive effect on overall information activities. The analysis also showed that different serious leisure characteristics may influence different types of information behavior, which indicates that fandom-related information practices are shaped by multiple psychological and behavioral dimensions.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0 text-center">
    
    <img src="/assets/img/baseball_coefficients.png"
         class="img-fluid rounded z-depth-1"
         alt="Regression coefficient visualization">

    <div class="caption mt-2">
      Regression coefficient visualization.
    </div>

  </div>
</div>

---
## Limitations 

First, because data were collected from a limited anonymous online community, the sample may have been concentrated within a specific age group, making it difficult to generalize the findings. 

Second, this study did not consider other factors that may influence information activities, such as individuals’ digital literacy or information accessibility. Future research need to incorporate qualitative approaches to gain a deeper understanding of baseball enthusiasts’ information behaviors and include additional variables to improve explanatory power.

Finally, this study lacks an examination of how various personal and social benefit factors of serious leisure influence continued participation intentions. Future research addressing this issue may help information service providers more effectively meet the information needs of leisure participants while developing strategies that encourage long-term engagement.

---
## References

Hektor, A. (2001). *What’s the use: Internet and information behavior in everyday life*. Linköping University.

Stebbins, R. A. (1982). Serious leisure: A conceptual statement. *Pacific Sociological Review, 25*(2), 251–272.

Stebbins, R. A. (2001). *New directions in the theory and research of serious leisure*. Edwin Mellen Press.



---
## Tools Used

`Google Forms · Python · Pandas · NumPy · Scikit-learn · Statsmodels · Matplotlib · K-means Clustering · t-test · Linear Regression · Multiple Regression · Survey Research`
