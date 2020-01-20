---
layout: post
title:  "3. Wales Population Cartogram"
tags: [R, ggplot2, plotly]
---

Most people in Wales live in Cardiff and the South Wales Valleys, which were industrialised in the
18th century. The west and middle of the country is very sparsely populated.

This visualization shows the relative size of local authority populations in Wales by distorting
the map so that each authority has an area that reflects the size of its population.

Notice how Powys in mid Wales shrinks dramatically, while Cardiff (dark green) and the surrounding
authorities increase massively in size. It looks like a broccoli floret.

![Population by local authority in Wales (area adjusted), 2018]({{ site.url }}{{ site.baseurl }}/assets/img/03-wales-population-cartogram.png)

I also created a [interactive version]({{ site.url }}{{ site.baseurl }}/03-wales-population-cartogram-interactive.html) (using plotly) which shows the local authority names and population numbers in tooltips,
and an [animation]({{ site.url }}{{ site.baseurl }}/assets/img/03-wales-population-cartogram-animation.gif) that transitions between the two maps. The animation was a bit disappointing since it
isn't very smooth (lots of gaps appear for some reason).

**Visualization type**: cartogram

**Data sources**:
* [StatsWales](https://statswales.gov.wales/Catalogue/Population-and-Migration/Population/Estimates/Local-Authority/populationestimates-by-localauthority-year), CSV, 8 KB
* [Lle Geo-Portal](http://lle.gov.wales/catalogue/item/LocalAuthorities), Shapefile, 4.2 MB

**Technical notes**: generated using [ggplot2](https://ggplot2.tidyverse.org/index.html) and the [cartogram](https://cran.r-project.org/web/packages/cartogram/index.html) package; [code](https://github.com/tomwhite/datavision-code/tree/master/03-wales-population-cartogram)

**See also**: [Cartogram example in the R Graph Gallery](https://www.r-graph-gallery.com/cartogram.html)
