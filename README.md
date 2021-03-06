# TEV(Tumor Evolution Visualization)-server

## Motivation
The primary visualizations used to discuss and reconstruct tumor evolution are [fishplots](http://www.nature.com/nature/journal/v481/n7382/fig_tab/nature10738_F2.html). Although they're very simplistic, they can take geneticists and physicians alike a substantial amount of time to create in visual editors. To combat this issue we've developed a simple drag and drop fishplot editor, along with several accompanying visualizations to help determine variant characteristics and relationships, to generate these plots within minutes. Recently, an [R package](https://github.com/chrisamiller/fishplot) has been developed to generate publication quality fishplots. However, this tool is limited to users that have R programming experience and have access to cancer cell fraction (CCF) information about their samples.

## Quick Start

```
brew install postgresql # or equivalent
# Postgres tools are needed on path for install, 
# although for development only sqlite is actually used.
pip install -r requirements.txt
./manage.py migrate
./manage.py runserver
```

## Features and Usage
### Fishplot Editor
The main feature of the TEV tool is the fishplot editor. The fishplot editor utilizes drag and drop functionality to generate custom made fishplots. It can be used to generate fishplots via the VAFs, CCFs given the entire sample, and CCFs given only the tumor cells. If the purity of the samples are known or the user wants to provide an estimate, there is a simple combinatoric algorithm to help convert the plotted VAFs to CCFs.
![ezgif com-video-to-gif](https://cloud.githubusercontent.com/assets/12614369/20637126/b4ddf410-b34a-11e6-8efa-0381ed59b889.gif)

### Editor Table
To aid users in developing fishplots that accurately represent their views on the evolution of tumor cells, we have provided a table to dynamically edit the variant VAFs. Users may use this feature to adjust for suspected error, enable a subclone to fit where it wouldn't given the raw data, or to see how changing the VAFs would change the potential sample purities and CCF.
![ezgif com-video-to-gif 1](https://cloud.githubusercontent.com/assets/12614369/20638368/a536a240-b373-11e6-84b0-38de2f6f2aea.gif)

### Variant Allele Summary
Another feature that seeks to aid users in developing accurate fishplots is a series of 5 plots that aims to elucidate the characteristics and relationships of the variants in question. These plots are interactive, and are located in a separate tab called "Variant Allele Summary".
![ezgif com-video-to-gif 3](https://cloud.githubusercontent.com/assets/12614369/20678693/ab169a46-b565-11e6-9f8e-7f9b498b195d.gif)

### Ability to Load and Save Fishplots
The TEV tool also provides a way for users to save the fishplots they've created so that they may share them with collaborators, or return to them at a later date.
![ezgif com-video-to-gif 2](https://cloud.githubusercontent.com/assets/12614369/20642617/58015286-b3e1-11e6-941d-26588c5cc475.gif)

## Other Fishplot Software
The only other software known to generate fishplots is the [fishplot](https://github.com/chrisamiller/fishplot) R package by Chris Miller

## Future Work
In the future we hope to extend on this project to develop new visualizations for reconstructing and communicating clonal architecture, as well as provide tools for looking at the effects of variants across multiple sources. A simple feature already implemented is a table containing information on a particular variant, as well as how many sources have a mutation in that gene. This information can be accessed by clicking the infolight icon in the fishplot editor. An example of this table can be seen below.
![screen shot 2016-11-26 at 2 24 07 pm](https://cloud.githubusercontent.com/assets/12614369/20642712/5ed4a024-b3e4-11e6-8655-fef637e66aaf.png)
