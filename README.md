# TEV(Tumor Evolution Visualization)-server

## Motivation
The primary visualizations used to discuss and reconstruct tumor evolution are [fishplots](http://www.nature.com/nature/journal/v481/n7382/fig_tab/nature10738_F2.html). Although they're very simplistic, they can take geneticists and physicians alike a substantial amount of time to create in visual editors. To combat this issue we developed a simple drag and drop fishplot editor, along with several accompanying visualizations to help determine variant characteristics and relationships, to generate these plots within minutes. Recently, an [R package](https://github.com/chrisamiller/fishplot) has been developed to generate publication quality fishplots. However, this tool is limited to users that have R programming experience and have access to cancer cell fraction (CCF) information about their samples.

## Features and Usage
The main feature of the TEV tool is the fishplot editor. The fishplot editor utilizes drag and drop functionality to generate custom made fishplots. It can be used to generate fishplots via the VAFs, CCFs given the entire sample, and CCFs given only the tumor cells. If the purity of the samples are known or the user wants to provide an estimate, there is a simple combinatoric algorithm to help convert the plotted VAFs to CCFs.


## Examples

## Other fishplot software
The only other software known to generate fishplots is the [fishplot](https://github.com/chrisamiller/fishplot) R package by Chris Miller
