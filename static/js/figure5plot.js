/**
 * Created by jakeconway on 11/24/16.
 */
function plotSuggestedFishplot(updatedData, el, height, width, color_ref, scope) {
    d3.select(el).selectAll('svg').remove();

    data = updatedData[0];
    color_ref = updatedData[1];

    if (data.length == 0 || data[0].cluster == undefined) {
        return;
    }

    var canvas = d3.select(el).append('svg')
        .attr('width', width)
        .attr('height', height);

    var title = canvas.append('text')
        .attr('class', 'title-text')
        .attr('x', width / 2)
        .attr('y', 20)
        .style('text-anchor', 'middle')
        .text(function () {
            return 'A Fishplot Suggesting One Option of Clonal Expansion';
        });

    var div_tooltip = d3.select(el).append("div")
        .attr('id', 'fig5-tooltip')
        .attr("class", "tooltip")
        .style('white-space', 'nowrap')
        .style("opacity", 0);

    var xAxisLabels = uniqueAxisLabels(data, 'Sample_Barcode');
    xAxisLabels = xAxisLabels.sort(function (a, b) {
        return a - b;
    });
    var num_of_timepoints = xAxisLabels.length;
    var sample_timepoints = uniqueAxisLabels(data, 'Sample_Barcode');

    var x_max = Math.max.apply(null, xAxisLabels);

    var ten_percent_below_zero = 0.1 * x_max;
    ten_percent_below_zero = parseInt(0 - ten_percent_below_zero);
    xAxisLabels.unshift(ten_percent_below_zero);

    var ten_percent_above_max = 0.1 * x_max;
    ten_percent_above_max = x_max + ten_percent_above_max;
    xAxisLabels.push(ten_percent_above_max);

    var xScale = d3.scale.linear().rangeRound([40, width - 40], 0.5)
        .domain(d3.extent(xAxisLabels, function (d) {
            return d;
        }));
    var xAxis = d3.svg.axis().scale(xScale).tickValues(sample_timepoints);

    var max_VAF_value = 100;

    //+3 padding to domain
    var yScale = d3.scale.linear().range([40, height - 40], 0.5).domain([max_VAF_value + 3, -1]);
    var yAxis = d3.svg.axis().scale(yScale).orient('left').ticks(0);

    var nestedData = d3.nest().key(function (d) {
        return d.allele
    }).entries(data);

    nestedData = sort_nested_alleles(nestedData);

    nestedData = add_origin(nestedData, ten_percent_below_zero);

    //Set up data for comparisons
    var fishplot_data = [];

    nestedData.forEach(function (d, i) {
        var allele_data = {};
        allele_data['allele'] = d.key;
        allele_data['freqs'] = [];
        var freqs = d.values;
        for (var j = 0; j < freqs.length; j++) {
            allele_data['freqs'].push(freqs[j].alt_count);
        }
        fishplot_data.push(allele_data);
    });


    var sort_array = [];
    for (var i = 0; i < fishplot_data.length; i++) {
        //Have to rank when ordering, because a subclone that develops later
        //cannot be parent of clone that derived earlier, even if it has a higher variant allele freq
        var ranking_adjustment = Math.pow(10, num_of_timepoints);
        var allele_freqs = fishplot_data[i].freqs;
        for (var j = 0; j < allele_freqs.length; j++) {
            if (allele_freqs[j] != 0) {
                var rank = ranking_adjustment * allele_freqs[j];
                sort_array.push({
                    allele: fishplot_data[i].allele,
                    rank: rank
                });
                break;
            }
            ranking_adjustment = ranking_adjustment / 10;
        }
    }

    sort_array.sort(function (a, b) {
        return b.rank - a.rank;
    });

    //Order data based on rank
    nestedData = order_by_rank(nestedData, sort_array);


    var plot_background = {};
    plot_background.key = "plot";
    plot_background.values = [];
    plot_background.values.length = nestedData[0].values.length;
    plot_background.values.fill({alt_count: 100});
    plot_background.children = [0];
    plot_background.groups = {0: 0};

    //Initialize first parent group
    nestedData[0].group = 0;
    nestedData[0].start_point = 50;
    nestedData[0].parent_index_of_this = "plot";
    nestedData[0].children = [];
    nestedData[0].id = 0;

    //Array to hold alleles that didn't fit on plot
    var unused = [];


    for (var i = 1; i < nestedData.length; i++) {
        var current_allele_data = nestedData[i];
        var former_allele_data = nestedData[i - 1];
        current_allele_data.group = former_allele_data.group;
        current_allele_data.start_point = former_allele_data.start_point;
        current_allele_data.parent_index_of_this = i - 1;
        current_allele_data.children = [];
        current_allele_data.id = i;


        //check if it can fit inside its parent
        var append_as_child = 'yes';
        var parent_of_child_index = i;
        for (var j = 1; j < current_allele_data.values.length; j++) {
            if (current_allele_data.values[j].alt_count > former_allele_data.values[j].alt_count) {
                append_as_child = 'no';
                break;
            }
        }
        if (append_as_child == 'yes') {
            former_allele_data.children.push(parent_of_child_index);
        }
        else {
            var done = 0;
            var children_used = [];
            while (done != 1) {
                var next_up = former_allele_data.parent_index_of_this;
                current_allele_data.parent_index_of_this = next_up;
                if (next_up == "plot") {
                    children_used.push(former_allele_data.id);
                    var children = plot_background.children.diff(children_used);
                    if (children.length == 0) {
                        var parent_allele = plot_background;
                    }
                    else {
                        var next_group = nestedData[children[0]].group;
                        //find the last allele that was a child of the new group
                        for (var l = i; l >= 0; l--) {
                            if (nestedData[l].group == next_group) {
                                parent_allele = nestedData[l];
                                var new_group_dummy_data = {};
                                new_group_dummy_data.group = next_group;
                                new_group_dummy_data.parent_index_of_this = parent_allele.id;
                                new_group_dummy_data.values = [];
                                new_group_dummy_data.values.length = parent_allele.values.length;
                                new_group_dummy_data.values.fill({alt_count: 0});
                                former_allele_data = new_group_dummy_data;
                                current_allele_data.parent_index_of_this = parent_allele.id;
                                break;
                            }
                        }
                    }
                }
                else {
                    if (next_up == "none") {
                        break;
                    }
                    var parent_allele = nestedData[next_up];
                }
                //Check if it can fit inside parent_allele alongside parent_allele's children
                //Array that holds total freq of children alleles at timepoint
                var total_children_freq = [];
                total_children_freq.length = parent_allele.values.length;
                total_children_freq.fill(0);
                for (var j = 0; j < parent_allele.children.length; j++) {
                    var child_allele = parent_allele.children[j];
                    child_allele = nestedData[child_allele];
                    for (var k = 0; k < total_children_freq.length; k++) {
                        total_children_freq[k] = child_allele.values[k].alt_count + total_children_freq[k];
                    }
                }
                //Now add the current_allele values to the children total and see if they fit inside of parent
                var check_if_fits = 1;
                if (parent_allele.key == "plot") {
                    var temp_freq_arr = [];
                    for (var j = 0; j < total_children_freq.length; j++) {
                        temp_freq_arr[j] = total_children_freq[j] + current_allele_data.values[j].alt_count;
                    }
                    max_VAF_value = Math.max.apply(null, temp_freq_arr);
                }
                else {
                    for (var j = 0; j < total_children_freq.length; j++) {
                        if ((total_children_freq[j] + current_allele_data.values[j].alt_count) > parent_allele.values[j].alt_count) {
                            //If this is true at least one, check_if_fits will be 0 and we assign the parent
                            //as the former allele
                            former_allele_data = parent_allele;
                            check_if_fits = 0;
                        }
                    }
                }
                if (check_if_fits == 1) {
                    parent_allele.children.push(i);
                    if (parent_allele.key == "plot") {
                        current_allele_data.group = (parent_allele.children.length - 1);
                        plot_background.groups[current_allele_data.group.toString()] = i;
                        var start_point_space = max_VAF_value / parent_allele.children.length;
                        var base_start_point = start_point_space / 2;
                        for (var g = 0; g < i + 1; g++) {
                            var start = base_start_point + (nestedData[g].group * start_point_space);
                            nestedData[g].start_point = start;
                        }
                    }
                    else {
                        current_allele_data.group = parent_allele.group;
                        current_allele_data.start_point = parent_allele.start_point;
                    }
                    done = 1;
                }
                if (check_if_fits == 0 && parent_allele.key == "plot") {
                    current_allele_data.parent_index_of_this = 'none';
                    //Doesn't fit... done=1 to move on
                    unused.push(current_allele_data.key);
                    done = 1;
                }
            }
        }
    }

    yScale = d3.scale.linear().range([40, height - 40], 0.5).domain([max_VAF_value + 3, -1]);

    scope.$parent.fishbone_data = nestedData;

    //Find where the lines of the border should be, adjusting so that no line goes below 0
    //and no line goes above 100
    for (var i = 0; i < plot_background.children.length; i++) {
        var parent = nestedData[plot_background.children[i]];
        var start_point = parent.start_point;
        nestedData[plot_background.children[i]] = parent_border_collision_detection(parent, start_point, 0, max_VAF_value, 'alt_count');
    }

    adjust_independent_evolution_positions(nestedData, plot_background, num_of_timepoints, 'alt_count', max_VAF_value);

    nestedData = adjust_children_positioning(nestedData, num_of_timepoints, 'alt_count');

    //load pinches
    for (var i = 0; i < nestedData.length; i++) {
        var current_allele = nestedData[i];
        for (var j = 0; j < current_allele.values.length; j++) {
            //Initialize all pinches to false
            //Pinch will only be true if the "origin" timepoint is not the subclones actual origin
            current_allele.values[j].pinch = false;
        }
        current_allele.values = find_origin(current_allele);
    }

    remove_unnecessary_values(nestedData);

    var topLineGen = d3.svg.line()
        .interpolate('cardinal').tension(0.85)
        .x(function (d) {
            if (d.pinch == true) {
                var x_pos = (xScale(d.Sample_Barcode) + xScale(d.next_timepoint)) / 2;
                return x_pos;
            }
            return xScale(d.Sample_Barcode);
        })
        .y(function (d) {
            return yScale(d.top);
        });

    var bottomLineGen = d3.svg.line()
        .interpolate('cardinal').tension(0.85)
        .x(function (d, i) {
            if (d.pinch == true) {
                var x_pos = (xScale(d.Sample_Barcode) + xScale(d.next_timepoint)) / 2;
                return x_pos;
            }
            return xScale(d.Sample_Barcode);
        })
        .y(function (d) {
            return yScale(d.bottom);
        });

    //Get all of the x-values that make up the top line (will be same as bottom, symmetrical)
    //Then take area along y-axis between the top and bottom lines
    var areaBetweenLines = d3.svg.area()
        .interpolate('cardinal').tension(0.85)
        .x(topLineGen.x())
        .y0(topLineGen.y())
        .y1(bottomLineGen.y());

    nestedData.forEach(function (d, i) {

        canvas.append('path')
            .attr('fill', 'none')
            .attr('stroke-width', 5)
            .attr("stroke", "transparent")
            .style("stroke-linejoin", "round")
            .attr('d', topLineGen(d.values));

        canvas.append('path')
            .attr('fill', 'none')
            .attr("stroke", "transparent")
            .style("stroke-linejoin", "round")
            .attr('stroke-width', 8)
            .attr('d', bottomLineGen(d.values));

        var old_x = 0;
        var old_y = 0;

        canvas.append('path')
            .datum(d.values)
            .attr('fill', function (d) {
                return color_ref[d[0].parent_allele];
            })
            .attr('opacity', 1)
            .attr('d', areaBetweenLines)
            .style('cursor', 'pointer')
            .on('mouseover', function (d) {
                var alleles = d[0].allele;
                alleles = alleles.split('\n');
                alleles = alleles.join('<br>');
                alleles = ('<p align="left" ' +
                'style="text-overflow: ellipsis; padding: 0em; margin-top: 0em; margin-bottom: 0em; border: 0em; color: #fff;">'
                + alleles + '</p>');
                alleles = '<p align="center" ' +
                    'style="text-overflow: ellipsis; padding: 0em; margin-top: 0em; margin-bottom: 3px; border: 0em; color: #fff;">'
                    + '<b><u> alleles </u></b></p>' + alleles;

                div_tooltip.style("opacity", 0.9)
                    .html(alleles)
                    .style("top", (d3.mouse(this)[1] - 40) + "px")
                    .style("left", (d3.mouse(this)[0] + 40) + "px");

                old_x = d3.event.pageX;
                old_y = d3.event.pageY;

            })
            .on('mousemove', function () {
                var new_x = d3.event.pageX;
                var new_y = d3.event.pageY;

                var x_difference = new_x - old_x;
                var y_difference = new_y - old_y;

                old_x = new_x;
                old_y = new_y;

                div_tooltip.style('top', function () {
                    //jQuery for Firefox
                    var top = parseInt($(this).position().top);
                    top = top + y_difference;
                    return top + 'px';
                })
                    .style('left', function () {
                        //jQuery for Firefox
                        var left = parseInt($(this).position().left);
                        left = left + x_difference;
                        return left + 'px';
                    });
            })
            .on('mouseleave', function () {
                div_tooltip.remove();

                div_tooltip = d3.select(el).append("div")
                    .attr('id', 'fig5-tooltip')
                    .attr("class", "tooltip")
                    .style('white-space', 'nowrap')
                    .style("opacity", 0);
            });
    });


    if (navigator.userAgent.indexOf("Firefox") != -1) {
        $window.addEventListener('mousemove', function () {
            var new_x = d3.event.pageX;
            var new_y = d3.event.pageY;

            var x_difference = new_x - old_x;
            var y_difference = new_y - old_y;

            old_x = new_x;
            old_y = new_y;

            div_tooltip.style('top', function () {
                //jQuery for Firefox
                var top = parseInt($(this).position().top);
                top = top + y_difference;
                return top + 'px';
            })
                .style('left', function () {
                    //jQuery for Firefox
                    var left = parseInt($(this).position().left);
                    left = left + x_difference;
                    return left + 'px';
                });
        })
    }

    canvas.append("svg:g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (height - 40) + ")")
        .call(xAxis);

    canvas.append("svg:g")
        .attr("class", "axis")
        .attr("transform", "translate(" + 4 + "0)")
        .call(yAxis);

}