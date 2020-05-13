---
layout: post
title:  "20. Where are the coronavirus cases?"
tags: [R, ggplot2]
---

The UK public health agencies publish figures for the number of daily positive tests results for COVID-19 (coronavirus). These figures are reported for the whole of the UK, for each nation in the UK (England, Scotland, Wales, and Northern Ireland), and for local authorities or health boards in each nation. These results tell us where the confirmed coronavirus cases are - down to the local authority level.

However, the chart below shows that an increasing proportion of daily reported positive test results are not appearing in the results of individual nations. 

![Where are the coronavirus cases?]({{ site.url }}{{ site.baseurl }}/assets/img/where_are_the_coronavirus_cases.png)

The average number of confirmed cases per day in the week to 11 May was 4,639 in the UK, and 1,197 collectively across the four nations, so **74%** of the confirmed cases were not assigned a location, not even to the level of England, Scotland, Wales, or Northern Ireland - let alone to the level of a local authority.

The tests with no location are ["Pillar 2"](https://www.gov.uk/guidance/coronavirus-covid-19-information-for-the-public#number-of-cases-and-deaths) tests, which as the [UK Coronavirus dashboard](https://coronavirus.data.gov.uk/) explains are "carried out by commercial partners which are not included in the 4 National totals".

This raises a number of questions:

1. Will the numbers be revised so that the public are informed of the true numbers of positive test results in each nation in the UK? If not, why not? If so, when?
2. Are these test results being shared with the individual nations' public health agencies? If not, why not, and when will they be?
3. If the test results and locations are being shared, why is this information not being made public?
4. If not, how can the UK government, and the individual nations' public health agencies be confident that test and tracing can be effectively implemented?

**Visualization type**: area and line chart

**Data source**: UK public health agencies, using [data](https://github.com/tomwhite/covid-19-uk-data/blob/master/data/covid-19-indicators-uk.csv) collated by me [here](https://github.com/tomwhite/covid-19-uk-data), CSV, 46 KB

**Technical notes**: generated using [ggplot2](https://ggplot2.tidyverse.org/index.html); [code](https://github.com/tomwhite/datavision-code/tree/master/20-where-are-the-coronavirus-cases)

