---
layout: post
title:  "47. Alternatively Powered Vehicle growth in Europe"
tags: [R, ggplot2]
---

The proportion of new cars that are petrol or diesel is in decline across Europe. More and more new cars are "Alternatively Powered Vehicles", that is, electric or hybrid cars (and a few that use other, non-petroleum power sources). There has been quite rapid change over the last two years:

![Alternatively Powered Vehicle growth in Europe]({{ site.url }}{{ site.baseurl }}/assets/img/47-apv-growth-in-europe.png)

There is a lot of variation from country to country, however. Norway stands out where over 80% of new cars are APVs. Czech Republish shows more modest growth in APVs.

Diesel is generally declining faster than petrol, and from a lower base (although Ireland - with more diesel registrations than petrol one - is an exception). Across Europe as a whole, this quarter [APV registrations overtook diesel ones for the first time ever](https://www.jato.com/in-september-2020-for-the-first-time-in-european-history-registrations-for-electrified-vehicles-overtook-diesel/).

Many European countries have passed laws to introduce bans on new petrol and diesel cars. This [page on Wikipedia](https://en.wikipedia.org/wiki/Phase-out_of_fossil_fuel_vehicles#Countries) has the details. In Norway, for example, this will be from 2025. The UK government announced today that it would be [bringing forward the ban on new fossil fuel vehicles from 2040 to 2030](https://www.theguardian.com/environment/2020/sep/21/uk-plans-to-bring-forward-ban-on-fossil-fuel-vehicles-to-2030), in line with many other countries, such as Germany and Ireland.

**Visualization type**: faceted line chart

**Data source**: [Alternative fuel vehicle registrations](https://www.acea.be/statistics/tag/category/electric-and-alternative-vehicle-registrations) from the European Automobile Manufacturers' Association (ACEA), XLSX, 7.7 MB.

**Technical notes**: generated using [ggplot2](https://ggplot2.tidyverse.org/index.html); [code](https://github.com/tomwhite/datavision-code/tree/master/47-apv-growth-in-europe)
