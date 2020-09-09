---
layout: post
title:  "37. Tooth cavities"
tags: d3
---

Another suggestion from Lottie - show how the number of tooth cavities varies by tooth:

<a href="{{ site.url }}{{ site.baseurl }}/37-tooth-cavities-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/37-tooth-cavities.png" alt="Tooth cavities"/></a>

The [interactive version]({{ site.url }}{{ site.baseurl }}/37-tooth-cavities-interactive.html) shows the stats for each tooth.

Each dot is a cavity (also know as a carie), and the data is from Table 1 in [Prevalence of Caries on Individual Tooth Surfaces and its Distribution by Age and Gender in University Clinic Patients](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2897860/) by Mustafa Demirci, Safa Tuncer, and Ahmet Ayhan Yuceokurb (2010).

The graphic makes it clear that there are more cavities on the upper jaw than the lower one. This makes sense as it's easier to brush teeth in the lower jaw. Teeth at the back have a higher number of cavities, but this is offset by their relative size.

The tooth image is from Wikipedia commons ([Kaligula](https://commons.wikimedia.org/wiki/File:Human_dental_arches.svg) / [CC BY-SA](https://creativecommons.org/licenses/by-sa/3.0)).

**Visualization type**: dot plot, isotype chart, pictogram

**Data source**: [Prevalence of Caries on Individual Tooth Surfaces and its Distribution by Age and Gender in University Clinic Patients](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2897860/), CSV, 255 B

**Technical notes**: generated using [d3](https://d3js.org/); [code](https://github.com/tomwhite/datavision-code/tree/master/37-tooth-cavities)
