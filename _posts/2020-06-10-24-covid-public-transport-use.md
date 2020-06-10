---
layout: post
title:  "24. Public transport use in European cities during COVID-19"
tags: [Vega-lite]
---

COVID-19 lockdowns in Europe have been gradually lifted over the last few weeks, so I was interested to see how public transport use has recovered. This chart uses online journey planning as a proxy for public transport use in a few European cities (data is from Citymapper):

<script src="https://cdn.jsdelivr.net/npm/vega@5.10.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@4.7.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.3.2"></script>
<div id="plot"></div>
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/24-covid-public-transport-use.js"></script>

The dropoff in usage in late February for Milan, and in early March for the other cities is remarkable.

Stockholm didn't have strict lockdown measures, but the drop in mobility was still dramatic, although it never dropped to the low levels of the other cities. London has a slight lag of a few days.

Easing lockdown has seen increases in mobility, but these are nowhere near pre-lockdown levels. This probably reflects people's cautiousness—it would be interesting to see if private transport (i.e. cars) usage has gone up more.

**Visualization type**: line chart

**Data source**: [Citymapper](https://citymapper.com/CMI), CSV, 24 KB

**Technical notes**: generated using [Vega-lite](https://vega.github.io/vega-lite/) code; [code](https://github.com/tomwhite/datavision-code/tree/master/24-covid-public-transport-use)

**See also**: [13. COVID-19 UK daily tests](http://tom-e-white.com/datavision/13-covid-19-uk-daily-tests.html)
