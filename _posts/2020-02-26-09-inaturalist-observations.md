---
layout: post
title:  "9. iNaturalist observations"
tags: [Python, Datashader, Leaflet]
---

[iNaturalist](https://www.inaturalist.org/) is a citizen science project where users share their observations of animals and plants from across the world. At the time of writing there were over 30 million observations on their website.

Naïvely plotting such a large number of data points on a map is generally disappointing due to _overplotting_, since the majority of points overlap, except at very high zoom levels. This is why the [iNaturalist observations](https://www.inaturalist.org/observations) map shows observations as a heatmap, where darker squares indicate higher numbers of observations. Only when you zoom in far enough do you see individual observations, which you can click on to find out more information about them.

[Datashader](https://datashader.org/) is an open-source Python visualization library that tackles the problem of overplotting by intelligently colouring each pixel in the image according to the number of points that fall in it. It works for very large datasets: for example, it can plot [a billion points in a second or so on a 16GB laptop](https://datashader.org/getting_started/Introduction.html). This makes it powerful enough to interactively explore a large dataset by panning and zooming around a map.

Most Datashader examples require you to run a program locally to get the interactive experience, but it is also possible to generate all the map tiles needed in advance so that anyone with a web browser can explore the dataset. This is what I did here with the iNaturalist data.

<a href="https://storage.googleapis.com/inaturalist-datashader-map/index.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/09-inaturalist-observations.png" alt="iNaturalist observations"/></a>

[Click on the map for an [interactive version](https://storage.googleapis.com/inaturalist-datashader-map/index.html).]

This static image shows the distribution of observations across the world. The blue and pink dots show areas where observations have been recorded. The number of observations ranges from low (light blue) to medium (darker blue) to high (pink).

<a href="https://storage.googleapis.com/inaturalist-datashader-map/index.html"><img src="{{ site.url }}{{ site.baseurl }}/assets/img/09-inaturalist-observations-europe.png" alt="iNaturalist observations in Europe"/></a>

A couple of things immediately stand out. First, observations generally correlate strongly with population centres. This isn't surprising, since observations are made by people, so they will correspond to where people tend to be located. Second, there are more observations along coastlines, probably because that's where many people go to see wildlife.

Another interesting detail is the small rectangular clusters (for example, in Poland in the northest corner of the map). At first, I thought this was a bug in my code, but it turned out to be more interesting than that. Each rectangle is a [geoprivacy](https://www.inaturalist.org/pages/geoprivacy) cell, where locations have been obscured by iNaturalist so they are spread out randomly across a given rectangular area. This is done for organisms that have at risk conservation status, to protect them from harm.

Have a play with the [interactive map](https://storage.googleapis.com/inaturalist-datashader-map/index.html). You can switch background tiles (between terrain, street maps, and satellite maps), and you can adjust the darkness of the background which helps see the contrast with the data points.

This visualization is good for seeing larger scale patterns. For getting the details for a particular observation then use the (zoomed-in) [iNaturalist observations map](https://www.inaturalist.org/observations).

**Visualization type**: zoomable map

**Data source**: [iNaturalist](https://www.inaturalist.org/pages/developers), gzipped CSV, 1.8 GB

**Technical notes**: map tiles were generated using [Datashader](https://datashader.org/) (plus this [fix](https://github.com/holoviz/datashader/pull/874) I wrote), and the interactive map was built with [Leaflet](https://leafletjs.com/); [code](https://github.com/tomwhite/inaturalist-datashader-map)

**See also**: [iNaturalist observations heatmap](https://www.inaturalist.org/observations)
