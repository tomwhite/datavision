---
layout: post
title:  "22. Shopping trolleys in Bristol rivers"
tags: [d3, Vega-lite]
---

A few years ago Bristol City Council released a dataset containing the results of an annual survey of abandoned shopping trolleys in Bristol rivers from 2005 to 2011. This is one of those datasets that turns up in lists of "quirky" datasets.

<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vega@5.10.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@4.7.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.3.2"></script>
<div id="plot"></div>
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/22-shopping-trolleys.js"></script>

The chart is an isotype chart, which is basically a barchart made up of icons to make it more visually appealing. In ["Fundamentals of Data Visualization"](https://serialmentor.com/dataviz/), Claus Wilke suggests that you ["make your figures memorable"](https://serialmentor.com/dataviz/telling-a-story.html#make-your-figures-memorable), and the isotype chart is one way of doing that.

**Visualization type**: isotype chart, pictogram

**Data source**: [Bristol City Council, archived by The National Archives](https://webarchive.nationalarchives.gov.uk/20161024054845/https://data.gov.uk/dataset/abandoned-shopping-trolleys-bristol-rivers), CSV, 1.2 KB

**Technical notes**: generated using [d3](https://d3js.org/) for data loading, and [Vega-lite](https://vega.github.io/vega-lite/) for the chart; [code](https://github.com/tomwhite/datavision-code/tree/master/22-shopping-trolleys-in-bristol-rivers)
