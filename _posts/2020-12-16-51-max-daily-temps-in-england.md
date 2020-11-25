---
layout: post
title:  "51. Maximum daily temperatures in central England since 1878"
tags: d3
---

The Met Office has an amazing dataset of the mean daily temperature recorded in central England that goes back to 1772. The mean monthly data goes back to 1659, and is ["the longest available instrumental record of temperature in the world"](https://www.metoffice.gov.uk/hadobs/hadcet/).

This heatmap is a visualization of *maximum* daily temperatures that goes back to 1878.

<a href="{{ site.url }}{{ site.baseurl }}/51-max-daily-temps-in-england-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/51-max-daily-temps-in-england.png" alt="Maximum daily temperatures in central England since 1878"/></a>

On the [interactive version]({{ site.url }}{{ site.baseurl }}/51-max-daily-temps-in-england-interactive.html) you can hover to see the recorded maximum temperature on any particular day.

You can see heatwaves quite clearly - the one in the summer of 1976, for example. You can make out the cold winter of 1962-63 too, where the maximum temperature hovered either side of freezing for weeks.

This isn't the best visualization to see warming - the graph on the [Met Office page for this dataset](https://www.metoffice.gov.uk/hadobs/hadcet/), and [this plot by cavedave](https://gist.github.com/cavedave/9e94d345ebb19eec3b47228dd60c62dd) both show the warming trend over the last few decades.

**Visualization type**: heatmap

**Data source**: [Met Office Hadley Centre observations datasets](https://www.metoffice.gov.uk/hadobs/hadcet/), space delimited text, 350 KB.

**Technical notes**: generated using [d3](https://d3js.org/); [code](https://github.com/tomwhite/datavision-code/tree/master/51-max-daily-temps-in-england)
