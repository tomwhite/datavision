---
layout: post
title:  "13. COVID-19 UK daily tests"
tags: [Vega-lite]
---

Coronavirus (COVID-19) is pandemic, the UK went into lockdown two days ago, and we are thinking of little else. To keep sane I have been [collating the UK COVID-19 figures](https://github.com/tomwhite/covid-19-uk-data) from the different public health bodies, to make them easy to use, and to preserve the historical numbers.

There's a good warning in [Ten Considerations Before You Create Another Chart About COVID-19](https://medium.com/nightingale/ten-considerations-before-you-create-another-chart-about-covid-19-27d3bd691be8). Confirmed case numbers are particularly problematic, since they they are an underestimate of the true extent of infection.

I've been wary of producing visualizations for this reason, but here I've made a chart of tests performed in the UK, since tests, unlike confirmed case numbers, are less prone to misinterpretation. Broadly speaking we want to test as much as possible.

<script src="https://cdn.jsdelivr.net/npm/vega@5.10.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@4.7.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.3.2"></script>
<div id="p1"></div>
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/13-covid-19-uk-daily-tests.js"></script>

The UK has been ramping up its testing capability. The orange curve shows the weekly moving average, and we can see that in mid-February around 500 tests a day were being performed, by early March it was just under 2,000 tests a day, and in the last week it has jumped again to between 5,000 and 6,000 tests a day.

The health secretary Matt Hancock promised 25,000 a day at this stage, and while we are unfortunately not yet there, the government has purchased millions of (serological) tests that will arrive in the ["next days and weeks"](https://www.theguardian.com/politics/live/2020/mar/24/uk-coronavirus-live-news-lockdown-boris-johnson-sports-direct-abandons-talk-of-opening-stores-as-gove-clarifies-scope-of-lockdown-rules?page=with:block-5e7a1a6b8f08e46329cb4f20#block-5e7a1a6b8f08e46329cb4f20).

**Visualization type**: bar chart, moving average line chart

**Data source**: [Public Health England](https://www.gov.uk/government/publications/covid-19-track-coronavirus-cases) collated at [https://github.com/tomwhite/covid-19-uk-data](https://github.com/tomwhite/covid-19-uk-data), CSV, 14 KB

**Technical notes**: generated using [Vega-lite](https://vega.github.io/vega-lite/) code; [code](https://github.com/tomwhite/covid-19-uk-data/blob/gh-pages/covid-19-daily-tests-uk.html)

**See also**: [How many tests for COVID-19 are being performed around the world?](https://ourworldindata.org/covid-testing), Our World in Data
