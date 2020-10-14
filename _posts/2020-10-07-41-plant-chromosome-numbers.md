---
layout: post
title:  "41. Plant chromosome numbers"
tags: [R, ggplot2]
---

The number of chromosomes in living organisms shows a large degree of variation. Humans have 23 pairs of chromosomes, while mosquitoes have only 3 pairs. Thale cress (_Arabidopsis thaliana_) has 5 pairs, while black mulberry (_Morus nigra_) has a whopping 154 pairs!

This week's visualization shows the number of chromosomes for plant species in the [Chromosome Counts Database](http://ccdb.tau.ac.il/):

![Plant chromosome numbers]({{ site.url }}{{ site.baseurl }}/assets/img/41-plant-chromosome-numbers.png)

As you can see, 9 pairs of chromosomes is most common, but the distribution has a long tail (and has been cut off beyond 100 pairs).

The number shown (n) is the number of chromosomes in the [_gametophyte_](https://en.wikipedia.org/wiki/Gametophyte), which is the sexual phase in the life cycle of plants. A [_sporophyte_](https://en.wikipedia.org/wiki/Sporophyte) has two sets of chromosomes: one from each parent, which is double the numbers shown in the chart (2n). 

(Complicating matters further, and not shown in the diagram, is the fact that some plants are [polyploid](https://en.wikipedia.org/wiki/Polyploidy), meaning there are more than two paired copies of each chromosome. Kiwifruit, for example, are hexaploid, with six sets of chromosomes!)

_Update: a week after writing this post, the following paper was published: [Animal chromosome counts reveal similar range of chromosome numbers but with less polyploidy in animals compared to flowering plants](https://www.biorxiv.org/content/10.1101/2020.10.10.334722v1) by Román-Palacios et al. Figure 1 from the paper is interesting, since it shows that animals and angiosperms have similar chromosome number distributions, but ferns tend to have higher numbers of chromosomes._

**Visualization type**: bar chart

**Data source**: [Chromosome Counts Database](http://ccdb.tau.ac.il/), CSV, 15 MB.

**Technical notes**: generated using [ggplot2](https://ggplot2.tidyverse.org/index.html); [code](https://github.com/tomwhite/datavision-code/tree/master/41-plant-chromosome-numbers)

**See also**: [5. Genome size]({{ site.url }}{{ site.baseurl }}/05-genome-size.html); [List of organisms by chromosome count](https://en.wikipedia.org/wiki/List_of_organisms_by_chromosome_count), Wikipedia
