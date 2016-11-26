# TEV(Tumor Evolution Visualization)-server

## Motivation
The primary visualizations used to discuss and reconstruct tumor evolution are [fishplots](http://www.nature.com/nature/journal/v481/n7382/fig_tab/nature10738_F2.html). Although they're very simplistic, they can take geneticists and physicians alike a substantial amount of time to create in visual editors. To combat this issue we developed a simple drag and drop fishplot editor, along with several accompanying visualizations to help determine variant characteristics and relationships, to generate these plots within minutes. Recently, an [R package](https://github.com/chrisamiller/fishplot) has been developed to generate publication quality fishplots. However, this tool is limited to users that have R programming experience and have access to cancer cell fraction (CCF) information about their samples.

## Features and Usage
#### Fishplot Editor
The main feature of the TEV tool is the fishplot editor. The fishplot editor utilizes drag and drop functionality to generate custom made fishplots. It can be used to generate fishplots via the VAFs, CCFs given the entire sample, and CCFs given only the tumor cells. If the purity of the samples are known or the user wants to provide an estimate, there is a simple combinatoric algorithm to help convert the plotted VAFs to CCFs.
![ezgif com-video-to-gif](https://cloud.githubusercontent.com/assets/12614369/20637126/b4ddf410-b34a-11e6-8efa-0381ed59b889.gif)

#### Editor Table
To aid users in developing fishplots that accurately represent their views on the evolution of tumor cells, we have provided a table to dynamically edit the variant VAFs. Users may use this feature to adjust for suspected error, enable a subclone to fit where it wouldn't given the raw data, or to see how changing the VAFs would change the potential sample purities and CCF.
![ezgif com-video-to-gif 1](https://cloud.githubusercontent.com/assets/12614369/20638368/a536a240-b373-11e6-84b0-38de2f6f2aea.gif)

#### Variant Allele Summary
Another feature that seeks to aid users in developing accurate fishplots is a series of 5 plots that aims to elucidate the characteristics and relationships of the variants in question. These plots are interactive, and are located in a separate tab called "Variant Allele Summary".

#### Ability to Load and Save Fishplots
Lastly, the TEV tool provides a way for users to save the fishplots they've created so that they may share them with collaborators, or return to them at a later date.

## Other fishplot software
The only other software known to generate fishplots is the [fishplot](https://github.com/chrisamiller/fishplot) R package by Chris Miller

## Future work
In the future we hope to extend on this project to develop new visualizations for reconstructing and communicating clonal architecture, as well as provide tools for looking at the effects of variants across multiple sources. 
