---
layout: post
title:  "53. Metadatavision"
tags: [R, ggplot2]
---

A year ago I came up with the idea of creating one data visualization per week in 2020. I wanted to learn to use some new tools, and to put into practice some of the techniques I'd read about in Claus Wilke's book, [Fundamentals of Data Visualization](https://clauswilke.com/dataviz/).

52 weeks of visualizations later, what did I learn? Here are some summary charts:

![Metadatavision]({{ site.url }}{{ site.baseurl }}/assets/img/53-metadatavision.png)

As you can see from the bar chart of visualization libraries, I grew to love d3 and it quickly became my "go to" tool. It allows you to do almost anything, but requires a lot of work. I would often use ggplot2 to do a quick analysis, then turn to d3 to present the data in exactly the way I wanted to - particularly if it involved some kind of interaction or animation. ggplot2 is great, it's much easier to generate an off-the-shelf chart - so I used this a lot too, and spent some time trying to improve on the default presentation (shout out to [cowplot](https://cran.r-project.org/web/packages/cowplot/vignettes/introduction.html) here, also from Claus Wilke, and used in the charts above). Vega-lite is in third place - I didn't reach for it as much, but I can see it becoming a useful output from other tools (like ggvis and Altair).

The second bar chart shows the distribution of the type of visualization, divided into families (irrespective of the tool used to produce it). The families are from Andy Kirk's handy [Chartmaker Directory](https://chartmaker.visualisingdata.com/) (the same ones appear in his [book](https://www.visualisingdata.com/book/) too), and are intended to capture the primary role of each chart.

Most of the visualizations have a temporal dimension (how does _x_ change over time?). I became aware of my bias here, and consciously tried to come up with visualizations that did not have a time dimension (and in fact most of my favourites were not time plots, see below). I did produce a large variety of chart types though (not shown on the chart, but the visualization type is listed on the page for each visualization) - something else that I consciously tried to do.

The third chart shows the distribution of the size of each dataset. The dataset sizes ranged over 9 orders of magnitude - from a few hundred bytes to tens of gigabytes. I didn't pay much attention to this - my prime interest was finding interesting ways of presenting interesting data. There was no correlation in my mind between dataset size and how interesting it was - I was certainly not trying to visualize large datasets (I was quite happy to do so, but never needed more processing power than a single machine to do so).

The biggest challenge was finding interesting datasets, then turning them into a form suitable for visualization. This "data cleaning" step is notorious amongst data scientists as being slow and hard to automate. I didn't have any special tricks here: I generally just wrote a Python script to do any pre-processing I needed. I've published all of the code on [GitHub](https://github.com/tomwhite/datavision-code).

**My five favourite visualizations**

In the order I made them:

[**Hamilton songs (Week 11)**](http://tom-e-white.com/datavision/11-hamilton-songs.html)

This was the first dense, interactive d3 visualization I did, and was when I really "got" d3. I like the fact you can spend time exploring the dataset with this visualization.

<a href="{{ site.url }}{{ site.baseurl }}/11-hamilton-songs-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/11-hamilton-songs.svg" alt="Hamilton songs"/></a>

[**Programming language popularity (week 12)**](http://tom-e-white.com/datavision/12-programming-language-popularity.html)

This is bright and fun - and doesn't look like it was done in ggplot2.

![Programming language popularity]({{ site.url }}{{ site.baseurl }}/assets/img/12-programming-language-popularity.png)

[**Voronoi football (week 21)**](http://tom-e-white.com/datavision/21-voronoi-football.html)

Not the first animation I did (that was [Lots of Lotties](http://tom-e-white.com/datavision/14-lots-of-lotties.html) in week 14), but possibly the most mesmerising.

<a href="{{ site.url }}{{ site.baseurl }}/21-voronoi-football-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/21-voronoi-football.svg" alt="Voronoi football"/></a>

[**Bach charts (week 25)**](http://tom-e-white.com/datavision/25-bach-charts.html)

A piano keyboard is basically a bar chart.

<a href="{{ site.url }}{{ site.baseurl }}/25-bach-charts-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/25-bach-charts.svg" alt="Bach notes"/></a>

[**Tooth cavities (week 37)**](http://tom-e-white.com/datavision/37-tooth-cavities.html)

I like the simplicity of this data visualization - it conveys the data very intuitively (and my dentist approves).

<a href="{{ site.url }}{{ site.baseurl }}/37-tooth-cavities-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/37-tooth-cavities.png" alt="Tooth cavities"/></a>

**Visualization type**: bar charts and beeswarm plot

**Data source**: [Datavision](http://tom-e-white.com/datavision/), CSV, 3.5 KB.

**Technical notes**: generated using [ggplot2](https://ggplot2.tidyverse.org/index.html); [code](https://github.com/tomwhite/datavision-code/tree/master/53-metadatavision)

