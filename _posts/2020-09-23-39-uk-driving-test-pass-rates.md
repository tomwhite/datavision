---
layout: post
title:  "39. UK driving test pass rates"
tags: [R, ggplot2]
---

Emilia passed her driving test last week (first time!), and she mentioned that the UK government had lots of stats about driving tests on their site.

The data about pass rates by number of attempts in interesting. I was surprised that just over half of all people fail on their first attempt. However, the cumulative pass rate goes up quickly - so the good news is that the vast majority of people pass after a few attempts:

![UK driving test pass rates]({{ site.url }}{{ site.baseurl }}/assets/img/39-uk-driving-test-pass-rates.png)

It's also noticeable that female pass rates are below those for males. I wonder if there have been any studies looking into this ... what is the gender breakdown of driving test examiners?

**Visualization type**: line chart

**Data source**: [DRT0202: Practical car test pass rates by number of attempts, age and gender: Great Britain](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/894219/drt0202.ods) (from [Driving test statistics](https://www.gov.uk/government/statistical-data-sets/driving-test-statistics-drt) on gov.uk) (ODS, 309 KB)

**Technical notes**: generated using [ggplot2](https://ggplot2.tidyverse.org/index.html); [code](https://github.com/tomwhite/datavision-code/tree/master/39-uk-driving-test-pass-rates)
