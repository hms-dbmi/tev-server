/**
 * Created by jakeconway on 11/24/16.
 */
function overtimeLinePlot(updatedData, el, height, width, color_ref) {
    d3.select(el).select('svg').remove();
    d3.select(el).selectAll('div').remove();

    var data = updatedData;


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
            return 'VAF Over Time for Each Allele';
        });

    var div_tooltip = d3.select(el).append("div")
        .attr('id', 'fig1-tooltip')
        .attr("class", "tooltip")
        .style('white-space', 'nowrap')
        .style("opacity", 0);

    var yScale = d3.scale.linear().range([40, height - 40]).domain([1, 0]);
    var yAxis = d3.svg.axis().scale(yScale).orient("left");

    var axisLabels = uniqueAxisLabels(data, 'Sample_Barcode');
    axisLabels = axisLabels.sort(function (a, b) {
        return a - b;
    });

    var xScale = d3.scale.ordinal().rangePoints([40, width - 40], 0.5).domain(axisLabels);
    var xAxis = d3.svg.axis().scale(xScale);

    var lineGen = d3.svg.line()
        .x(function (d) {
            return xScale(d.Sample_Barcode);
        })
        .y(function (d) {
            return yScale(d.alt_count / 100);
        });

    var nestedData = d3.nest()
        .key(function (d) {
            return d.allele;
        })
        .entries(data);

    nestedData = sort_nested_alleles(nestedData);

    var lineSvg = canvas.append("g");
    var pointSvg = canvas.append("g");

    nestedData.forEach(function (d, i) {

        lineSvg.append("path")
            .attr("fill", "none")
            .attr("stroke", function () {
                return color_ref[d.values[0].parent_allele];
            })
            .attr("stroke-width", 2)
            .attr("d", lineGen(d.values));

        pointSvg.selectAll("timepoints")
            .data(d.values)
            .enter()
            .append("rect")
            .attr("x", function (d) {
                return (xScale(d.Sample_Barcode) - 5);
            })
            .attr("y", function (d) {
                return (yScale(d.alt_count / 100) - 5);
            })
            .attr("width", 12)
            .attr("height", 12)
            .attr('class', 'info_rects')
            .attr("fill", function () {
                return color_ref[d.values[0].parent_allele];
            })
            .on("mouseover", function (d) {
                div_tooltip.style("opacity", 0.9)
                    .html('<p id="timepoint_p" align="left" style="text-overflow: ellipsis; color: #fff;"> <b>'
                        + 'Timepoint: </b> ' + d.Sample_Barcode + '</p>'
                        + '<p id="allele_p" align="left" style="text-overflow: ellipsis; color: #fff">'
                        + '<b>Allele: </b>' + d.allele + '</p>'
                        + '<p id="vaf_p" align="left" style="text-overflow: ellipsis; color: #fff;">'
                        + '<b>VAF: </b>' + d.alt_count + '</p>')
                    .style("top", (d3.mouse(this)[1] - 40) + "px")
                    .style("left", (d3.mouse(this)[0] + 40) + "px");

                var timepoint_p_height = d3.select('#timepoint_p').node().clientHeight + (parseInt(d3.select('#timepoint_p').style('margin-bottom')));
                var allele_p_height = d3.select('#allele_p').node().clientHeight + (parseInt(d3.select('#allele_p').style('margin-bottom')));
                var vaf_p_height = d3.select('#vaf_p').node().clientHeight + (parseInt(d3.select('#vaf_p').style('margin-bottom')));
                var height = timepoint_p_height + allele_p_height + vaf_p_height;
                height = height + parseInt(d3.select('#allele_p').style('margin-bottom')); //extra cushion on bottom of tooltip

                var widths = [];
                widths.push(parseInt(d3.select('#timepoint_p').node().offsetWidth));
                widths.push(parseInt(d3.select('#allele_p').node().offsetWidth));
                widths.push(parseInt(d3.select('#vaf_p').node().offsetWidth));

                var width = Math.max.apply(null, widths);

                d3.select('#fig1-tooltip').style('height', function () {
                    return height + 'px';
                })
                    .style('width', function () {
                        var width_padding = 10;
                        return (width + width_padding) + 'px';
                    })
                    .style('padding-top', function () {
                        return parseInt(d3.select('#timepoint_p').style('margin-bottom')) + 'px';
                    })
                    .style('padding-bottom', function () {
                        return parseInt(d3.select('#vaf_p').style('margin-bottom')) + 'px';
                    })

            })
            .on("mouseout", function () {
                div_tooltip.remove();
                div_tooltip = d3.select(el).append("div")
                    .attr('id', 'fig1-tooltip')
                    .attr("class", "tooltip")
                    .style('white-space', 'nowrap')
                    .style("opacity", 0);
            });

    });

    canvas.append("svg:g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (height - 40) + ")")
        .call(xAxis);

    canvas.append("svg:g")
        .attr("class", "axis")
        .attr("transform", "translate(" + 4 + "0)")
        .call(yAxis);

}