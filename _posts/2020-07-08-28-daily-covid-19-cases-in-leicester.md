---
layout: post
title:  "28. Daily covid-19 cases in Leicester"
tags: d3
---

Leicester is currently under [local lockdown](https://www.bbc.co.uk/news/health-53264580) after an outbreak of covid-19 cases was detected. The number of confirmed cases published by Public Health England at the time, however, did not show the extent of the outbreak, and it was only *after* the lockdown was imposed that the government published the number of cases that had been detected each day.

<a href="{{ site.url }}{{ site.baseurl }}/28-daily-covid-19-cases-in-leicester-interactive.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/28-daily-covid-19-cases-in-leicester.svg" alt="Daily covid-19 cases in Leicester"/></a>

[Click for an [animated version]({{ site.url }}{{ site.baseurl }}/28-daily-covid-19-cases-in-leicester-interactive.html).]

In May I posted a [chart]({{ site.url }}{{ site.baseurl }}/20-where-are-the-coronavirus-cases.html) showing that the number of daily positive test results for the UK was much larger than the total for the four nations (England, Scotland, Wales, and Northern Ireland), and that the gap was growing. These "missing cases" were down to a new category of test that the government had introduced, so called "Pillar 2" tests, that were being carried out by commercial partners, rather than by NHS labs ("Pillar 1").

The trouble was that the government was not publishing Pillar 2 case numbers. It only started doing so on 2 July, after much [press consternation](https://twitter.com/jburnmurdoch/status/1277961740697796620), and three days after the Leicester lockdown was imposed.

As the animated chart above shows, to a member of the public looking at the case numbers there was no sign of anything amiss, and *in fact it looked like the situation was improving*. In reality, the hidden Pillar 2 numbers were increasing dramatically, so by only reporting the Pillar 1 numbers the government was actively misleading the public. This was the case even on official government sites, such as the PHE dashboard.

Thankfully, the government is now publishing the Pillar 1 and 2 case numbers every day, so we can see for ourselves where local outbreaks are occurring.

**Visualization type**: animated bar chart

**Data source**: [Coronavirus (COVID-19) cases in the UK - Archive](https://coronavirus.data.gov.uk/archive), Public Health England, CSV, 161 MB

**Technical notes**: generated using [d3](https://d3js.org/); [code](https://github.com/tomwhite/datavision-code/tree/master/28-covid-leicester)

**See also**: [20. Where are the coronavirus cases?]({{ site.url }}{{ site.baseurl }}/20-where-are-the-coronavirus-cases.html); [Leicester coronavirus outbreak timeline](https://www.bbc.co.uk/news/health-53264580) by BBC News