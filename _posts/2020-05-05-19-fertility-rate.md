---
layout: post
title: "19. Fertility rate"
tags: d3
---

Fertility rate - which is defined as the number of children born per woman in a population - is in decline across the world, and [has been for over half a century](https://ourworldindata.org/fertility-rate#the-global-decline-of-the-fertility-rate-since-1950).

I wanted to show in a single chart what the latest data showed for each country in the world, while taking each country's population into account.

<a href="{{ site.url }}{{ site.baseurl }}/19-fertility-rate-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/19-fertility-rate.svg" alt="Fertility rate by country, 2015"/></a>

[Click for an [interactive version]({{ site.url }}{{ site.baseurl }}/19-fertility-rate-interactive.html).]

This is what I call a beeswarm bubble chart - like a regular beeswarm chart, but with each data point shown as a circle whose area represents another variable, population in this case. Note that the y-axis doesn't measure anything, the circles are just placed to avoid overlaps. The x-axis, on the other hand, shows the fertility rate, and in this chart it _decreases_ from left to right, to reflect the fact that fertility has been decreasing over time, and time is generally portrayed on graphs so it increases from left to right. (This choice was made on the first chart in this article, ["South Korea’s population paradox"](https://www.bbc.com/worklife/article/20191010-south-koreas-population-paradox).)

What I like about this chart is that you can judge at a glance how much of the world is on either side of the replacement rate of 2.1 births per woman on average, the rate that is needed to maintain a stable population.

**Visualization type**: beeswarm bubble chart

**Data source**: [Children per woman](https://ourworldindata.org/fertility-rate#the-global-decline-of-the-fertility-rate-since-1950), Our World in Data, CSV, 401 KB; plus other OWID datasets for country populations, and country to continent metadata 

**Technical notes**: generated using [d3](https://d3js.org/), using Mike Bostock's [Beeswarm](https://observablehq.com/@d3/beeswarm) code, [modifed to show bubbles](https://observablehq.com/@tomwhite/beeswarm-bubbles); [code](https://github.com/tomwhite/datavision-code/tree/master/19-fertility-rate)

**See also**: [Empty Planet](https://www.penguinrandomhouse.com/books/545397/empty-planet-by-darrell-bricker-and-john-ibbitson/) by Darrell Bricker and John Ibbitson, for a fascinating discussion about population decline and its possible ramifications this century.
