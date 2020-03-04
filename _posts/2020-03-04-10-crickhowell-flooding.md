---
layout: post
title:  "10. Crickhowell flooding"
tags: d3
---

In the early hours of Sunday, February 16, the Usk river at Crickhowell rose rapidly. The fire service rescued people from their homes, and many properties, including businesses, were flooded. The town was cut off from nearby towns for the third time in 18 months. The receding flood waters revealed that the bridge was damaged, which required four nights of repairs to make it safe again. The local community quickly set up a Facebook group to organise the volunteer recovery effort. [Dozens of people helped in all kinds of ways](https://www.walesonline.co.uk/news/wales-news/crickhowell-flood-recovery-storm-dennis-17793756): moving damaged furniture into skips, finding alternative accommodation for those whose homes had flooded, donating dehumidifiers, as well as skilled tradespeople like electricians and plumbers giving their time - the list, and the help, goes on.

Storm Dennis brought record amounts of rain that weekend, following Storm Ciara from just a week before. Many other towns in south Wales were flooded, as well as in the Midlands and Yorkshire.

This visualization shows the river levels at Crickhowell for the past three winters. Other rivers in the country have broken records as well, but I wanted to focus on a single measuring station for a single river to get an impression of how the impact of winter storms has been changing for our local community.

<a href="{{ site.url }}{{ site.baseurl }}/10-crickhowell-flooding-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/10-crickhowell-flooding.svg" alt="Crickhowell flooding"/></a>

[Click on the image for a [larger interactive version]({{ site.url }}{{ site.baseurl }}/10-crickhowell-flooding-interactive.html).]

The dark blue line shows the maximum recorded level for each day over the last three years. This winter's storms have clearly caused higher river levels than the previous two winters.

The red dots show the most severe floods that led to roads being closed. You can open the [interactive version]({{ site.url }}{{ site.baseurl }}/10-crickhowell-flooding-interactive.html) to find more information about each of these events (photos, newspaper reports, Met Office reports).

The light blue shading shows the minumum levels for each day. These levels have been higher this year too, which means that the river has not recovered as much between storms, making it more susceptible to flooding. (The Usk is actually a fast draining river, and this effect has been [much more pronounced on the Severn](https://twitter.com/DrEdHenderson/status/1232422088645992448).)

The light brown vertical lines show the named storms. Some have minimal impact (Hannah), while others are remembered for the flooding - most recently Dennis, but also Callum from October 2018.

The flood of October 2019 didn’t have a named storm associated with it, but it did correspond to a period of ["persistent wet weather"](https://www.metoffice.gov.uk/binaries/content/assets/metofficegovuk/pdf/weather/learn-about/uk-past-events/interesting/2019/2019_010_october_rainfall.pdf) according to the Met Office.

During Storm Dennis the gauge measured a maximum level of 4.51 metres, but it was likely higher than this since the gauge stopped working while the river was still rising. So in fact the peak was even more dramatic than this chart shows.

Unfortunately, it is being reported that ["Storm Dennis is 'a taste of things to come' for Wales"](https://www.bbc.co.uk/news/uk-wales-51631480), so we can expect to see more floods here in the future.

**Visualization type**: line and area chart

**Data sources**: [RiverLevels.uk](https://riverlevels.uk/usk-crickhowell-community-crickhowell#.Xl7ILpP7SqA), CSV, 30 KB; [Met Office](https://www.metoffice.gov.uk/weather/learn-about/past-uk-weather-events)

**Technical notes**: generated using [d3](https://d3js.org/); [code](https://github.com/tomwhite/datavision-code/tree/master/10-crickhowell-flooding)
