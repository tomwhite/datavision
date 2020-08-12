---
layout: post
title:  "33. Is the age of Fields medalists going up?"
tags: [R, ggplot2]
---

The [Fields Medal](https://www.mathunion.org/imu-awards/fields-medal) is the most prestigious prize in mathematics, and is commonly said to be the maths equivalent to a Nobel prize. It is awarded every four years, and the winners have to be under the age of 40 on 1 January of the year the prize is awarded.

How has the age of Fields medalists changed since it was first awarded in 1936? Here's a plot of every award (including Perelman who declined his) with a linear regression line showing an upward trend:

![Is the age of Fields medalists going up?]({{ site.url }}{{ site.baseurl }}/assets/img/33-age-of-fields-medalists.png)

This is an example of where we can't just extrapolate and say there will be no more (or fewer) Fields Medals in N years! There is a hard limit of 40, so it's likely that the average age will stabilize. In fact, it already has: if you look at rolling windows of say a decade (not shown on the plot) then the average age is lower than it was in the 1990s.

It's not even clear that this trend will increase the pressure to remove the age limit. It might just mean the committee have to make their decision sooner than they might have done in the past. Or that Fields-worthy work doesn't get a medal. This happened to Andrew Wiles who was just over 40 when he proved Fermat's Last Theorem. (He won lots of other [awards](https://en.wikipedia.org/wiki/Andrew_Wiles#Awards_and_honours) though.)

**Visualization type**: scatterplot

**Data source**: [Wikipedia](https://en.wikipedia.org/wiki/Fields_Medal) and the [International Mathematical Union](https://www.mathunion.org/imu-awards/fields-medal), CSV, 2.6 KB

**Technical notes**: generated using [ggplot2](https://ggplot2.tidyverse.org/index.html); [code](https://github.com/tomwhite/datavision-code/tree/master/33-age-of-fields-medalists)
