/**
 * Created by jakeconway on 11/24/16.
 */
function makeBoxPlots(updatedData, el, height, width, color_ref) {
    d3.select(el).select('svg').remove();
    d3.select(el).selectAll('div').remove();

    var data = updatedData[0];
    var alleles = updatedData[1];

    if (data.length == 0) {
        return;
    }

    var canvas = d3.select(el).append("svg")
        .attr("height", height)
        .attr("width", width);

    var title = canvas.append('text')
        .attr('class', 'title-text')
        .attr('x', width / 2)
        .attr('y', 20)
        .style('text-anchor', 'middle')
        .text(function () {
            return 'Distribution of VAF Over Time';
        });

    var information = ['90th:', 'Q3:', 'median:', 'Q1:', '10th:'];
    var informationSvg = canvas.append("g");

    informationSvg.selectAll("information_text")
        .data(information)
        .enter()
        .append('text')
        .attr('x', (width * 0.82))
        .attr('y', function (d, i) {
            return 60 + (25 * i);
        })
        .style('font', '12px sans-serif')
        .style('text-anchor', 'left')
        .text(function (d) {
            return d;
        });

    var div_tooltip = d3.select(el).append("div")
        .attr('id', 'fig2-tooltip')
        .attr("class", "tooltip")
        .style('white-space', 'nowrap')
        .style("opacity", 0);

    var axisLabels = uniqueAxisLabels(data, 'cluster');
    axisLabels.sort(function (a, b) {
        return a - b;
    });

    var yScale = d3.scale.linear().range([40, height - 40]).domain([1, 0]);
    var yAxis = d3.svg.axis().scale(yScale).orient("left");

    var xScale = d3.scale.ordinal().rangePoints([40, (width * 0.8)], 0.5).domain(axisLabels);
    var xAxis = d3.svg.axis().scale(xScale);

    if (alleles.length == axisLabels.length) {
        axisLabels = uniqueAxisLabels(data, 'allele');
        var nestedData = d3.nest().key(function (d) {
            return d.allele
        }).entries(data);
        xScale = d3.scale.ordinal().rangePoints([40, (width * 0.8)], 0.5).domain(axisLabels);
        xAxis = d3.svg.axis().scale(xScale);
    }
    else {
        nestedData = d3.nest().key(function (d) {
            return d.cluster
        }).entries(data);
        xAxis.tickFormat(function (d) {
            return "cluster " + d;
        })
    }

    var boxData = [];
    nestedData.forEach(function (d, i) {
        var quartileData = [];
        var alleles = [];
        for (var j = 0; j < d.values.length; j++) {
            quartileData[j] = d.values[j].alt_count / 100;
            if (alleles.indexOf(d.values[j].allele) == -1) {
                alleles.push(d.values[j].allele);
            }
        }

        alleles = alleles.join('<br>');
        alleles = ('<p align="left" ' +
        'style="text-overflow: ellipsis; padding: 0em; margin-top: 0em; margin-bottom: 0em; border: 0em; color: #fff;">'
        + alleles + '<\p>');
        alleles = '<p align="center" ' +
            'style="text-overflow: ellipsis; padding: 0em; margin-top: 0em; margin-bottom: 3px; border: 0em; color: #fff;">'
            + '<b><u> alleles </u></b></p>' + alleles;
        quartileData.sort(function (a, b) {
            return a - b;
        });

        boxData[i] = {
            x: d.key,
            y: d3.quantile(quartileData, 0.75),
            Q3: d3.quantile(quartileData, 0.75).toFixed(2),
            Q1: d3.quantile(quartileData, 0.25).toFixed(2),
            median: d3.median(quartileData).toFixed(2),
            pNinety: d3.quantile(quartileData, 0.90).toFixed(2),
            pTen: d3.quantile(quartileData, 0.10).toFixed(2),
            color: color_ref[d.values[0].parent_allele],
            alleles: alleles

        };
    });

    //Start of d3 box plot
    canvas.selectAll('boxes')
        .data(boxData)
        .enter()
        .append('rect')
        .attr('x', function (d) {
            return xScale(d.x) - 10;
        })
        .attr('y', function (d) {
            return yScale(d.Q3);
        })
        .attr('width', 20)
        .attr('height', function (d) {
            return (yScale(d.Q1) - yScale(d.Q3));
        })
        .attr('class', 'info_rects')
        .attr('fill', function (d) {
            return d.color;
        })
        .on('mouseover', function (d) {
            var box_information = [d.pNinety, d.Q3, d.median, d.Q1, d.pTen];
            informationSvg.selectAll('information_text')
                .data(box_information)
                .enter()
                .append('text')
                .attr('x', (width * 0.82) + 50)
                .attr('y', function (d, i) {
                    return 60 + (25 * i);
                })
                .attr('class', 'box_info')
                .style('font', '12px sans-serif')
                .style('text-anchor', 'left')
                .text(function (d) {
                    return d;
                });

            div_tooltip.style("opacity", 0.9)
                .html(d.alleles)
                .style("top", (d3.mouse(this)[1] - 40) + "px")
                .style("left", (d3.mouse(this)[0] + 40) + "px");
        })
        .on('mouseout', function () {
            div_tooltip.remove();
            div_tooltip = d3.select(el).append("div")
                .attr('id', 'fig2-tooltip')
                .attr("class", "tooltip")
                .style('white-space', 'nowrap')
                .style("opacity", 0);

            d3.selectAll('.box_info').remove();

            div_tooltip.style('opacity', 0);
        });

    canvas.selectAll('upperVerticalBars')
        .data(boxData)
        .enter()
        .append('line')
        .attr('x1', function (d) {
            return xScale(d.x);
        })
        .attr('x2', function (d) {
            return xScale(d.x);
        })
        .attr('y1', function (d) {
            return yScale(d.pNinety);
        })
        .attr('y2', function (d) {
            return yScale(d.Q3);
        })
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('stroke-width', 1);


    canvas.selectAll('lowerVerticalBars')
        .data(boxData)
        .enter()
        .append('line')
        .attr('x1', function (d) {
            return xScale(d.x);
        })
        .attr('x2', function (d) {
            return xScale(d.x);
        })
        .attr('y1', function (d) {
            return yScale(d.Q1);
        })
        .attr('y2', function (d) {
            return yScale(d.pTen);
        })
        .attr('stroke', 'black')
        .attr('stroke-width', 1)
        .attr('fill', 'none');

    canvas.selectAll('pNinetyBars')
        .data(boxData)
        .enter()
        .append('line')
        .attr('x1', function (d) {
            return xScale(d.x) - 10;
        })
        .attr('x2', function (d) {
            return xScale(d.x) + 10;
        })
        .attr('y1', function (d) {
            return yScale(d.pNinety);
        })
        .attr('y2', function (d) {
            return yScale(d.pNinety);
        })
        .attr('stroke', 'black')
        .attr('stroke-width', 1)
        .attr('fill', 'none');

    canvas.selectAll('pTenBars')
        .data(boxData)
        .enter()
        .append('line')
        .attr('x1', function (d) {
            return xScale(d.x) - 10;
        })
        .attr('x2', function (d) {
            return xScale(d.x) + 10;
        })
        .attr('y1', function (d) {
            return yScale(d.pTen);
        })
        .attr('y2', function (d) {
            return yScale(d.pTen);
        })
        .attr('stroke', 'black')
        .attr('stroke-width', 1)
        .attr('fill', 'none');

    canvas.selectAll('medianLines')
        .data(boxData)
        .enter()
        .append('line')
        .attr('x1', function (d) {
            return xScale(d.x) - 10;
        })
        .attr('x2', function (d) {
            return xScale(d.x) + 10;
        })
        .attr('y1', function (d) {
            return yScale(d.median);
        })
        .attr('y2', function (d) {
            return yScale(d.median);
        })
        .attr('class', 'median_line')
        .attr('stroke', 'black')
        .attr('stroke-width', 1)
        .attr('fill', 'none')
        .on('mouseover', function (d) {
            if (d.Q1 == d.Q3) {
                var box_information = [d.pNinety, d.Q3, d.median, d.Q1, d.pTen];
                informationSvg.selectAll('information_text')
                    .data(box_information)
                    .enter()
                    .append('text')
                    .attr('x', 520 + 50)
                    .attr('y', function (d, i) {
                        return 60 + (25 * i);
                    })
                    .attr('class', 'box_data')
                    .style('font', '12px sans-serif')
                    .style('text-anchor', 'left')
                    .text(function (d) {
                        return d;
                    });

                div_tooltip.style("opacity", 0.9)
                    .html(d.alleles)
                    .style("top", (d3.event.y - 40) + "px")
                    .style("left", (d3.event.x + 40) + "px");
            }
        })
        .on('mouseout', function (d) {
            if (d.Q1 == d.Q3) {
                d3.selectAll('.box_data').remove();

                div_tooltip.style('opacity', 0);
            }
        });

    canvas.append("svg:g")
        .attr("class", "axis")
        .attr('id', 'fig2-x-axis')
        .attr("transform", "translate(0," + (height - 40) + ")")
        .call(xAxis)
        .selectAll("text")
        .style('text-anchor', 'end')
        .attr('transform', 'rotate(-65)');

    canvas.append("svg:g")
        .attr("class", "axis")
        .attr("transform", "translate(" + 4 + "0)")
        .call(yAxis);

    var x_axis_svgs = d3.select('#fig2-x-axis').selectAll('text')[0];
    var extend_height_by = [];

    for (var i = 0; i < x_axis_svgs.length; i++) {
        extend_height_by.push(x_axis_svgs[i].clientWidth);
    }

    extend_height_by = Math.max.apply(null, extend_height_by);
    if (extend_height_by > parseInt(d3.select(el).attr('ext'))) {
        d3.select(el).attr('ext', extend_height_by);
    }
    else {
        extend_height_by = parseInt(d3.select(el).attr('ext'));
    }

    d3.select(el).style('height', function () {
        var new_height = height + extend_height_by;
        return new_height + 'px';
    });

    canvas.attr('height', function () {
        var height = parseInt(d3.select(el).style('height'));
        return height;
    });

}