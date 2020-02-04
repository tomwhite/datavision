---
layout: post
title:  "6. A&E waiting times in Wales"
tags: [Python, Altair, Vega-lite]
---

The A&E waiting times in England have taken a big dip this winter as the number of people seen within the four-hour target was at it lowest since the measure was introduced in 2004. The Guardian produced a [good visualization](https://www.theguardian.com/society/2019/nov/14/ae-waiting-times-in-england-hit-worst-ever-level), which inspired the one here.

Has the same thing happened in Wales? Sadly yes. Over the last ten years the figures have never met the 95% target. And over the last year (2019) the percentage of patients seen within four hours is at its lowest level.

The chart shows a clear seasonal effect: lower performance in the winter with a rebound in the summer (when there is generally less illness). Last year (2019) however there was no discernable rebound, which is worrying since it suggests A&E departments are increasingly under sustained pressure throughout the year.

![A&E waiting times in Wales]({{ site.url }}{{ site.baseurl }}/assets/img/06-a-and-e-waiting-times-in-wales.png)

There's also an [interactive version]({{ site.url }}{{ site.baseurl }}/06-a-and-e-waiting-times-in-wales-interactive.html), and [a yearly version]({{ site.url }}{{ site.baseurl }}/06-a-and-e-waiting-times-in-wales-by-year-interactive.html) where each year is a separate line.

**Visualization type**: line chart

**Data source**: [StatsWales](https://statswales.gov.wales/Catalogue/Health-and-Social-Care/NHS-Hospital-Waiting-Times/Accident-and-Emergency/performanceagainst4hourtargetallemergencycarefacilities-by-localhealthboard), CSV, 8.6 MB

**Technical notes**: generated using [Altair](https://altair-viz.github.io/), which generates [Vega-lite](https://vega.github.io/vega-lite/) code; [code](https://github.com/tomwhite/datavision-code/tree/master/06-a-and-e-waiting-times-in-wales)

**See also**: [A&E waiting times in England at their worst on record](https://www.theguardian.com/society/2019/nov/14/ae-waiting-times-in-england-hit-worst-ever-level), The Guardian
