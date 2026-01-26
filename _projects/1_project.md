---
layout: page
title: Visualizing Road Dust in Seoul
description: LIS2812 Introduction to Data Science
img: assets/img/seoul_dust_map.jpg
importance: 1
category: 2023
---

## 🌫️ Project Overview

This project visualizes **road-resuspended dust (PM10)** levels across Seoul.  
Road dust is a major source of urban particulate pollution, and unlike many pollutants, it is **re-suspended from road surfaces by vehicle movement**, making it difficult to control. Understanding where and when high concentrations occur can help inform more effective mitigation strategies.

Using open environmental data, I mapped regional differences in dust levels and explored whether **temperature** or **humidity** were related to pollution patterns.

---

## 📊 Data

The dataset comes from the **Korea Environment Corporation**, which measures road dust using a mobile monitoring system (TRAKER).  
I used monthly data from **January–March 2023** in Seoul.

**Key variables included:**

- Date of measurement  
- District and road name  
- Temperature  
- Humidity  
- Average road dust concentration (PM10)  
- Pollution level category  

---

## 🛠 Methods

I used Python for data processing and visualization:

- **pandas** – data cleaning and preparation  
- **geopy** – converting road names into geographic coordinates  
- **folium** – interactive map visualization  
- **matplotlib** – statistical plots  

On the map, each road segment is represented by a colored circle showing pollution level:

🔵 Very Good | 🟢 Good | 🟡 Moderate | 🟠 Bad | 🔴 Very Bad  

---

## 🗺 Road Dust Map

To understand spatial and temporal patterns of road-resuspended dust, I created visualizations for each month.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <img src="/assets/img/dust_january_map.jpg" class="img-fluid rounded z-depth-1">
    <div class="caption">January PM10 road dust levels in Seoul</div>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <img src="/assets/img/dust_february_map.jpg" class="img-fluid rounded z-depth-1">
    <div class="caption">February PM10 road dust levels in Seoul</div>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <img src="/assets/img/dust_march_map.jpg" class="img-fluid rounded z-depth-1">
    <div class="caption">March PM10 road dust levels in Seoul</div>
  </div>
</div>

Across the three months, most areas fell into the **“Very Good”** pollution category, but some districts showed noticeable month-to-month variation. 

---

## 📈 Environmental Factors

I examined whether road dust pollution levels were associated with **temperature** and **humidity** by visualizing their relationships for each month.

### January

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    <img src="/assets/img/jan_dust_temp_humidity_2d.jpg" class="img-fluid rounded z-depth-1">
  </div>
</div>
<div class="caption">
January: Road dust pollution category vs. temperature and humidity
</div>

### February

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    <img src="/assets/img/feb_dust_temp_humidity_2d.jpg" class="img-fluid rounded z-depth-1">
  </div>
</div>
<div class="caption">
February: Road dust pollution category vs. temperature and humidity
</div>

### March

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    <img src="/assets/img/mar_dust_temp_humidity_2d.jpg" class="img-fluid rounded z-depth-1">
  </div>
</div>
<div class="caption">
March: Road dust pollution category vs. temperature and humidity
</div>

Across all three months, no clear or consistent correlation emerged. This suggests that **temperature and humidity alone may not sufficiently explain variations in road-resuspended dust**.

---

## 💡 Takeaways

- Road dust levels vary by **location and month**, even within the same district  
- Most observed values were in the **lower pollution categories**, but local spikes exist  
- Temperature and humidity alone do **not** explain dust concentration patterns  

---

## 🔗 Tools Used
`Python · Pandas · Folium · Geopy · Matplotlib`
