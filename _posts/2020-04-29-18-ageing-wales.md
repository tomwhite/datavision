---
layout: post
title: "18. Ageing Wales"
tags: d3
---

The [Office for National Statistics](https://www.ons.gov.uk/) publishes a wealth of demographic data for the UK. I wanted to see how the population is ageing, and how different areas are ageing (or getting younger) at different rates, so I downloaded the dataset for ["National and subnational mid-year population estimates for the UK and its constituent countries by administrative area, age and sex"](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/populationestimatesforukenglandandwalesscotlandandnorthernireland), and produced the visualization shown below.

<a href="{{ site.url }}{{ site.baseurl }}/18-ageing-wales-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/18-ageing-wales.svg" alt="Ageing Wales: population distributions by local authority, 2001 to 2018"/></a>

[Click for an [interactive version]({{ site.url }}{{ site.baseurl }}/18-ageing-wales-interactive.html).]

I restricted the visualization to Welsh Local Authorities since there are only 22 of them, which makes for a fairly compact figure, but it would be easy to show a different selection of local authorities (to compare urban and rural areas in England, for example).

What's striking is that you can see most areas ageing before your eyes. The upper part of each population pyramid gets wider as the animation plays from 2001 to 2018.

Powys has the highest median age in 2018. Part of the reason for this is the decline in the number of young people in the county. By watching the animation you can see the number of under 20s disappear between 2001 and 2018. That segment of the population doesn't seem to move up the population pyramid over time, it vanishes - which suggests that young people are moving out of the county.

Cardiff, by constrast, has a growing number of young people, and as a result is the only local authority where the median age has fallen between 2001 and 2018.

By playing with the animation you start to notice more small pecularities. For example: the number of over 90s is growing, and they are mainly female (shown by the horizontal bars extending to the right). Or, why is there a bump in 20 year olds in Ceredigion? [_Update_: Eliane answered the last question - it's students at Aberystwyth University. There are similar student bumps for Cardiff, Swansea, and Gwynedd (Bangor).]

**Visualization type**: animated bar chart

**Data source**: [Estimates of the population for the UK, England and Wales, Scotland and Northern Ireland](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/populationestimatesforukenglandandwalesscotlandandnorthernireland), ONS, CSV, 7.1 MB

**Technical notes**: generated using [d3](https://d3js.org/), using this [code for the slider](https://bl.ocks.org/officeofjane/47d2b0bfeecfcb41d2212d06d095c763); [code](https://github.com/tomwhite/datavision-code/tree/master/18-ageing-wales)

