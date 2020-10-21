---
layout: post
title:  "43. Passive houses in the UK"
tags: [R, Leaflet]
---

We are in the last few weeks of our house build. It's a low-energy house, and while it does not meet [passive house certification](https://passivhaustrust.org.uk/certification.php) requirements (since it's a retrofit, which makes it much harder to achieve the stringent requirements) it uses passive house components and techniques (insulation, airtightness, mechanical ventilation, air source heat pump).

This week's visualization shows the location of passive houses in the UK:

<a href="{{ site.url }}{{ site.baseurl }}/43-passive-houses-in-the-uk-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/43-passive-houses-in-the-uk.png" alt="A Level grades"/></a>

(Click on the image to try the [interactive version]({{ site.url }}{{ site.baseurl }}/43-passive-houses-in-the-uk-interactive.html), and find details of the buildings.)

The data is from the [Passive House Database](https://passivehouse-database.org/), so it necessarily only includes properties that the owners have registered.

**Visualization type**: map

**Data source**: [Passive House Database](https://passivehouse-database.org/) (scraped HTML, 1.0 MB)

**Technical notes**: generated using [Leaflet for R](https://rstudio.github.io/leaflet/); [code](https://github.com/tomwhite/datavision-code/tree/master/43-passive-houses-in-the-uk)

