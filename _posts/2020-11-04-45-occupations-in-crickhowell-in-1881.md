---
layout: post
title:  "45. Occupations in Crickhowell in 1881"
tags: d3
---

Do you know what an ostler is? There were two in [Crickhowell](https://en.wikipedia.org/wiki/Crickhowell) in 1881.

We know this because a census has been carried out in England, Scotland, and Wales every ten years since 1801 (except in 1941 during the Second World War). The census records basic information, including occupation, about everyone resident at every address in the country on one night of the year.

Eliane has been going through the census data for Crickhowell in 1881, so I thought it would be interesting to visualize people's occupations at the time.

The graphic is a *treemap*, where each box is a separate occupation, scaled according to the number of people with that occupation (the number is printed in the box too). Different colours show different categories of occupation.

<a href="{{ site.url }}{{ site.baseurl }}/45-occupations-in-crickhowell-in-1881-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/45-occupations-in-crickhowell-in-1881.png" alt="Occupations in Crickhowell in 1881"/></a>

(The [interactive version]({{ site.url }}{{ site.baseurl }}/45-occupations-in-crickhowell-in-1881-interactive.html) allows you to hover to see the category and the full text in each box.)

The main categories are Service (blue - top left) and Trade (orange - bottom left), followed by
Manual, Construction, and Agriculture (green, red, lilac - top right). Despite being on
the edge of a major industrial area, there were a relatively small number of people
in the Industrial category (grey - bottom right). I was also surprised that the proportion of people working in agriculture was so small for a rural area.

To answer the question from above, an ostler is someone who looks after horses for people staying at an inn. However, my favourite job title from 1881 has to be Inspector Of Nuisances. Can you find it on the [visualization]({{ site.url }}{{ site.baseurl }}/45-occupations-in-crickhowell-in-1881-interactive.html)?

**Visualization type**: treemap

**Data source**: [1881 Wales Census, Ancestry.co.uk](https://www.ancestry.co.uk/search/collections/8059/) (CSV, 151 KB)

**Technical notes**: generated using [d3](https://d3js.org/) [treemap](https://observablehq.com/@d3/treemap); [code](https://github.com/tomwhite/datavision-code/tree/master/45-occupations-in-crickhowell-in-1881)

**See also**: [Census records](https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/census-records/), The National Archives
