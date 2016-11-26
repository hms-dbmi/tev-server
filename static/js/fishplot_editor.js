/**
 * Created by jakeconway on 11/24/16.
 */
function create_fishplot_editor(updated_data, el, height, width, color_ref, chromosome_ref, position_ref,
                    type_ref, cDNA_ref, ref_seq_ref, reference_ref, alternative_ref, patients_with_gene_ref, max_VAF_value,
                    scope, $window, $filter, $http) {
    d3.select(el).selectAll('svg').remove();
    d3.select(el).selectAll('div').remove();
    data = updated_data;

    var mini_nested_data = d3.nest().key(function (d) {
        return d.allele;
    }).entries(data);

    mini_nested_data = sort_nested_alleles(mini_nested_data);

    var canvas_nested_data = d3.nest().key(function (d) {
        return d.allele;
    }).entries(data);

    canvas_nested_data = sort_nested_alleles(canvas_nested_data);

    for (var i = 0; i < canvas_nested_data.length; i++) {
        canvas_nested_data[i].chromosome = chromosome_ref[canvas_nested_data[i].key];
        canvas_nested_data[i].position = position_ref[canvas_nested_data[i].key];
        canvas_nested_data[i].type = type_ref[canvas_nested_data[i].key];
        canvas_nested_data[i].cDNA = cDNA_ref[canvas_nested_data[i].key];
        canvas_nested_data[i].ref_seq = ref_seq_ref[canvas_nested_data[i].key];
        canvas_nested_data[i].reference = reference_ref[canvas_nested_data[i].key];
        canvas_nested_data[i].alternative = alternative_ref[canvas_nested_data[i].key];
        canvas_nested_data[i]['patients with gene'] = patients_with_gene_ref[canvas_nested_data[i].key.split('-')[0]].length;

        mini_nested_data[i].chromosome = chromosome_ref[mini_nested_data[i].key];
        mini_nested_data[i].position = position_ref[mini_nested_data[i].key];
        mini_nested_data[i].type = type_ref[mini_nested_data[i].key];
        mini_nested_data[i].cDNA = cDNA_ref[mini_nested_data[i].key];
        mini_nested_data[i].ref_seq = ref_seq_ref[mini_nested_data[i].key];
        mini_nested_data[i].reference = reference_ref[mini_nested_data[i].key];
        mini_nested_data[i].alternative = alternative_ref[mini_nested_data[i].key];
        mini_nested_data[i]['patients with gene'] = patients_with_gene_ref[mini_nested_data[i].key.split('-')[0]].length;
    }

    var fishplot_data = [];

    canvas_nested_data.forEach(function (d, i) {
        var allele_data = {};
        allele_data['allele'] = d.key;
        allele_data['freqs'] = [];
        var freqs = d.values;
        for (var j = 0; j < freqs.length; j++) {
            allele_data['freqs'].push(freqs[j].alt_count);
        }
        fishplot_data.push(allele_data);
    });

    add_conserved_alt_count(canvas_nested_data);
    add_conserved_alt_count(mini_nested_data);


    var x_axis_labels = [];
    x_axis_labels = uniqueAxisLabels(data, 'Sample_Barcode');
    x_axis_labels = x_axis_labels.sort(function (a, b) {
        return a - b;
    });

    var num_of_timepoints = x_axis_labels.length;
    var sample_timepoints = uniqueAxisLabels(data, 'Sample_Barcode');
    sample_timepoints = sample_timepoints.sort(function (a, b) {
        return a - b;
    });

    var tick_labels = uniqueAxisLabels(data, 'Sample_Barcode');
    tick_labels = tick_labels.sort(function (a, b) {
        return a - b;
    });

    var x_max = Math.max.apply(null, x_axis_labels);

    var ten_percent_below_zero = 0.1 * x_max;
    ten_percent_below_zero = parseInt(0 - ten_percent_below_zero);
    x_axis_labels.unshift(ten_percent_below_zero);

    sample_timepoints.unshift(ten_percent_below_zero);

    var ten_percent_above_max = 0.1 * x_max;
    ten_percent_above_max = x_max + ten_percent_above_max;
    x_axis_labels.push(ten_percent_above_max);

    //Sorting data by what can fit in what
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

    //Order mini fishplot svgs by rank
    mini_nested_data = order_by_rank(mini_nested_data, sort_array);
    //Also reorder nested data to be used for canvas to keep it consistent
    canvas_nested_data = order_by_rank(canvas_nested_data, sort_array);

    scope.$parent.ordered_data = canvas_nested_data;

    //Add children, parent, and index fields
    for (var i = 0; i < canvas_nested_data.length; i++) {
        canvas_nested_data[i].children = [];
        canvas_nested_data[i].parent_index_of_this = 'none';
        canvas_nested_data[i].index = i;
        canvas_nested_data[i].ploidy = 2;
        canvas_nested_data[i].chrs_affected = 'N/A';
        canvas_nested_data[i].color = color_ref[canvas_nested_data[i].key];

        mini_nested_data[i].ploidy = 2;
        mini_nested_data[i].color = color_ref[mini_nested_data[i].key];
    }

    var CCF_options = {};


    var allele_color_reference = associated_allele_colors(canvas_nested_data);

    load_CCF_options(CCF_options, sample_timepoints);

    //Div wrapper for dragable div
    var dragable_div_wrapper = d3.select(el).append('div')
        .style('top', '0px')
        .style('left', '0px')
        .style('width', '25%')
        .style('height', height + 'px')
        .style('float', 'left')
        .style('overflow', 'visible')
        .style('padding', '0px')
        .style('position', 'relative')
        .attr('id', 'dragable_div_wrapper');

    var new_height = d3.select('#dragable_div_wrapper').node().offsetHeight;
    d3.select(el).style('height', new_height + 'px');


    //Div to hold container svg
    var container = dragable_div_wrapper.append('div')
        .style('top', '0px')
        .style('left', '0px')
        .style('width', '100%')
        .style('height', height + 'px')
        .style('float', 'left')
        .style('overflow-y', 'scroll')
        .style('overflow-x', 'hidden')
        .style('padding', '2px')
        .style('position', 'relative')
        .attr('id', 'container_div')
        .on('scroll', function () {
            d3.selectAll('#dragable_div').remove();
        });

    //Div to hold canvas svg
    var canvas = d3.select(el).append('div')
        .style('top', new_height + 'px')
        .style('left', width * 0.27 + 'px')
        .style('width', '73%')
        .style('height', height + 'px')
        .style('padding', '2px')
        .style('float', 'right')
        .attr('id', 'canvas_div');

    //Will contain the index in the nested data of what fish the user is currently moused over
    var moused_over;

    //Canvas svg where fishplot will be plotted
    var canvas_svg = canvas.append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('id', 'canvas_svg')
        .attr('index', 'canvas_svg')
        .on('mouseover', function () {
            if (dragging) {
                moused_over = d3.select(this).attr('index');
            }
        });

    //Use jQuery because d3.select('#canvas_svg').node().clientWidth doesnt work on Firefox
    var canvas_range_max_x = $('#canvas_svg').width();
    var canvas_x_scale = d3.scale.linear()
        .rangeRound([canvas_range_max_x * 0.01, canvas_range_max_x * 0.99], 0.25)
        .domain(d3.extent(x_axis_labels, function (d) {
            return d;
        }));
    var canvas_x_axis = d3.svg.axis().scale(canvas_x_scale).tickValues(tick_labels);

    //Also use jQuery here because
    var canvas_range_max_y = $('#canvas_svg').height() * 0.95;
    var canvas_y_scale = d3.scale.linear().range([0, canvas_range_max_y]).domain([max_VAF_value + 1, -1]);

    function y_scale_domain_max(nested_data) {
        var max_array = [];
        for (var i = 0; i < nested_data.length; i++) {
            var allele_alt_counts = [];
            var timepoint_data = nested_data[i].values;
            for (var j = 0; j < timepoint_data.length; j++) {
                allele_alt_counts[j] = timepoint_data[j].alt_count;
            }
            max_array[i] = Math.max.apply(Math, allele_alt_counts);
        }
        return Math.max.apply(Math, max_array);
    }

    var y_max = y_scale_domain_max(mini_nested_data);

    mini_nested_data = add_origin(mini_nested_data, ten_percent_below_zero);
    canvas_nested_data = add_origin(canvas_nested_data, ten_percent_below_zero);


    function generate_mini_fishplot_top_and_bottom(nested_data, y_max) {
        var mid_point = y_max / 2;
        for (var i = 0; i < nested_data.length; i++) {
            var allele_freqs = nested_data[i].values;
            for (var j = 0; j < allele_freqs.length; j++) {
                var split = allele_freqs[j].alt_count / 2;
                allele_freqs[j].top = mid_point + split;
                allele_freqs[j].bottom = mid_point - split;
            }
        }
    }

    generate_mini_fishplot_top_and_bottom(mini_nested_data, y_max);
    var mini_x_range_max = d3.select('#container_div').node().clientWidth;

    var mini_x_scale = d3.scale.linear().rangeRound([0, mini_x_range_max], 0.5)
        .domain(d3.extent(x_axis_labels, function (d) {
            return d;
        }));
    var mini_y_scale = d3.scale.linear().range([20, 140]).domain([y_max + 1, -1]);

    var top_line_gen = d3.svg.line()
        .interpolate('cardinal').tension(0.85)
        .x(function (d) {
            if (d.pinch == true) {
                var x_pos = (mini_x_scale(d.Sample_Barcode) + mini_x_scale(d.next_timepoint)) / 2;
                return x_pos;
            }
            return mini_x_scale(d.Sample_Barcode);
        })
        .y(function (d) {
            return mini_y_scale(d.top);
        });

    var canvas_top_line_gen = d3.svg.line()
        .interpolate('cardinal').tension(0.85)
        .x(function (d) {
            if (d.pinch == true) {
                var x_pos = (canvas_x_scale(d.Sample_Barcode) + canvas_x_scale(d.next_timepoint)) / 2;
                return x_pos;
            }
            return canvas_x_scale(d.Sample_Barcode);
        })
        .y(function (d) {
            return canvas_y_scale(d.top);
        });

    var bottom_line_gen = d3.svg.line()
        .interpolate('cardinal').tension(0.85)
        .x(function (d) {
            if (d.pinch == true) {
                var x_pos = (mini_x_scale(d.Sample_Barcode) + mini_x_scale(d.next_timepoint)) / 2;
                return x_pos;
            }
            return mini_x_scale(d.Sample_Barcode);
        })
        .y(function (d) {
            return mini_y_scale(d.bottom);
        });

    var canvas_bottom_line_gen = d3.svg.line()
        .interpolate('cardinal').tension(0.85)
        .x(function (d) {
            if (d.pinch == true) {
                var x_pos = (canvas_x_scale(d.Sample_Barcode) + canvas_x_scale(d.next_timepoint)) / 2;
                return x_pos;
            }
            return canvas_x_scale(d.Sample_Barcode);
        })
        .y(function (d) {
            return canvas_y_scale(d.bottom);
        });

    var area_between_lines = d3.svg.area()
        .interpolate('cardinal').tension(0.85)
        .x(top_line_gen.x())
        .y0(top_line_gen.y())
        .y1(bottom_line_gen.y());

    var canvas_area_between_lines = d3.svg.area()
        .interpolate('cardinal').tension(0.85)
        .x(canvas_top_line_gen.x())
        .y0(canvas_top_line_gen.y())
        .y1(canvas_bottom_line_gen.y());

    //Keep track of fishplots on canvas & order they're in
    //In case new plot added to canvas background and need to move/shift everything
    var fishplot_svgs = [];

    var mini_fishplot_data = JSON.parse(JSON.stringify(mini_nested_data));

    pinch_data(mini_fishplot_data);
    remove_unnecessary_values(mini_fishplot_data);


    var container_div_height = 600;
    var top;
    var mini_fishplot_container_height = 160;
    var mini_fishplots = container.selectAll('alleles')
        .data(mini_fishplot_data)
        .enter()
        .append('div')
        .style('top', function (d, i) {
            //150 will be height of divs holding mini fishplots
            if (i == 0) {
                top = 10;
            }
            else {
                top = top + mini_fishplot_container_height + 10;
                if (top + mini_fishplot_container_height > container_div_height) {
                    container_div_height = top + mini_fishplot_container_height;
                    d3.select('#container_div').attr('height', container_div_height)
                }
            }
            return top + 'px';
        })
        .style('left', '0px')
        .style('width', '100%')
        .style('height', mini_fishplot_container_height + 'px')
        .style('position', 'absolute')
        .style('cursor', 'default')
        .style('background', '#FFF')
        .style('opacity', 1)
        .attr('index', function (d, i) {
            return i;
        })
        .attr('class', 'mini_fishplot_divs')
        .attr('z-index', 5)
        .attr('id', function (d, i) {
            return 'mini_fishplot_div' + i;
        });


    var plot_background = {};
    plot_background.key = "plot";
    plot_background.values = [];
    plot_background.values.length = canvas_nested_data[0].values.length;
    //Depends on what the domain is for the canvas... right now the max is 100 total for the fishplot(s)
    plot_background.values.fill({alt_count: max_VAF_value});
    plot_background.children = [];
    plot_background.groups = {0: 0};
    var groups = [];


    var old_x_pos = 0;
    var new_x_pos = 0;
    var old_y_pos = 0;
    var new_y_pos = 0;
    var top_in_container, left_in_container;

    for (var i = 0; i < mini_fishplot_data.length; i++) {
        d3.select('#mini_fishplot_div' + i).style('background-color', function () {
            if ((i + 1) % 2 != 0) {
                return '#d6d6d6';
            }
            else {
                return '#eff0f2';
            }
        })
    }
    d3.select('#canvas_div').style('background-color', '#f2f3f4');
    d3.select('#container_div').style('background-color', '#f2f3f4');

    //Lay down an svg in the divs
    var svgs = mini_fishplots.append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('class', 'mini_fishplots')
        .attr('opacity', 1)
        .attr('id', function (d, i) {
            return 'mini_fishplot_svg' + i;
        });

    var dragging = false;

    //Indices of used fishplots where the one being dragged wont be able to fit
    var cant_fit = [];

    //Variables for dealing with context menu to remove fishplots/edit ploidy
    var contextMenuShowing = false;
    var contextMenuFor = '';
    var contextMenuForPrevious = '';

    //give leeway of 2px for minimum left position of mini fishplot
    //Use jQuery because safari doesnt understand d3.select().node().left
    var minimum_left_pos = parseInt($('#canvas_div').position().left) - 2;
    minimum_left_pos = Math.floor(minimum_left_pos);

    function should_update_vaf_scale(plot_background, nested_data, current_data, not_plotted) {
        var vaf_dict = {};
        for (var i = 0; i < sample_timepoints.length; i++) {
            vaf_dict[sample_timepoints[i]] = [];
        }
        //Get total VAF plotted at each timepoint
        for (var i = 0; i < plot_background.children.length; i++) {
            var vaf_data = nested_data[plot_background.children[i]].values;
            for (var j = 0; j < vaf_data.length; j++) {
                vaf_dict[vaf_data[j].Sample_Barcode].push(vaf_data[j].alt_count);
            }
        }
        //now add VAF from newly added fishplot
        var max = 0;
        if (not_plotted == true) {
            for (var i = 0; i < current_data.values.length; i++) {
                vaf_dict[current_data.values[i].Sample_Barcode].push(current_data.values[i].alt_count);
                var sum = vaf_dict[current_data.values[i].Sample_Barcode].reduce(function (a, b) {
                    return a + b;
                }, 0);
                if (sum > max) {
                    max = sum;
                }
            }
        }
        if (not_plotted == false) {
            for (var i = 0; i < sample_timepoints.length; i++) {
                var sum = vaf_dict[sample_timepoints[i]].reduce(function (a, b) {
                    return a + b;
                }, 0);
                if (sum > max) {
                    max = sum;
                }
            }
        }
        if (max < 100) {
            max = 100;
        }
        return max;
    }

    function update_plot_background_values(plot_background, new_max) {
        for (var i = 0; i < plot_background.values.length; i++) {
            plot_background.values[i].alt_count = new_max;
        }
    }

    //Make all mini fishplots opacity 1 on mouse-up of primary div
    //Precaution for if user drags mouse too fast
    d3.select(el).on('mousemove', function () {
        if (dragging == true) {
            var dragable_div = d3.select('#dragable_div');
            d3.event.preventDefault();

            if (navigator.userAgent.indexOf("Firefox") != -1) {
                new_x_pos = d3.event.pageX;
                new_y_pos = d3.event.pageY;
            }
            else {
                new_x_pos = d3.event.x;
                new_y_pos = d3.event.y;
            }

            var x_difference = new_x_pos - old_x_pos;
            var y_difference = new_y_pos - old_y_pos;

            old_x_pos = new_x_pos;
            old_y_pos = new_y_pos;

            dragable_div.style('left', function () {
                return parseInt(dragable_div.style('left')) + x_difference + 'px';
            })
                .style('top', function () {
                    return parseInt(dragable_div.style('top')) + y_difference + 'px';
                });
            dragable_div.style('pointer-events', 'none').style('cursor', 'pointer');

        }
        else {
            return;
        }
    })
        .on('mouseup', function () {
            old_x_pos = 0;
            old_y_pos = 0;
            dragging = false;
            var svg_index = d3.select('#dragable_div').attr('index');

            for (var i = 0; i < cant_fit.length; i++) {
                d3.select('#big_fish' + cant_fit[i])
                    .attr('fill', canvas_nested_data[cant_fit[i]].color);
            }

            cant_fit = [];

            var mini_fishplot = d3.select('#dragable_div');
            var mini_fishplot_left = parseInt(mini_fishplot.style('left'));

            //If the mini fishplot is dragged over the canvas background
            //center the starting y value at the middle of the mini fishplot div
            var half_height = mini_fishplot.node().clientHeight / 2;
            var mini_fishplot_top = mini_fishplot.style('top');
            var start = parseInt(mini_fishplot_top) + half_height;

            start = canvas_y_scale.invert(start);

            if ((mini_fishplot_left + left_adjustment) > minimum_left_pos) {
                d3.select(el).style('cursor', 'default');

                if (moused_over == 'canvas_svg') {

                    var nested_data = canvas_nested_data.slice(0);

                    var data_index = mini_fishplot.attr('index');

                    var data = nested_data[data_index];

                    max_VAF_value = should_update_vaf_scale(plot_background, nested_data, data, true);
                    canvas_y_scale.domain([max_VAF_value + 1, -1]);
                    if (max_VAF_value > plot_background.values[0].alt_count) {
                        update_plot_background_values(plot_background, max_VAF_value);
                    }

                    var fit = can_fit(nested_data, plot_background, data, num_of_timepoints);

                    //If it can fit, plot it and re-adjust all other independent clonal evolutions
                    if (fit) {

                        svg_index = mini_fishplot.attr('index');

                        d3.selectAll('.fishplot_areas').attr('opacity', 1);
                        d3.select('#mini_fishplot_div' + svg_index).style('opacity', 0.35);
                        d3.select('#dragable_div').remove();

                        data.start_point = start;
                        data.group = groups.length;
                        data.parent_index_of_this = 'plot';

                        //Re-do top and bottom based on start position from mousedown
                        for (var i = 0; i < num_of_timepoints; i++) {
                            data.values[i].top = data.start_point + (data.values[i].alt_count / 2);
                            data.values[i].bottom = data.start_point - (data.values[i].alt_count / 2);
                        }

                        groups.push(data.group);
                        if (plot_background.groups[data.group.toString()] == undefined) {
                            plot_background.groups[data.group.toString()] = data_index;
                        }

                        plot_background.children.push(parseInt(data_index));

                        plot_background.children.sort(function (a, b) {
                            return nested_data[a].start_point - nested_data[b].start_point;
                        });

                        fishplot_svgs.push(parseInt(data_index));
                        scope.$apply(function () {
                            scope.$parent.plotted = fishplot_svgs;
                        });

                        canvas_nested_data[data_index] = JSON.parse(JSON.stringify(data));

                        //Create shallow copy for values of each fishplot used
                        //Prevents find_origin() function from permanently trimming allele values
                        update_canvas_nested_data(canvas_nested_data, fishplot_svgs);

                        for (var i = 0; i < plot_background.children.length; i++) {
                            var parent = nested_data[plot_background.children[i]];
                            var start_point = parent.start_point;
                            nested_data[plot_background.children[i]] = parent_border_collision_detection(parent, start_point, 0, max_VAF_value, 'alt_count');
                        }

                        adjust_independent_evolution_positions(nested_data, plot_background, num_of_timepoints, 'alt_count', max_VAF_value);

                        //Retain a complete nested data, that doesnt affect canvas_nested_data, to be used when
                        //determining CCF solutions
                        var complete_nested_data = canvas_nested_data.slice(0);

                        nested_data = reconstruct_data(nested_data, fishplot_svgs);

                        //collision detection for children after adjusting the independent evolution positions
                        nested_data = adjust_children_positioning(nested_data, num_of_timepoints, 'alt_count');

                        //load pinches
                        //Have to use fishplot svgs to select specific indices of nested_data
                        //Otherwise, we prematurely clip off the origin of fishplots starting after
                        //The first timepoint (i.e. Pretreatment in example file)
                        for (var i = 0; i < fishplot_svgs.length; i++) {
                            var current_allele = nested_data[i];
                            for (var j = 0; j < current_allele.values.length; j++) {
                                //Initialize all pinches to false
                                //Pinch will only be true if the "origin" timepoint is not the subclones actual origin
                                current_allele.values[j].pinch = false;
                            }
                            current_allele.values = find_origin(current_allele);
                        }

                        remove_unnecessary_values(nested_data);

                        d3.selectAll('.big_fish').remove();


                        for (var i = 0; i < nested_data.length; i++) {
                            var current_data = nested_data[i];

                            canvas_svg.append('path')
                                .attr('fill', 'none')
                                .attr('stroke-width', 5)
                                .attr("stroke", "transparent")
                                .attr('class', 'big_fish')
                                .style("stroke-linejoin", "round")
                                .attr('d', function () {
                                    return canvas_top_line_gen(current_data.values);
                                });

                            canvas_svg.append('path')
                                .attr('fill', 'none')
                                .attr("stroke", "transparent")
                                .style("stroke-linejoin", "round")
                                .attr('class', 'big_fish')
                                .attr('stroke-width', 8)
                                .attr('d', function () {
                                    return canvas_bottom_line_gen(current_data.values);
                                });

                            canvas_svg.append('path')
                                .datum(current_data.values)
                                .attr('fill', current_data.color)
                                .attr('opacity', 1)
                                .attr('class', 'big_fish dropdown-toggle')
                                .attr('d', canvas_area_between_lines)
                                .attr('index', current_data.index)
                                .attr('id', 'big_fish' + current_data.index)
                                .style('cursor', 'pointer')
                                .on('mouseenter', function (d) {
                                    moused_over = parseInt(d3.select(this).attr('index'));
                                })
                                .on('mouseover', function () {
                                    moused_over = parseInt(d3.select(this).attr('index'));
                                })
                                .on('mouseleave', function () {
                                    d3.select(this).attr('opacity', 1);
                                })
                                .on('contextmenu', function () {
                                    contextMenuFor = parseInt(d3.select(this).attr('index'));

                                    //give the button an attribute to reference the fishplots they're dealing with
                                    //now we can invoke a function on click
                                    d3.select('#edit-ploidy-btn').attr('fish-index', contextMenuFor);
                                    d3.select('#rmv-fishplot-btn').attr('fish-index', contextMenuFor);

                                    if (contextMenuFor != contextMenuForPrevious || d3.select('#context-div').attr('cm-showing') == 'false') {
                                        contextMenuShowing = false;
                                    }
                                    if (contextMenuShowing == false) {
                                        contextMenuForPrevious = contextMenuFor;
                                        d3.event.preventDefault();
                                        d3.select('#context-div').attr('cm-showing', 'true');
                                        contextMenuShowing = true;
                                        d3.select('#context-div').style('left', function () {
                                            var left = d3.event.pageX;
                                            return left + 'px';
                                        })
                                            .style('top', function () {
                                                //-75 pixels because of navbar padding
                                                var top = d3.event.pageY - 75;
                                                return top + 'px';
                                            })
                                            .style('z-index', 10)
                                            .style('opacity', 1);
                                    }
                                    else {
                                        d3.event.preventDefault();
                                        contextMenuShowing = false;
                                        d3.select('#context-div').attr('cm-showing', 'false');
                                        d3.select('#context-div').style('opacity', 0)
                                            .style('z-index', -1);
                                    }
                                });
                        }

                    }
                    else {
                        setTimeout(function () {
                            var index = d3.select('#dragable_div').attr('index');
                            d3.select('#fishplot_area' + index).attr('opacity', 1);
                        }, 500);
                        d3.select('#dragable_div').transition()
                            .duration(500)
                            .style('top', top_in_container)
                            .style('left', left_in_container)
                            .remove();
                    }
                }
                else {
                    nested_data = canvas_nested_data.slice(0);

                    var parent_of_this = moused_over;

                    parent = nested_data[parent_of_this];

                    data_index = mini_fishplot.attr('index');

                    data = nested_data[data_index];

                    data.start_point = start;
                    data.group = parent.group;
                    data.values[0].start_point = start;
                    data.parent_index_of_this = parseInt(parent_of_this);
                    data.ploidy = parent.ploidy;

                    d3.select('#ploidy_text' + data_index).text(function () {
                        return 'Ploidy: ' + data.ploidy;
                    });


                    //If it can git, make it a child of the current fishplot
                    //And re-adjust everything that has already been plotted
                    fit = can_fit(nested_data, parent, data, num_of_timepoints);

                    if (fit) {

                        svg_index = mini_fishplot.attr('index');
                        d3.selectAll('.fishplot_areas').attr('opacity', 1);

                        d3.select('#mini_fishplot_div' + svg_index).style('opacity', 0.35);
                        d3.select('#dragable_div').remove();

                        fishplot_svgs.push(parseInt(data_index));
                        scope.$apply(function () {
                            scope.$parent.plotted = fishplot_svgs;
                        });

                        //Re-do top and bottom based on start position of parent
                        for (var i = 0; i < num_of_timepoints; i++) {
                            data.values[i].top = data.start_point + (data.values[i].alt_count / 2);
                            data.values[i].bottom = data.start_point - (data.values[i].alt_count / 2);
                        }

                        //Add the current fish as a subclone
                        parent.children.push(parseInt(data.index));
                        parent.children.sort(function (a, b) {
                            return canvas_nested_data[a].start_point
                                - canvas_nested_data[b].start_point;
                        });

                        canvas_nested_data[data_index] = JSON.parse(JSON.stringify(data));

                        //Create shallow copy for values of each fishplot used
                        //Prevents find_origin function from permanently trimming allele values
                        update_canvas_nested_data(canvas_nested_data, fishplot_svgs);

                        for (var i = 0; i < plot_background.children.length; i++) {
                            parent = nested_data[plot_background.children[i]];
                            start_point = parent.start_point;
                            nested_data[plot_background.children[i]] = parent_border_collision_detection(parent, start_point, 0, max_VAF_value, 'alt_count');
                        }

                        adjust_independent_evolution_positions(nested_data, plot_background, num_of_timepoints, 'alt_count', max_VAF_value);

                        //Retain a complete nested data, that doesnt affect canvas_nested_data, to be used when
                        //determining CCF solutions
                        var complete_nested_data = canvas_nested_data.slice(0);

                        nested_data = reconstruct_data(nested_data, fishplot_svgs);

                        //collision detection for children after adjusting the independent evolution positions
                        nested_data = adjust_children_positioning(nested_data, num_of_timepoints, 'alt_count');

                        set_new_start_point(canvas_nested_data, nested_data, fishplot_svgs, parent.children);

                        for (var i = 0; i < nested_data.length; i++) {
                            current_allele = nested_data[i];
                            for (var j = 0; j < current_allele.values.length; j++) {
                                //Initialize all pinches to false
                                //Pinch will only be true if the "origin" timepoint is not the subclones actual origin
                                current_allele.values[j].pinch = false;
                            }
                            current_allele.values = find_origin(current_allele);
                        }

                        remove_unnecessary_values(nested_data);


                        d3.selectAll('.big_fish').remove();

                        for (var i = 0; i < nested_data.length; i++) {
                            current_data = nested_data[i];

                            canvas_svg.append('path')
                                .attr('fill', 'none')
                                .attr('stroke-width', 5)
                                .attr("stroke", "transparent")
                                .attr('class', 'big_fish')
                                .style("stroke-linejoin", "round")
                                .attr('d', function () {
                                    return canvas_top_line_gen(current_data.values);
                                });

                            canvas_svg.append('path')
                                .attr('fill', 'none')
                                .attr("stroke", "transparent")
                                .style("stroke-linejoin", "round")
                                .attr('class', 'big_fish')
                                .attr('stroke-width', 8)
                                .attr('d', function () {
                                    return canvas_bottom_line_gen(current_data.values);
                                });

                            canvas_svg.append('path')
                                .datum(current_data.values)
                                .attr('fill', current_data.color)
                                .attr('opacity', 1)
                                .attr('class', 'big_fish dropdown-toggle')
                                .attr('d', canvas_area_between_lines)
                                .attr('index', current_data.index)
                                .attr('id', 'big_fish' + current_data.index)
                                .style('cursor', 'pointer')
                                .on('mouseenter', function (d) {
                                    moused_over = parseInt(d3.select(this).attr('index'));
                                })
                                .on('mouseover', function () {
                                    moused_over = parseInt(d3.select(this).attr('index'));
                                })
                                .on('mouseleave', function () {
                                    d3.select(this).attr('opacity', 1);
                                })
                                .on('contextmenu', function () {
                                    contextMenuFor = parseInt(d3.select(this).attr('index'));

                                    //give the button an attribute to reference the fishplots they're dealing with
                                    //now we can invoke a function on click
                                    d3.select('#edit-ploidy-btn').attr('fish-index', contextMenuFor);
                                    d3.select('#rmv-fishplot-btn').attr('fish-index', contextMenuFor);

                                    if (contextMenuFor != contextMenuForPrevious || d3.select('#context-div').attr('cm-showing') == 'false') {
                                        contextMenuShowing = false;
                                    }
                                    if (contextMenuShowing == false) {
                                        contextMenuForPrevious = contextMenuFor;
                                        d3.event.preventDefault();
                                        contextMenuShowing = true;
                                        d3.select('#context-div').attr('cm-showing', 'true');
                                        d3.select('#context-div').style('left', function () {
                                            var left = d3.event.pageX;
                                            return left + 'px';
                                        })
                                            .style('top', function () {
                                                //-75 pixels because of navbar padding
                                                var top = d3.event.pageY - 75;
                                                return top + 'px';
                                            })
                                            .style('z-index', 10)
                                            .style('opacity', 1);
                                    }
                                    else {
                                        d3.event.preventDefault();
                                        contextMenuShowing = false;
                                        d3.select('#context-div').attr('cm-showing', 'false');
                                        d3.select('#context-div').style('opacity', 0)
                                            .style('z-index', -1);
                                    }
                                });
                        }
                    }
                    else {
                        setTimeout(function () {
                            var index = d3.select('#dragable_div').attr('index');
                            d3.select('#fishplot_area' + index).attr('opacity', 1);
                        }, 500);

                        d3.select('#dragable_div').transition()
                            .duration(500)
                            .style('top', top_in_container)
                            .style('left', left_in_container)
                            .remove();
                    }
                }
            }
            else {
                setTimeout(function () {
                    var index = d3.select('#dragable_div').attr('index');
                    d3.select('#fishplot_area' + index).attr('opacity', 1);
                }, 500);

                d3.select('#dragable_div').transition()
                    .duration(500)
                    .style('top', top_in_container)
                    .style('left', left_in_container)
                    .remove();

            }
            return;
        });

    //dirty fish to preventing blank mini fishplots
    d3.select('body')
        .on('mouseup', function () {
            for (var i = 0; i < cant_fit.length; i++) {
                d3.select('#big_fish' + cant_fit[i])
                    .attr('fill', canvas_nested_data[cant_fit[i]].color);
            }
            setTimeout(function () {
                d3.select('#dragable_div').remove();
                d3.selectAll('.fishplot_areas').attr('opacity', 1);
            }, 500);
        });

    d3.select(el).on('click', function () {
        contextMenuShowing = false;
        d3.select('#context-div').attr('cm-showing', 'false');
        d3.select('#context-div').style('opacity', 0)
            .style('z-index', -1);
    });

    //Save the current configuration of the fishplots
    var save_fishplot_div_height = 30;
    var save_fishplot_div_top = d3.select(el).node().clientHeight;
    var save_fishplot_top_padding = 0.10; //pad the top by 10 percent

    var save_fishplot_div_wrapper = d3.select('#figure6-wrapper')
        .append('div')
        .attr('id', 'save_fishplot_div_wrapper')
        .style('top', save_fishplot_div_top + 'px')
        .style('height', save_fishplot_div_height + 'px')
        .style('width', '100%')
        .style('float', 'left')
        .style('padding-top', function () {
            return (d3.select(this).node().clientHeight * save_fishplot_top_padding) + 'px';
        });

    var save_fishplot_div = save_fishplot_div_wrapper.append('div')
        .attr('id', 'save_fishplot_div')
        .style('top', '0px')
        .style('left', '0px')
        .style('width', '100%')
        .style('height', '100%')
        .style('float', 'right');

    var save_fishplot_button = save_fishplot_div.append('button')
        .attr('class', 'btn btn-default btn-sm')
        .attr('id', 'save_fishplot_button')
        .html('Save Fishplot')
        .on('click', function () {
            $("#save_fishplot_modal").modal('show');
        });

    //update the save_fishplot_div to move button to the right
    d3.select('#save_fishplot_div').style('left', function () {
        var button_width = d3.select('#save_fishplot_button').node().offsetWidth;
        button_width = button_width + parseInt(d3.select('#save_fishplot_button').style('padding-left')) * 2;
        button_width = button_width + parseInt(d3.select('#save_fishplot_button').style('padding-right')) * 2;
        var canvas_left = d3.select('#canvas_div').node().offsetLeft;
        var canvas_width = d3.select('#canvas_div').node().offsetWidth;
        var canvas_right = canvas_left + canvas_width;
        var new_div_left = canvas_right - button_width;
        return new_div_left + 'px';
    })
        .style('width', function () {
            var button_width = d3.select('#save_fishplot_button').node().offsetWidth;
            button_width = button_width + parseInt(d3.select('#save_fishplot_button').style('padding-left'));
            button_width = button_width + parseInt(d3.select('#save_fishplot_button').style('padding-right'));
            var margin = parseInt(d3.select('#save_fishplot_button').style('margin'));
            if (Number.isInteger(margin) == true) {
                button_width = button_width + margin;
            }

            return button_width + 'px';
        });

    function name_exists(name, names_array) {
        if (names_array.indexOf(name) == -1) {
            return false
        }
        else {
            return true;
        }
    }

    //Function to save the fishplot
    d3.select('#save_as_fishplot_button')
        .on('click', function () {
            var name = d3.select('#save_fishplot_as').node().value;
            var subject_id = scope.$parent.subject_id;
            var params_dict = {
                subject_id: subject_id,
                name: name,
                used_data_indices: fishplot_svgs,
                data: canvas_nested_data
            };


            if (fishplot_svgs.length < 1) {
                d3.select('#dialog-header')
                    .style('color', 'red');
                d3.select('#dialog-header').html('Error!');

                d3.select('#dialog-body').html('');
                d3.select('#dialog-body')
                    .append('p')
                    .html(function () {
                        return 'The fishplot <b>' + name + '</b> did not save. Nothing has been plotted.';
                    });

                $('#saved-fishplot-dialog-box').modal('show');
                return;
            }

            var exists = name_exists(name, scope.$parent.saved_fishplot_names);

            if (exists == true) {
                d3.select('#dialog-header')
                    .style('color', 'red');
                d3.select('#dialog-header').html('Error!');

                d3.select('#dialog-body').html('');
                d3.select('#dialog-body')
                    .append('p')
                    .html(function () {
                        return 'The fishplot <b>' + name + '</b> already exists. Please try another name.';
                    });

                $('#saved-fishplot-dialog-box').modal('show');
                return;
            }

            if (fishplot_svgs.length > 0 && exists == false) {
                $http({
                    url: '../data/save_fishplot/',
                    method: 'POST',
                    data: params_dict
                }).success(function () {
                    d3.select('#dialog-header')
                        .style('#ffffff');
                    d3.select('#dialog-header').html('Save Successful');

                    d3.select('#dialog-body').html('');
                    d3.select('#dialog-body')
                        .append('p')
                        .html(function () {
                            return 'The fishplot <b>' + name + '</b> was saved successfully.';
                        });

                    //update parent scope that holds the array of already used names
                    scope.$parent.saved_fishplot_names.push(name);

                    $('#saved-fishplot-dialog-box').modal('show');
                })
                    .error(function () {
                        d3.select('#dialog-header')
                            .style('color', 'red');
                        d3.select('#dialog-header').html('Error!');

                        d3.select('#dialog-body').html('');
                        d3.select('#dialog-body')
                            .append('p')
                            .html(function () {
                                return 'The fishplot <b>', +name + '</b> did not save.';
                            });

                        $('#saved-fishplot-dialog-box').modal('show');
                    });
            }

        });

    //Most of the code below pertains to the mini fishplot div information

    //Cog wheel glyph icon
    svgs.append('svg:image')
        .attr('x', mini_x_range_max * 0.01)
        .attr('y', mini_fishplot_container_height * 0.85)
        .attr('width', mini_fishplot_container_height * 0.15)
        .attr('height', mini_fishplot_container_height * 0.15)
        .attr('id', 'cog_wheel')
        .attr('cursor', 'pointer')
        .attr('xlink:href', 'https://cdn1.iconfinder.com/data/icons/trycons/32/settings-512.png')
        .on('click', function (d, i) {
            //return if the fishplot of this allele has already been plotted
            if (fishplot_svgs.indexOf(i) != -1) {
                return;
            }
            d3.select('#dragable_div').remove();
            var ploidy_num = d3.select('#ploidy_text' + i).node().innerHTML.split(' ')[1];
            d3.select('#ploidy_input').node().value = ploidy_num;
            d3.select('#ploidy_input').attr('fishplot_index', i);

            $("#exampleModal").modal('show');

        });

    svgs.append('svg:image')
        .attr('x', mini_x_range_max * 0.10)
        .attr('y', mini_fishplot_container_height * 0.85)
        .attr('width', mini_fishplot_container_height * 0.15)
        .attr('height', mini_fishplot_container_height * 0.14)
        .attr('id', 'infolight')
        .attr('cursor', 'pointer')
        .attr('index', function (d, i) {
            return i;
        })
        .attr('xlink:href',
            'https://cdn0.iconfinder.com/data/icons/seo-web-15/130/seo-social-web-network-internet_186-128.png')
        .on('click', function (d, i) {
            d3.select('#gene-info-table').remove();
            d3.select('#gene-info-modal-header-title').html('');
            d3.select('#gene-info-modal-header-title').html(d.values[0].allele + ' ' + 'Gene Information');

            var info = ['chromosome', 'position', 'type', 'cDNA', 'ref_seq', 'reference', 'alternative',
                'patients with gene'];
            var table_data = [];
            for (var i = 0; i < info.length; i++) {
                table_data.push({
                    name: info[i],
                    value: d[info[i]]
                });
            }


            var table = d3.select('#gene-info-modal-body').append('table')
                .attr('id', 'gene-info-table')
                .attr('class', 'table');

            var thead = table.append('thead').append('tr');
            thead.append('th').html('Parameter');
            thead.append('th').html('Value');

            var tbody = table.append('tbody').attr('id', 'tbody-gene-info-table');

            var rows = tbody.selectAll('gene-info')
                .data(table_data)
                .enter()
                .append('tr');

            rows.append('td')
                .html(function (d) {
                    return d.name;
                });

            rows.append('td')
                .html(function (d) {
                    return d.value;
                });

            $('#gene-info-modal').modal('show');

        });

    //Mini fishplot divs in scroll container
    svgs.append('path')
        .attr('id', function (d, i) {
            return 'fishplot_area' + i
        })
        .attr('fill', 'none')
        .attr('stroke-width', 5)
        .attr("stroke", "transparent")
        .style("stroke-linejoin", "round")
        .attr('d', function (d) {
            return top_line_gen(d.values);
        });

    svgs.append('path')
        .attr('id', function (d, i) {
            return 'fishplot_area' + i
        })
        .attr('fill', 'none')
        .attr("stroke", "transparent")
        .style("stroke-linejoin", "round")
        .attr('stroke-width', 8)
        .attr('d', function (d) {
            return bottom_line_gen(d.values);
        });

    //difference between edge of mini fishplot div, and where fishplot fill starts
    var left_adjustment = 0;


    svgs.append('path')
        .attr('id', function (d, i) {
            return 'fishplot_area' + i;
        })
        .attr('opacity', 1)
        .attr('fill', function (d) {
            return d.color;
        })
        .datum(function (d) {
            return d.values;
        })
        .attr('d', area_between_lines)
        .attr('class', 'fishplot_areas')
        .attr('cursor', 'pointer')
        .on('mousedown', function (d, i) {
            d3.event.preventDefault();
            d3.selectAll('.fishplot_areas').attr('opacity', 1);
            var div_id = '#mini_fishplot_div' + i;
            var svg_id = '#mini_fishplot_svg' + i;
            var mini_fishplot = d3.select(svg_id);

            //get svg info for clone
            var dragable_div_content = mini_fishplot.node().outerHTML;

            //Calculate top based on the top of the mini fishplot div and how far user scrolled
            top_in_container = parseInt(d3.select(div_id).style('top')) - d3.select('#container_div').node().scrollTop;
            top_in_container = top_in_container + 'px';
            left_in_container = d3.select(div_id).style('left');
            var width = d3.select(div_id).style('width');
            var height = d3.select(div_id).style('height');

            //remove any clones that are already layed down, if any at all
            //Some may be left behind if user moves mouse rapdily
            d3.selectAll('#dragable_div').remove();

            if (fishplot_svgs.indexOf(i) != -1) {
                return;
            }

            for (var j = 0; j < fishplot_svgs.length; j++) {
                var plotted_data = canvas_nested_data[fishplot_svgs[j]];
                var data = canvas_nested_data[i];
                var fit = can_fit(canvas_nested_data, plotted_data, data, num_of_timepoints);
                if (!fit) {
                    cant_fit.push(fishplot_svgs[j]);
                    d3.select('#big_fish' + plotted_data.index)
                        .attr('fill', '#262626');
                }
            }

            var dragable_div = dragable_div_wrapper.append('div')
                .style('top', top_in_container)
                .style('left', left_in_container)
                .style('width', width)
                .style('height', height)
                .style('position', 'absolute')
                .style('cursor', 'pointer')
                .html(dragable_div_content)
                .attr('index', i)
                .attr('z-index', 10)
                .attr('id', 'dragable_div');

            d3.select('#dragable_div').selectAll('.info_text').remove();
            d3.select('#dragable_div').selectAll('.info_lines').remove();

            //remove cog wheel
            d3.select('#dragable_div').select('#cog_wheel').remove();
            d3.select('#dragable_div').select('#infolight').remove();

            var bounding = d3.select('#fishplot_area' + i).node().getBoundingClientRect();
            left_adjustment = bounding.left - parseInt(left_in_container);

            if (navigator.userAgent.indexOf("Firefox") != -1) {
                old_x_pos = d3.event.pageX;
                old_y_pos = d3.event.pageY;
            }
            else {
                old_x_pos = d3.event.x;
                old_y_pos = d3.event.y;
            }

            dragging = true;
            d3.select(this).attr('opacity', 0);

            d3.select('#dragable_div').style('pointer-events', 'none')
            //give mouseup remove functionality
                .on('mouseup', function () {
                    d3.select(this).remove();
                });
            d3.select(el).style('cursor', 'pointer');

        });


    //Ploidy and Chrs Affected table configuration
    svgs.append('text')
        .attr('x', function (d, i) {
            //use jQuery again because d3.select().node().clientWidth doesnt work
            var center = $('#mini_fishplot_svg' + i).width() / 2;
            return center + 'px';
        })
        .attr('y', '155px')//if it were a formula this would be 15.5/16 using container height = 160
        .text(function (d) {
            return d.key;
        })
        .attr('font-size', '15px')
        .attr('text-anchor', 'middle')
        .attr('class', 'noselect info_text');

    svgs.append('text')
        .attr('x', function (d, i) {
            //use jQuery again because d3.select().node().clientWidth doesnt work in Firefox
            var center = $('#mini_fishplot_svg' + i).width() / 3;
            center = center * 0.5; //cut in half, then cut in half again
            return center + 'px';
        })
        .attr('y', '15px')
        .text(function () {
            return 'Chrs Affected: ' + 'N/A';
        })
        .attr('font-size', '12px')
        .attr('text-anchor', 'middle')
        .attr('id', function (d, i) {
            return 'chrs_aff_text' + i;
        })
        .attr('class', 'noselect info_text');

    svgs.append('text')
        .attr('x', function (d, i) {
            //use jQuery again because d3.select().node().clientWidth doesnt work in Firefox
            var center = $('#mini_fishplot_svg' + i).width() / 3;
            center = center * 1.5; //cut in half, then cut in half again
            return center + 'px';
        })
        .attr('y', '15px')
        .text(function (d) {
            return 'Chr: ' + d.chromosome;
        })
        .attr('font-size', '12px')
        .attr('text-anchor', 'middle')
        .attr('id', function (d, i) {
            return 'chr' + i;
        })
        .attr('class', 'noselect info_text');

    svgs.append('text')
        .attr('font-size', '12px')
        .attr('text-anchor', 'middle')
        .attr('id', function (d, i) {
            return 'ploidy_text' + i;
        })
        .attr('class', 'noselect info_text')
        .attr('x', function (d, i) {
            //use jQuery again because d3.select().node().clientWidth doesnt work in Firefox
            var center = $('#mini_fishplot_svg' + i).width() / 3;
            center = center * 2.5; //cut in half, then cut in half again
            return center + 'px';
        })
        .attr('y', '15px')
        .text(function (d) {
            if (d.chromosome == 'X' || d.chromosome == 'Y') {
                return 'Ploidy: ' + 1;
            }
            return 'Ploidy: ' + 2; //Will put variable for Ploidy eventually
        });

    //update the ploidy after the user saves the changes
    d3.select('#save_button')
        .on('click', function () {
            var index = d3.select('#ploidy_input').attr('fishplot_index');
            var value = d3.select('#ploidy_input').node().valueAsNumber;
            canvas_nested_data[index].ploidy = value;
        });

    //The code commented out below is for boxing in the chromosome/CN/ploidy text

/*
    svgs.append('line')
        .attr('x1', '0px')
        .attr('x2', function (d, i) {
            return d3.select('#mini_fishplot_svg' + i).node().clientWidth;
        })
        .attr('y1', '20px')
        .attr('y2', '20px')
        .attr('fill', 'none')
        .attr('stroke', '#000000')
        .attr('class', 'info_lines');

    svgs.append('line')
        .attr('x1', function (d, i) {
            return d3.select('#mini_fishplot_svg' + i).node().clientWidth / 3;
        })
        .attr('x2', function (d, i) {
            return d3.select('#mini_fishplot_svg' + i).node().clientWidth / 3;
        })
        .attr('y1', '0px')
        .attr('y2', '20px')
        .attr('stroke', '#000000')
        .attr('class', 'info_lines');

    svgs.append('line')
        .attr('x1', function (d, i) {
            return (d3.select('#mini_fishplot_svg' + i).node().clientWidth / 3) * 2;
        })
        .attr('x2', function (d, i) {
            return (d3.select('#mini_fishplot_svg' + i).node().clientWidth / 3) * 2;
        })
        .attr('y1', '0px')
        .attr('y2', '20px')
        .attr('stroke', '#000000')
        .attr('class', 'info_lines');
*/


    //Function for removing fishplot svgs from plot
    //Removes the data from the fishplot_svgs array, which prevents them from being plotted
    function remove_fishplot_relationships(current_fish, fishplot_svgs, canvas_nested_data) {
        var children = current_fish.children;
        var index = current_fish.index;

        if (current_fish.parent_index_of_this != 'plot') {
            var parent_index = current_fish.parent_index_of_this;
            for (var i = 0; i < current_fish.values.length; i++) {
                delete current_fish.values[i].ccf;
            }
            var parent = canvas_nested_data[parent_index];
            var child_index = parent.children.indexOf(index);
            if (child_index > -1) {
                parent.children.splice(child_index, 1);
            }
            parent.children.sort(function (a, b) {
                return canvas_nested_data[a].start_point
                    - canvas_nested_data[b].start_point;
            });
        }
        if (children.length > 0) {
            for (var i = 0; i < children.length; i++) {
                index = canvas_nested_data[children[i]].index;
                d3.select('#mini_fishplot_div' + index).style('opacity', 1);
                var index_in_fishplot_svgs = fishplot_svgs.indexOf(index);
                if (index_in_fishplot_svgs > -1) {
                    fishplot_svgs.splice(index_in_fishplot_svgs, 1);
                }
                if (canvas_nested_data[children[i]].children.length > 0) {
                    remove_fishplot_relationships(canvas_nested_data[children[i]], fishplot_svgs, canvas_nested_data);
                }
            }
        }
        current_fish.children = [];
    }

    var rmv_fishplot_btn = d3.select('#rmv-fishplot-btn').on('click', function () {
        d3.select('#context-div').style('opacity', 0).attr('cm-showing', 'false');
        var index = parseInt(d3.select(this).attr('fish-index'));
        var current_fish = canvas_nested_data[index];

        if (current_fish.parent_index_of_this == 'plot') {
            var group_index = parseInt(current_fish.group);
            group_index = groups.indexOf(group_index);
            if (group_index > -1) {
                groups.splice(group_index, 1);
            }

            var plot_background_group = current_fish.group.toString();
            delete plot_background.groups[plot_background_group];

            var child_index = plot_background.children.indexOf(index);
            if (child_index > -1) {
                plot_background.children.splice(child_index, 1);
            }
            var nested_data = canvas_nested_data.slice(0);
            max_VAF_value = should_update_vaf_scale(plot_background, nested_data, current_fish, true);
            canvas_y_scale.domain([max_VAF_value + 1, -1]);
            if (max_VAF_value > plot_background.values[0].alt_count) {
                update_plot_background_values(plot_background, max_VAF_value);
            }
        }

        d3.select('#mini_fishplot_div' + index).style('opacity', 1);
        var index_in_fishplot_svgs = fishplot_svgs.indexOf(index);
        if (index_in_fishplot_svgs > -1) {
            fishplot_svgs.splice(index_in_fishplot_svgs, 1);
        }

        remove_fishplot_relationships(current_fish, fishplot_svgs, canvas_nested_data);
        scope.$apply(function () {
            scope.$parent.plotted = fishplot_svgs;
        });

        nested_data = canvas_nested_data.slice(0);

        //Create shallow copy for values of each fishplot used
        //Prevents find_origin function from permanently trimming allele values
        update_canvas_nested_data(canvas_nested_data, fishplot_svgs);

        for (var i = 0; i < plot_background.children.length; i++) {
            var parent = nested_data[plot_background.children[i]];
            var start_point = parent.start_point;
            nested_data[plot_background.children[i]] = parent_border_collision_detection(parent, start_point, 0, max_VAF_value, 'alt_count');
        }

        adjust_independent_evolution_positions(nested_data, plot_background, num_of_timepoints, 'alt_count', max_VAF_value);

        //Retain a complete nested data, that doesnt affect canvas_nested_data, to be used when
        //determining CCF solutions
        var complete_nested_data = canvas_nested_data.slice(0);

        nested_data = reconstruct_data(nested_data, fishplot_svgs);

        //collision detection for children after adjusting the independent evolution positions
        nested_data = adjust_children_positioning(nested_data, num_of_timepoints, 'alt_count');

        //load pinches
        //Have to use fishplot svgs to select specific indices of nested_data
        //Otherwise, we prematurely clip off the origin of fishplots starting after
        //The first timepoint (i.e. Pretreatment in example file)
        for (var i = 0; i < fishplot_svgs.length; i++) {
            var current_allele = nested_data[i];
            for (var j = 0; j < current_allele.values.length; j++) {
                //Initialize all pinches to false
                //Pinch will only be true if the "origin" timepoint is not the subclones actual origin
                current_allele.values[j].pinch = false;
            }
            current_allele.values = find_origin(current_allele);
        }

        remove_unnecessary_values(nested_data);

        d3.selectAll('.big_fish').remove();


        for (var i = 0; i < nested_data.length; i++) {
            var current_data = nested_data[i];

            canvas_svg.append('path')
                .attr('fill', 'none')
                .attr('stroke-width', 5)
                .attr("stroke", "transparent")
                .attr('class', 'big_fish')
                .style("stroke-linejoin", "round")
                .attr('d', function () {
                    return canvas_top_line_gen(current_data.values);
                });

            canvas_svg.append('path')
                .attr('fill', 'none')
                .attr("stroke", "transparent")
                .style("stroke-linejoin", "round")
                .attr('class', 'big_fish')
                .attr('stroke-width', 8)
                .attr('d', function () {
                    return canvas_bottom_line_gen(current_data.values);
                });

            canvas_svg.append('path')
                .datum(current_data.values)
                .attr('fill', current_data.color)
                .attr('opacity', 1)
                .attr('class', 'big_fish dropdown-toggle')
                .attr('d', canvas_area_between_lines)
                .attr('index', current_data.index)
                .attr('id', 'big_fish' + current_data.index)
                .style('cursor', 'pointer')
                .on('mouseenter', function (d) {
                    moused_over = parseInt(d3.select(this).attr('index'));
                })
                .on('mouseover', function () {
                    moused_over = parseInt(d3.select(this).attr('index'));
                })
                .on('mouseleave', function () {
                    d3.select(this).attr('opacity', 1);
                })
                .on('contextmenu', function () {
                    contextMenuFor = parseInt(d3.select(this).attr('index'));

                    //give the button an attribute to reference the fishplots they're dealing with
                    //now we can invoke a function on click
                    d3.select('#edit-ploidy-btn').attr('fish-index', contextMenuFor);
                    d3.select('#rmv-fishplot-btn').attr('fish-index', contextMenuFor);

                    if (contextMenuFor != contextMenuForPrevious || d3.select('#context-div').attr('cm-showing') == 'false') {
                        contextMenuShowing = false;
                    }
                    if (contextMenuShowing == false) {
                        contextMenuForPrevious = contextMenuFor;
                        d3.event.preventDefault();
                        d3.select('#context-div').attr('cm-showing', 'true');
                        contextMenuShowing = true;
                        d3.select('#context-div').style('left', function () {
                            var left = d3.event.pageX;
                            return left + 'px';
                        })
                            .style('top', function () {
                                //-75 pixels because of navbar padding
                                var top = d3.event.pageY - 75;
                                return top + 'px';
                            })
                            .style('z-index', 10)
                            .style('opacity', 1);
                    }
                    else {
                        d3.event.preventDefault();
                        contextMenuShowing = false;
                        d3.select('#context-div').attr('cm-showing', 'false');
                        d3.select('#context-div').style('opacity', 0)
                            .style('z-index', -1);
                    }
                });
        }

        CCF_options = {};
        load_CCF_options(CCF_options, sample_timepoints);


    });

    function alleles_in_CCF_options(keys) {
        var alleles = [];
        for (var i = 0; i < keys.length; i++) {
            if (keys[i].includes('_chrs')) {
                continue;
            }
            else {
                alleles.push(keys[i]);
            }
        }
        return alleles;
    }


    d3.select('#save-CCF-button')
        .on('click', function () {
            if (d3.select('#selected-tr').node() != null && d3.select('#selected-tr').attr('is-selected') != 0) {
                var data = d3.select('#selected-tr').node()['__data__'];
                var keys = Object.keys(data);
                var alleles = alleles_in_CCF_options(keys);
                update_variant_info(data, alleles, canvas_nested_data);
            }
        });

    d3.select('#save-CCF-button-reprompt')
        .attr('last-prompt', false)
        .on('click', function () {
            if (d3.select('#selected-tr').node() != null && d3.select('#selected-tr').attr('is-selected') != 0) {
                var data = d3.select('#selected-tr').node()['__data__'];
                var keys = Object.keys(data);
                var alleles = alleles_in_CCF_options(keys);
                update_variant_info(data, alleles, canvas_nested_data);
                var index = parseInt(d3.select(this).attr('index'));
                var last_prompt = d3.select(this).attr('last-prompt');
                if (last_prompt == 'false' || last_prompt == false) {
                    var index = index + 1;
                }
                var complete_nested_data = canvas_nested_data.slice(0);
                var type = d3.select(this).attr('type');
                d3.select(this).attr('from-button', true);

                reprompt(sample_timepoints, tick_labels, canvas_nested_data, ten_percent_below_zero,
                    complete_nested_data, plot_background, allele_color_reference, fishplot_svgs, index,
                    canvas_top_line_gen, canvas_bottom_line_gen, canvas_area_between_lines, moused_over, contextMenuFor,
                    contextMenuShowing, contextMenuForPrevious, type, canvas_svg, num_of_timepoints, max_VAF_value);
            }
        });

    var load_fishplot_div = d3.select('#save_fishplot_div_wrapper').append('div')
        .attr('id', 'load_fishplot_div')
        .style('top', '0px')
        .style('height', '100%')
        .style('float', 'right');

    load_fishplot_div.append('button')
        .attr('id', 'load_fishplot_button')
        .attr('class', 'btn btn-default btn-sm')
        .html('Load fishplot')
        .on('click', function () {
            var subject_id = scope.$parent.subject_id;

            d3.select('#get-fishplot-modal-body').html('');

            $http.get('../api/v1/saved_fishplot_subject_ids/').success(function (data) {
                data = $filter('filter')(data, {'subject_id': subject_id})[0];

                d3.select('#get-fishplot-modal-body').html('');
                d3.select('#get_fishplot_button').html('Choose');

                if (data != undefined) {
                    //save data to figure6 scope, so we can access it once the user chooses it
                    data = data.saved_as;
                    scope.loaded_data = data;

                    //get all of the options (names they were saved as), and put in a select dropdown
                    var select = d3.select('#get-fishplot-modal-body').append('select')
                        .attr('id', 'select-list')
                        .attr('class', 'form-control');

                    var placeholder = select.append('option')
                        .append('attr', 'selected')
                        .append('attr', 'disabled')
                        .html('Select a fishplot');

                    var options = select.selectAll('saved_names')
                        .data(data)
                        .enter()
                        .append('option')
                        .html(function (d) {
                            return d.name;
                        });

                    $('#get_fishplot_modal').modal('show');
                }
                else {
                    d3.select('#get_fishplot_button').html('Okay');
                    d3.select('#get-fishplot-modal-body')
                        .append('p')
                        .html('There are no recorded fishplots for this patient.');

                    $('#get_fishplot_modal').modal('show');
                }
            });
        });

    d3.select('#get_fishplot_button')
        .on('click', function () {
            var name = $('#select-list').val();
            var subject_fishplots = scope.loaded_data;
            var fishplot_data = null;
            for (var i = 0; i < subject_fishplots.length; i++) {
                if (subject_fishplots[i].name == name) {
                    fishplot_data = subject_fishplots[i];
                    if (fishplot_data.data[0].parent_index_of_this != "plot") {
                        fishplot_data.data = fishplot_data.data.reverse();
                    }
                    if (parseInt(fishplot_data.data[0].timepoint_data[0].Sample_Barcode) >= 0 || fishplot_data.data[0].timepoint_data[0].Sample_Barcode != 'origin') {
                        for (var j = 0; j < fishplot_data.data.length; j++) {
                            fishplot_data.data[j].timepoint_data.sort(function(a, b){
                               if(parseInt(a.Sample_Barcode) > parseInt(b.Sample_Barcode)){
                                   return 1;
                               }
                               if(parseInt(a.Sample_Barcode) < parseInt(b.Sample_Barcode)){
                                   return -1;
                               }
                            });
                        }

                    }
                }
            }
            if (fishplot_data == null) {
                return;
            }
            fishplot_svgs = [];
            groups = [];
            plot_background.groups = {};
            plot_background.children = [];
            d3.selectAll('.mini_fishplot_divs').style('opacity', 1);

            for (var i = 0; i < fishplot_data.data.length; i++) {
                fishplot_svgs.unshift(parseInt(fishplot_data.data[i].index));
                d3.select('#mini_fishplot_div' + fishplot_data.data[i].index).style('opacity', 0.35);
                var current_fish = canvas_nested_data[fishplot_data.data[i].index];
                var mini_current_fish = mini_nested_data[fishplot_data.data[i].index];
                current_fish.children = [];
                current_fish.group = fishplot_data.data[i].group;
                current_fish.ploidy = fishplot_data.data[i].ploidy;
                mini_current_fish.ploidy = fishplot_data.data[i].ploidy;
                current_fish.start_point = fishplot_data.data[i].start_point;
                current_fish.chrs_affected = fishplot_data.data[i].chrs_affected;
                mini_current_fish.chrs_affected = fishplot_data.data[i].chrs_affected;

                //Re-do top and bottom based on start position from mousedown
                for (var j = 0; j < current_fish.values.length; j++) {
                    current_fish.values[j].alt_count = fishplot_data.data[i].timepoint_data[j].alt_count;
                    mini_current_fish.values[j].alt_count = fishplot_data.data[i].timepoint_data[j].alt_count;
                    current_fish.values[j].top = fishplot_data.data[i].timepoint_data[j].top;
                    current_fish.values[j].bottom = fishplot_data.data[i].timepoint_data[j].bottom;
                }
                if (fishplot_data.data[i].parent_index_of_this != 'plot') {
                    current_fish.parent_index_of_this = parseInt(fishplot_data.data[i].parent_index_of_this);
                    canvas_nested_data[parseInt(fishplot_data.data[i].parent_index_of_this)].children.push(fishplot_data.data[i].index);
                }
                if (fishplot_data.data[i].parent_index_of_this == 'plot' || fishplot_data.data[i].parent_index_of_this == 'none') {
                    groups.push(fishplot_data.data[i].group);
                    plot_background.groups[fishplot_data.data[i].group.toString()] = fishplot_data.data[i].index;
                    plot_background.children.push(fishplot_data.data[i].index);
                    current_fish.parent_index_of_this = "plot";
                }
                canvas_nested_data[fishplot_data.data[i].index] = JSON.parse(JSON.stringify(current_fish));

            }

            fishplot_svgs.reverse();
            scope.$apply(function () {
                scope.$parent.plotted = fishplot_svgs;
                scope.$parent.updated_editor_info = mini_nested_data;
                scope.$parent.loaded_fishplot_data = canvas_nested_data;
            });

            var temp_nested_data = JSON.parse(JSON.stringify(canvas_nested_data));
            var nested_data = nested_data = JSON.parse(JSON.stringify(canvas_nested_data));

            max_VAF_value = should_update_vaf_scale(plot_background, temp_nested_data, data, false);
            canvas_y_scale.domain([max_VAF_value + 1, -1]);
            if (max_VAF_value > plot_background.values[0].alt_count) {
                update_plot_background_values(plot_background, max_VAF_value);
            }

            plot_background.children.sort(function (a, b) {
                return nested_data[a].start_point - nested_data[b].start_point;
            });

            //Create shallow copy for values of each fishplot used
            //Prevents find_origin function from permanently trimming allele values
            update_canvas_nested_data(canvas_nested_data, fishplot_svgs);

            for (var i = 0; i < plot_background.children.length; i++) {
                var parent = nested_data[plot_background.children[i]];
                var start_point = parent.start_point;
                nested_data[plot_background.children[i]] = parent_border_collision_detection(parent, start_point, 0, max_VAF_value, 'alt_count');
            }

            adjust_independent_evolution_positions(nested_data, plot_background, num_of_timepoints, 'alt_count', max_VAF_value);
            set_new_start_point(canvas_nested_data, nested_data, fishplot_svgs, parent.children);

            //Retain a complete nested data, that doesnt affect canvas_nested_data, to be used when
            //determining CCF solutions
            var complete_nested_data = canvas_nested_data.slice(0);

            nested_data = reconstruct_data(nested_data, fishplot_svgs);

            //collision detection for children after adjusting the independent evolution positions
            nested_data = adjust_children_positioning(nested_data, num_of_timepoints, 'alt_count');

            //load pinches
            //Have to use fishplot svgs to select specific indices of nested_data
            //Otherwise, we prematurely clip off the origin of fishplots starting after
            //The first timepoint (i.e. Pretreatment in example file)
            for (var i = 0; i < fishplot_svgs.length; i++) {
                var current_allele = nested_data[i];
                for (var j = 0; j < current_allele.values.length; j++) {
                    //Initialize all pinches to false
                    //Pinch will only be true if the "origin" timepoint is not the subclones actual origin
                    current_allele.values[j].pinch = false;
                }
                current_allele.values = find_origin(current_allele);
            }

            remove_unnecessary_values(nested_data);

            d3.selectAll('.big_fish').remove();

            for (var i = 0; i < nested_data.length; i++) {
                var current_data = nested_data[i];

                canvas_svg.append('path')
                    .attr('fill', 'none')
                    .attr('stroke-width', 5)
                    .attr("stroke", "transparent")
                    .attr('class', 'big_fish')
                    .style("stroke-linejoin", "round")
                    .attr('d', function () {
                        return canvas_top_line_gen(current_data.values);
                    });

                canvas_svg.append('path')
                    .attr('fill', 'none')
                    .attr("stroke", "transparent")
                    .style("stroke-linejoin", "round")
                    .attr('class', 'big_fish')
                    .attr('stroke-width', 8)
                    .attr('d', function () {
                        return canvas_bottom_line_gen(current_data.values);
                    });

                canvas_svg.append('path')
                    .datum(current_data.values)
                    .attr('fill', current_data.color)
                    .attr('opacity', 1)
                    .attr('class', 'big_fish dropdown-toggle')
                    .attr('d', canvas_area_between_lines)
                    .attr('index', current_data.index)
                    .attr('id', 'big_fish' + current_data.index)
                    .style('cursor', 'pointer')
                    .on('mouseenter', function (d) {
                        moused_over = parseInt(d3.select(this).attr('index'));
                    })
                    .on('mouseover', function () {
                        moused_over = parseInt(d3.select(this).attr('index'));
                    })
                    .on('mouseleave', function () {
                        d3.select(this).attr('opacity', 1);
                    })
                    .on('contextmenu', function () {
                        contextMenuFor = parseInt(d3.select(this).attr('index'));

                        //give the button an attribute to reference the fishplots they're dealing with
                        //now we can invoke a function on click
                        d3.select('#edit-ploidy-btn').attr('fish-index', contextMenuFor);
                        d3.select('#rmv-fishplot-btn').attr('fish-index', contextMenuFor);

                        if (contextMenuFor != contextMenuForPrevious || d3.select('#context-div').attr('cm-showing') == 'false') {
                            contextMenuShowing = false;
                        }
                        if (contextMenuShowing == false) {
                            contextMenuForPrevious = contextMenuFor;
                            d3.event.preventDefault();
                            d3.select('#context-div').attr('cm-showing', 'true');
                            contextMenuShowing = true;
                            d3.select('#context-div').style('left', function () {
                                var left = d3.event.pageX;
                                return left + 'px';
                            })
                                .style('top', function () {
                                    //-75 pixels because of navbar padding
                                    var top = d3.event.pageY - 75;
                                    return top + 'px';
                                })
                                .style('z-index', 10)
                                .style('opacity', 1);
                        }
                        else {
                            d3.event.preventDefault();
                            contextMenuShowing = false;
                            d3.select('#context-div').attr('cm-showing', 'false');
                            d3.select('#context-div').style('opacity', 0)
                                .style('z-index', -1);
                        }
                    });
            }
        });

    //update the save_fishplot_div to move button to the right
    d3.select('#load_fishplot_div').style('left', function () {
        var button_width = d3.select('#load_fishplot_button').node().offsetWidth;
        button_width = button_width + parseInt(d3.select('#load_fishplot_button').style('padding-left')) * 2;
        button_width = button_width + parseInt(d3.select('#load_fishplot_button').style('padding-right')) * 2;

        var save_fishplot_div_left = parseInt(d3.select('#save_fishplot_div').style('left'));
        var new_div_left = save_fishplot_div_left - 85; //pad 85px
        new_div_left = new_div_left - button_width;

        return new_div_left + 'px';
    })
        .style('width', function () {
            var button_width = d3.select('#load_fishplot_button').node().offsetWidth;
            button_width = button_width + parseInt(d3.select('#load_fishplot_button').style('padding-left'));
            button_width = button_width + parseInt(d3.select('#load_fishplot_button').style('padding-right'));
            var margin = parseInt(d3.select('#load_fishplot_button').style('margin'));
            if (Number.isInteger(margin) == true) {
                button_width = button_width + margin;
            }
            return button_width + 'px';
        });

    var convert_to_ccf_div = d3.select('#save_fishplot_div_wrapper').append('div')
        .attr('id', 'convert_to_ccf_div')
        .style('top', '0px')
        .style('height', '100%')
        .style('float', 'right');

    var plot_options_div_group = convert_to_ccf_div.append('div')
        .attr('class', 'btn-group dropup')
        .style('width', '100px');

    var plot_options_button = plot_options_div_group.append('button')
        .attr('id', 'plot_options_button')
        .attr('class', 'btn btn-default btn-sm dropdown-toggle')
        .attr('data-toggle', 'dropdown')
        .html('Plot options');

    var button_group = plot_options_div_group.append('ul')
        .attr('class', 'dropdown-menu');

    var convert_to_ccf_button = button_group.append('li')
        .append('a')
        .style('cursor', 'pointer')
        .html('CCF (Total Sample)')
        .on('click', function () {
            var can_plot = can_plot_CCF(canvas_nested_data, fishplot_svgs);
            if (can_plot == false) {
                var complete_nested_data = canvas_nested_data.slice(0);
                d3.select('#modal_table').remove();
                d3.select('#save-CCF-button-reprompt').attr('type', 'ccf');

                reprompt(sample_timepoints, tick_labels, canvas_nested_data, ten_percent_below_zero,
                    complete_nested_data, plot_background, allele_color_reference, fishplot_svgs, 0,
                    canvas_top_line_gen, canvas_bottom_line_gen, canvas_area_between_lines, moused_over, contextMenuFor,
                    contextMenuShowing, contextMenuForPrevious, 'ccf', canvas_svg, num_of_timepoints, 100);
            }

            if (can_plot) {
                canvas_svg.html('');
                canvas_y_scale.domain([101, -1]);
                var purity = get_purity_dict(tick_labels);
                set_up_ccf_boundries(canvas_nested_data, fishplot_svgs, 'ccf');

                var nested_data = canvas_nested_data.slice(0);

                //Create shallow copy for values of each fishplot used
                //Prevents find_origin function from permanently trimming allele values
                update_canvas_nested_data(canvas_nested_data, fishplot_svgs);

                for (var i = 0; i < plot_background.children.length; i++) {
                    var parent = nested_data[plot_background.children[i]];
                    var start_point = parent.start_point;
                    nested_data[plot_background.children[i]] = parent_border_collision_detection(parent, start_point, 0, 100, 'ccf');
                }

                adjust_independent_evolution_positions(nested_data, plot_background, num_of_timepoints, 'ccf', 100);

                nested_data = reconstruct_data(nested_data, fishplot_svgs);

                //collision detection for children after adjusting the independent evolution positions
                nested_data = adjust_children_positioning(nested_data, num_of_timepoints, 'ccf');

                //load pinches
                //Have to use fishplot svgs to select specific indices of nested_data
                //Otherwise, we prematurely clip off the origin of fishplots starting after
                //The first timepoint (i.e. Pretreatment in example file)
                for (var i = 0; i < fishplot_svgs.length; i++) {
                    var current_allele = nested_data[i];
                    for (var j = 0; j < current_allele.values.length; j++) {
                        //Initialize all pinches to false
                        //Pinch will only be true if the "origin" timepoint is not the subclones actual origin
                        current_allele.values[j].pinch = false;
                    }
                    current_allele.values = find_origin(current_allele);
                }

                remove_unnecessary_values(nested_data);

                d3.selectAll('.big_fish').remove();


                for (var i = 0; i < nested_data.length; i++) {
                    var current_data = nested_data[i];

                    canvas_svg.append('path')
                        .attr('fill', 'none')
                        .attr('stroke-width', 5)
                        .attr("stroke", "transparent")
                        .attr('class', 'big_fish')
                        .style("stroke-linejoin", "round")
                        .attr('d', function () {
                            return canvas_top_line_gen(current_data.values);
                        });

                    canvas_svg.append('path')
                        .attr('fill', 'none')
                        .attr("stroke", "transparent")
                        .style("stroke-linejoin", "round")
                        .attr('class', 'big_fish')
                        .attr('stroke-width', 8)
                        .attr('d', function () {
                            return canvas_bottom_line_gen(current_data.values);
                        });

                    canvas_svg.append('path')
                        .datum(current_data.values)
                        .attr('fill', current_data.color)
                        .attr('opacity', 1)
                        .attr('class', 'big_fish dropdown-toggle')
                        .attr('d', canvas_area_between_lines)
                        .attr('index', current_data.index)
                        .attr('id', 'big_fish' + current_data.index)
                        .style('cursor', 'pointer')
                        .on('mouseenter', function (d) {
                            moused_over = parseInt(d3.select(this).attr('index'));
                        })
                        .on('mouseover', function () {
                            moused_over = parseInt(d3.select(this).attr('index'));
                        })
                        .on('mouseleave', function () {
                            d3.select(this).attr('opacity', 1);
                        })
                        .on('contextmenu', function () {
                            contextMenuFor = parseInt(d3.select(this).attr('index'));

                            //give the button an attribute to reference the fishplots they're dealing with
                            //now we can invoke a function on click
                            d3.select('#edit-ploidy-btn').attr('fish-index', contextMenuFor);
                            d3.select('#rmv-fishplot-btn').attr('fish-index', contextMenuFor);

                            if (contextMenuFor != contextMenuForPrevious || d3.select('#context-div').attr('cm-showing') == 'false') {
                                contextMenuShowing = false;
                            }
                            if (contextMenuShowing == false) {
                                contextMenuForPrevious = contextMenuFor;
                                d3.event.preventDefault();
                                d3.select('#context-div').attr('cm-showing', 'true');
                                contextMenuShowing = true;
                                d3.select('#context-div').style('left', function () {
                                    var left = d3.event.pageX;
                                    return left + 'px';
                                })
                                    .style('top', function () {
                                        //-75 pixels because of navbar padding
                                        var top = d3.event.pageY - 75;
                                        return top + 'px';
                                    })
                                    .style('z-index', 10)
                                    .style('opacity', 1);
                            }
                            else {
                                d3.event.preventDefault();
                                contextMenuShowing = false;
                                d3.select('#context-div').attr('cm-showing', 'false');
                                d3.select('#context-div').style('opacity', 0)
                                    .style('z-index', -1);
                            }
                        });
                }
                canvas_svg.append("svg:g")
                    .attr("class", "axis noselect")
                    .attr('id', 'editor_x_axis')
                    .attr("transform", "translate(0," + canvas_range_max_y + ")")
                    .call(canvas_x_axis);

            }

        });

    var convert_only_CCF = button_group.append('li')
        .append('a')
        .style('cursor', 'pointer')
        .html('CCF (Cancer Cells Only)')
        .on('click', function () {
            var purity = get_purity_dict(tick_labels);
            relative_to_cancer_cells(canvas_nested_data, fishplot_svgs, purity, tick_labels);

            var can_plot = can_plot_CCF(canvas_nested_data, fishplot_svgs);
            if (can_plot == false) {
                var complete_nested_data = canvas_nested_data.slice(0);
                d3.select('#modal_table').remove();

                d3.select('#save-CCF-button-reprompt').attr('type', 'only_cancer_ccf');
                reprompt(sample_timepoints, tick_labels, canvas_nested_data, ten_percent_below_zero,
                    complete_nested_data, plot_background, allele_color_reference, fishplot_svgs, 0,
                    canvas_top_line_gen, canvas_bottom_line_gen, canvas_area_between_lines, moused_over, contextMenuFor,
                    contextMenuShowing, contextMenuForPrevious, 'only_cancer_ccf', canvas_svg, num_of_timepoints, 100,
                    canvas_range_max_y, canvas_x_axis);
            }
            if (can_plot) {
                canvas_svg.html('');
                canvas_y_scale.domain([101, -1]);
                var purity = get_purity_dict(tick_labels);
                set_up_ccf_boundries(canvas_nested_data, fishplot_svgs, 'only_cancer_ccf');

                var nested_data = canvas_nested_data.slice(0);

                //Create shallow copy for values of each fishplot used
                //Prevents find_origin function from permanently trimming allele values
                update_canvas_nested_data(canvas_nested_data, fishplot_svgs);

                for (var i = 0; i < plot_background.children.length; i++) {
                    var parent = nested_data[plot_background.children[i]];
                    var start_point = parent.start_point;
                    nested_data[plot_background.children[i]] = parent_border_collision_detection(parent, start_point, 0, 100, 'only_cancer_ccf');
                }

                adjust_independent_evolution_positions(nested_data, plot_background, num_of_timepoints, 'only_cancer_ccf', 100);

                nested_data = reconstruct_data(nested_data, fishplot_svgs);

                //collision detection for children after adjusting the independent evolution positions
                nested_data = adjust_children_positioning(nested_data, num_of_timepoints, 'only_cancer_ccf');

                //load pinches
                //Have to use fishplot svgs to select specific indices of nested_data
                //Otherwise, we prematurely clip off the origin of fishplots starting after
                //The first timepoint (i.e. Pretreatment in example file)
                for (var i = 0; i < fishplot_svgs.length; i++) {
                    var current_allele = nested_data[i];
                    for (var j = 0; j < current_allele.values.length; j++) {
                        //Initialize all pinches to false
                        //Pinch will only be true if the "origin" timepoint is not the subclones actual origin
                        current_allele.values[j].pinch = false;
                    }
                    current_allele.values = find_origin(current_allele);
                }

                remove_unnecessary_values(nested_data);

                d3.selectAll('.big_fish').remove();


                for (var i = 0; i < nested_data.length; i++) {
                    var current_data = nested_data[i];

                    canvas_svg.append('path')
                        .attr('fill', 'none')
                        .attr('stroke-width', 5)
                        .attr("stroke", "transparent")
                        .attr('class', 'big_fish')
                        .style("stroke-linejoin", "round")
                        .attr('d', function () {
                            return canvas_top_line_gen(current_data.values);
                        });

                    canvas_svg.append('path')
                        .attr('fill', 'none')
                        .attr("stroke", "transparent")
                        .style("stroke-linejoin", "round")
                        .attr('class', 'big_fish')
                        .attr('stroke-width', 8)
                        .attr('d', function () {
                            return canvas_bottom_line_gen(current_data.values);
                        });

                    canvas_svg.append('path')
                        .datum(current_data.values)
                        .attr('fill', current_data.color)
                        .attr('opacity', 1)
                        .attr('class', 'big_fish dropdown-toggle')
                        .attr('d', canvas_area_between_lines)
                        .attr('index', current_data.index)
                        .attr('id', 'big_fish' + current_data.index)
                        .style('cursor', 'pointer')
                        .on('mouseenter', function (d) {
                            moused_over = parseInt(d3.select(this).attr('index'));
                        })
                        .on('mouseover', function () {
                            moused_over = parseInt(d3.select(this).attr('index'));
                        })
                        .on('mouseleave', function () {
                            d3.select(this).attr('opacity', 1);
                        })
                        .on('contextmenu', function () {
                            contextMenuFor = parseInt(d3.select(this).attr('index'));

                            //give the button an attribute to reference the fishplots they're dealing with
                            //now we can invoke a function on click
                            d3.select('#edit-ploidy-btn').attr('fish-index', contextMenuFor);
                            d3.select('#rmv-fishplot-btn').attr('fish-index', contextMenuFor);

                            if (contextMenuFor != contextMenuForPrevious || d3.select('#context-div').attr('cm-showing') == 'false') {
                                contextMenuShowing = false;
                            }
                            if (contextMenuShowing == false) {
                                contextMenuForPrevious = contextMenuFor;
                                d3.event.preventDefault();
                                d3.select('#context-div').attr('cm-showing', 'true');
                                contextMenuShowing = true;
                                d3.select('#context-div').style('left', function () {
                                    var left = d3.event.pageX;
                                    return left + 'px';
                                })
                                    .style('top', function () {
                                        //-75 pixels because of navbar padding
                                        var top = d3.event.pageY - 75;
                                        return top + 'px';
                                    })
                                    .style('z-index', 10)
                                    .style('opacity', 1);
                            }
                            else {
                                d3.event.preventDefault();
                                contextMenuShowing = false;
                                d3.select('#context-div').attr('cm-showing', 'false');
                                d3.select('#context-div').style('opacity', 0)
                                    .style('z-index', -1);
                            }
                        });
                }
                canvas_svg.append("svg:g")
                    .attr("class", "axis noselect")
                    .attr('id', 'editor_x_axis')
                    .attr("transform", "translate(0," + canvas_range_max_y + ")")
                    .call(canvas_x_axis);
            }
        });

    var reset_CCF = button_group.append('li')
        .append('a')
        .style('cursor', 'pointer')
        .html('Reset CCF')
        .on('click', function () {
            for (var i = 0; i < canvas_nested_data.length; i++) {
                var allele_values = canvas_nested_data[i].values;
                for (var j = 0; j < allele_values.length; j++) {
                    allele_values[j].ccf = undefined;
                }
            }

            fishplot_plot(canvas_svg, tick_labels, canvas_nested_data, fishplot_svgs, plot_background, num_of_timepoints,
                canvas_top_line_gen, canvas_bottom_line_gen, canvas_area_between_lines, moused_over, contextMenuFor, contextMenuShowing,
                contextMenuForPrevious, 'alt_count', allele_color_reference, max_VAF_value, canvas_range_max_y, canvas_x_axis);
        });

    var back_to_VAF = button_group.append('li')
        .append('a')
        .style('cursor', 'pointer')
        .html('VAF')
        .on('click', function () {

            var nested_data = canvas_nested_data.slice(0);

            //Create shallow copy for values of each fishplot used
            //Prevents find_origin function from permanently trimming allele values
            update_canvas_nested_data(canvas_nested_data, fishplot_svgs);

            for (var i = 0; i < plot_background.children.length; i++) {
                var parent = nested_data[plot_background.children[i]];
                var start_point = parent.start_point;
                nested_data[plot_background.children[i]] = parent_border_collision_detection(parent, start_point, 0, max_VAF_value, 'alt_count');
            }

            adjust_independent_evolution_positions(nested_data, plot_background, num_of_timepoints, 'alt_count', max_VAF_value);

            nested_data = reconstruct_data(nested_data, fishplot_svgs);

            //collision detection for children after adjusting the independent evolution positions
            nested_data = adjust_children_positioning(nested_data, num_of_timepoints, 'alt_count');

            //load pinches
            //Have to use fishplot svgs to select specific indices of nested_data
            //Otherwise, we prematurely clip off the origin of fishplots starting after
            //The first timepoint (i.e. Pretreatment in example file)
            for (var i = 0; i < fishplot_svgs.length; i++) {
                var current_allele = nested_data[i];
                for (var j = 0; j < current_allele.values.length; j++) {
                    //Initialize all pinches to false
                    //Pinch will only be true if the "origin" timepoint is not the subclones actual origin
                    current_allele.values[j].pinch = false;
                }
                current_allele.values = find_origin(current_allele);
            }

            remove_unnecessary_values(nested_data);

            d3.selectAll('.big_fish').remove();


            for (var i = 0; i < nested_data.length; i++) {
                var current_data = nested_data[i];

                canvas_svg.append('path')
                    .attr('fill', 'none')
                    .attr('stroke-width', 5)
                    .attr("stroke", "transparent")
                    .attr('class', 'big_fish')
                    .style("stroke-linejoin", "round")
                    .attr('d', function () {
                        return canvas_top_line_gen(current_data.values);
                    });

                canvas_svg.append('path')
                    .attr('fill', 'none')
                    .attr("stroke", "transparent")
                    .style("stroke-linejoin", "round")
                    .attr('class', 'big_fish')
                    .attr('stroke-width', 8)
                    .attr('d', function () {
                        return canvas_bottom_line_gen(current_data.values);
                    });

                canvas_svg.append('path')
                    .datum(current_data.values)
                    .attr('fill', current_data.color)
                    .attr('opacity', 1)
                    .attr('class', 'big_fish dropdown-toggle')
                    .attr('d', canvas_area_between_lines)
                    .attr('index', current_data.index)
                    .attr('id', 'big_fish' + current_data.index)
                    .style('cursor', 'pointer')
                    .on('mouseenter', function (d) {
                        moused_over = parseInt(d3.select(this).attr('index'));
                    })
                    .on('mouseover', function () {
                        moused_over = parseInt(d3.select(this).attr('index'));
                    })
                    .on('mouseleave', function () {
                        d3.select(this).attr('opacity', 1);
                    })
                    .on('contextmenu', function () {
                        contextMenuFor = parseInt(d3.select(this).attr('index'));

                        //give the button an attribute to reference the fishplots they're dealing with
                        //now we can invoke a function on click
                        d3.select('#edit-ploidy-btn').attr('fish-index', contextMenuFor);
                        d3.select('#rmv-fishplot-btn').attr('fish-index', contextMenuFor);

                        if (contextMenuFor != contextMenuForPrevious || d3.select('#context-div').attr('cm-showing') == 'false') {
                            contextMenuShowing = false;
                        }
                        if (contextMenuShowing == false) {
                            contextMenuForPrevious = contextMenuFor;
                            d3.event.preventDefault();
                            d3.select('#context-div').attr('cm-showing', 'true');
                            contextMenuShowing = true;
                            d3.select('#context-div').style('left', function () {
                                var left = d3.event.pageX;
                                return left + 'px';
                            })
                                .style('top', function () {
                                    //-75 pixels because of navbar padding
                                    var top = d3.event.pageY - 75;
                                    return top + 'px';
                                })
                                .style('z-index', 10)
                                .style('opacity', 1);
                        }
                        else {
                            d3.event.preventDefault();
                            contextMenuShowing = false;
                            d3.select('#context-div').attr('cm-showing', 'false');
                            d3.select('#context-div').style('opacity', 0)
                                .style('z-index', -1);
                        }
                    });
            }

        });

    var reset_plot_button = button_group.append('li')
        .append('a')
        .style('cursor', 'pointer')
        .html('Clear plot')
        .on('click', function () {
            var clones = [];
            for (var i = 0; i < plot_background.children.length; i++) {
                clones.push(canvas_nested_data[plot_background.children[i]]);
            }
            for (var i = 0; i < clones.length; i++) {
                var current_fish = clones[i];
                var index = current_fish.index;
                if (current_fish.parent_index_of_this == 'plot') {
                    var group_index = parseInt(current_fish.group);
                    group_index = groups.indexOf(group_index);
                    if (group_index > -1) {
                        groups.splice(group_index, 1);
                    }

                    var plot_background_group = current_fish.group.toString();
                    delete plot_background.groups[plot_background_group];

                    var child_index = plot_background.children.indexOf(index);
                    if (child_index > -1) {
                        plot_background.children.splice(child_index, 1);
                    }
                }

                d3.select('#mini_fishplot_div' + index).style('opacity', 1);
                var index_in_fishplot_svgs = fishplot_svgs.indexOf(index);
                if (index_in_fishplot_svgs > -1) {
                    fishplot_svgs.splice(index_in_fishplot_svgs, 1);
                }
                remove_fishplot_relationships(current_fish, fishplot_svgs, canvas_nested_data);

                plot_background.children.shift();

                scope.$apply(function () {
                    scope.$parent.plotted = fishplot_svgs;
                });
            }
            d3.selectAll('.big_fish').remove();
            d3.selectAll('.mini_fishplot_divs').style('opacity', 1);
        });

    d3.select('#convert_to_ccf_div').style('left', function () {
        var button_width = d3.select('#plot_options_button').node().offsetWidth;
        button_width = button_width + parseInt(d3.select('#plot_options_button').style('padding-left')) * 2;
        button_width = button_width + parseInt(d3.select('#plot_options_button').style('padding-right')) * 2;

        var load_fishplot_div_left = parseInt(d3.select('#load_fishplot_div').style('left'));
        var load_fishplot_div_width = parseInt(d3.select('#load_fishplot_div').style('width'));
        var new_div_left = load_fishplot_div_left - 85; //pad 85px
        new_div_left = new_div_left - button_width;
        return new_div_left + 'px';
    })
        .style('width', function () {
            var button_width = d3.select('#plot_options_button').node().offsetWidth;
            button_width = button_width + parseInt(d3.select('#plot_options_button').style('padding-left'));
            button_width = button_width + parseInt(d3.select('#plot_options_button').style('padding-right'));
            var margin = parseInt(d3.select('#plot_options_button').style('margin'));
            if (Number.isInteger(margin) == true) {
                button_width = button_width + margin;
            }
            return button_width + 'px';
        });

    var edit_purity_div = d3.select('#save_fishplot_div_wrapper').append('div')
        .attr('id', 'edit_purity_div')
        .style('top', '0px')
        .style('height', '100%')
        .style('float', 'right');

    var edit_purity_button = edit_purity_div.append('button')
        .attr('class', 'btn btn-default btn-sm')
        .attr('id', 'edit_purity_button')
        .html('Edit Purity')
        .on('click', function () {
            $("#purityModal").modal('show');
        });

    var labels = d3.select('#purityForm')
        .selectAll('inputs')
        .data(tick_labels)
        .enter()
        .append('div')
        .append('label')
        .attr('class', 'control-label')
        .attr('for', function (d, i) {
            return 'day' + d.toString() + '_input';
        })
        .html(function (d) {
            return 'Day ' + d.toString() + ': ';
        })
        .append('input')
        .style('width', '150px')
        .attr('type', 'number')
        .attr('min', '0')
        .attr('max', '100')
        .attr('class', 'form-control')
        .attr('id', function (d, i) {
            return 'day' + d.toString() + '_input';
        })
        .attr('value', 90);

    d3.select('#save_purity_button')
        .on('click', function () {
            var purity_dict = {};
            for (var i = 0; i < tick_labels.length; i++) {

                var purity_value = parseInt(d3.select('#day' + tick_labels[i].toString() + '_input').node().value);
                if (purity_value > 100) {
                    purity_value = 100;
                }
                if (purity_value < 0) {
                    purity_value = 0;
                }
                purity_dict[tick_labels[i].toString()] = purity_value;
            }

            scope.$apply(function () {
                scope.$parent.purity_data = purity_dict;
            });

            if (plot_background.children.length > 1) {

                d3.select('#modal_table').remove();

                var complete_nested_data = canvas_nested_data.slice(0);
                d3.select('#modal_table').remove();
                d3.select('#save-CCF-button-reprompt').attr('type', 'ccf');

                canvas_y_scale.domain([101, -1]);

                reprompt(sample_timepoints, tick_labels, canvas_nested_data, ten_percent_below_zero,
                    complete_nested_data, plot_background, allele_color_reference, fishplot_svgs, 0,
                    canvas_top_line_gen, canvas_bottom_line_gen, canvas_area_between_lines, moused_over, contextMenuFor,
                    contextMenuShowing, contextMenuForPrevious, 'ccf', canvas_svg, num_of_timepoints, 100,
                    canvas_range_max_y,
                      canvas_x_axis);
            }

        });

    //update the save_fishplot_div to move button to the right
    d3.select('#edit_purity_div').style('left', function () {
        var button_width = d3.select('#edit_purity_button').node().offsetWidth;
        button_width = button_width + parseInt(d3.select('#edit_purity_button').style('padding-left')) * 2;
        button_width = button_width + parseInt(d3.select('#edit_purity_button').style('padding-right')) * 2;

        var save_fishplot_div_left = parseInt(d3.select('#convert_to_ccf_div').style('left'));
        var new_div_left = save_fishplot_div_left - 75; //pad 75px
        new_div_left = new_div_left - button_width;
        return new_div_left + 'px';
    })
        .style('width', function () {
            var button_width = d3.select('#edit_purity_button').node().offsetWidth;
            button_width = button_width + parseInt(d3.select('#edit_purity_button').style('padding-left'));
            button_width = button_width + parseInt(d3.select('#edit_purity_button').style('padding-right'));
            var margin = parseInt(d3.select('#edit_purity_button').style('margin'));
            if (Number.isInteger(margin) == true) {
                button_width = button_width + margin;
            }
            return button_width + 'px';
        });

    scope.$watch('values', function (new_values) {
        //if 3 parameters sent through, it came from fishplot table
        if (new_values.length == 3) {
            var allele = new_values[0];
            var timepoint = new_values[1];
            if (!isNaN(parseInt(timepoint))) {
                timepoint = parseInt(timepoint);
            }
            var vaf = new_values[2];

            var index = allele_index(canvas_nested_data, allele);
            from_table_update_nested_data(canvas_nested_data, mini_nested_data, allele, timepoint, vaf);
        }

        //else it's updated mini fishplot data from loading saved fishplot
        if (new_values.length == 1) {
            mini_nested_data = new_values;
        }

        var temp_y_max = y_scale_domain_max(mini_nested_data);
        if (temp_y_max > y_max) {
            y_max = temp_y_max;
            mini_y_scale.domain([y_max + 1, -1]);
            generate_mini_fishplot_top_and_bottom(mini_nested_data, y_max);

            mini_fishplot_data = JSON.parse(JSON.stringify(mini_nested_data));
            pinch_data(mini_fishplot_data);
            remove_unnecessary_values(mini_fishplot_data);

            d3.selectAll('.fishplot_areas').remove();

            //Mini fishplot divs in scroll container
            svgs.append('path')
                .attr('id', function (d, i) {
                    return 'fishplot_area' + i
                })
                .attr('class', 'fishplot_areas')
                .attr('fill', 'none')
                .attr('stroke-width', 5)
                .attr("stroke", "transparent")
                .style("stroke-linejoin", "round")
                .attr('d', function (d, i) {
                    return top_line_gen(mini_fishplot_data[i].values);
                });

            svgs.append('path')
                .attr('id', function (d, i) {
                    return 'fishplot_area' + i
                })
                .attr('class', 'fishplot_areas')
                .attr('fill', 'none')
                .attr("stroke", "transparent")
                .style("stroke-linejoin", "round")
                .attr('stroke-width', 8)
                .attr('d', function (d, i) {
                    return bottom_line_gen(mini_fishplot_data[i].values);
                });

            //difference between edge of mini fishplot div, and where fishplot fill starts
            var left_adjustment = 0;


            svgs.append('path')
                .attr('id', function (d, i) {
                    return 'fishplot_area' + i
                })
                .attr('opacity', 1)
                .attr('fill', function (d) {
                    return d.color;
                })
                .datum(function (d, i) {
                    return mini_fishplot_data[i].values;
                })
                .attr('d', area_between_lines)
                .attr('cursor', 'pointer')
                .attr('class', 'fishplot_areas')
                .on('mousedown', function (d, i) {
                    d3.event.preventDefault();
                    d3.selectAll('.fishplot_areas').attr('opacity', 1);
                    var div_id = '#mini_fishplot_div' + i;
                    var svg_id = '#mini_fishplot_svg' + i;
                    var mini_fishplot = d3.select(svg_id);

                    //get svg info for clone
                    var dragable_div_content = mini_fishplot.node().outerHTML;

                    //Calculate top based on the top of the mini fishplot div and how far user scrolled
                    top_in_container = parseInt(d3.select(div_id).style('top')) - d3.select('#container_div').node().scrollTop;
                    top_in_container = top_in_container + 'px';
                    left_in_container = d3.select(div_id).style('left');
                    var width = d3.select(div_id).style('width');
                    var height = d3.select(div_id).style('height');

                    //remove any clones that are already layed down, if any at all
                    //Some may be left behind if user moves mouse rapdily
                    d3.selectAll('#dragable_div').remove();

                    if (fishplot_svgs.indexOf(i) != -1) {
                        return;
                    }

                    for (var j = 0; j < fishplot_svgs.length; j++) {
                        var plotted_data = canvas_nested_data[fishplot_svgs[j]];
                        var data = canvas_nested_data[i];
                        var fit = can_fit(canvas_nested_data, plotted_data, data, num_of_timepoints);
                        if (!fit) {
                            cant_fit.push(fishplot_svgs[j]);
                            d3.select('#big_fish' + plotted_data.index)
                                .attr('fill', '#262626');
                        }
                    }

                    var dragable_div = dragable_div_wrapper.append('div')
                        .style('top', top_in_container)
                        .style('left', left_in_container)
                        .style('width', width)
                        .style('height', height)
                        .style('position', 'absolute')
                        .style('cursor', 'pointer')
                        .html(dragable_div_content)
                        .attr('index', i)
                        .attr('z-index', 10)
                        .attr('id', 'dragable_div');

                    d3.select('#dragable_div').selectAll('.info_text').remove();
                    d3.select('#dragable_div').selectAll('.info_lines').remove();

                    //remove cog wheel
                    d3.select('#dragable_div').select('#cog_wheel').remove();
                    d3.select('#dragable_div').select('#infolight').remove();

                    var bounding = d3.select('#fishplot_area' + i).node().getBoundingClientRect();
                    left_adjustment = bounding.left - parseInt(left_in_container);

                    if (navigator.userAgent.indexOf("Firefox") != -1) {
                        old_x_pos = d3.event.pageX;
                        old_y_pos = d3.event.pageY;
                    }
                    else {
                        old_x_pos = d3.event.x;
                        old_y_pos = d3.event.y;
                    }

                    dragging = true;
                    d3.select(this).attr('opacity', 0);

                    d3.select('#dragable_div').style('pointer-events', 'none')
                    //give mouseup remove functionality
                        .on('mouseup', function () {
                            d3.select(this).remove();
                        });
                    d3.select(el).style('cursor', 'pointer');

                });

        }
        else {
            var temp_svg = d3.select('#mini_fishplot_svg' + index);
            d3.selectAll('#fishplot_area' + index).remove();

            mini_fishplot_data = JSON.parse(JSON.stringify(mini_nested_data));
            pinch_data(mini_fishplot_data);
            remove_unnecessary_values(mini_fishplot_data);
            var temp_nested_data = mini_fishplot_data[index];
            generate_mini_fishplot_top_and_bottom([temp_nested_data], y_max);

            temp_svg.append('path')
                .attr('id', 'fishplot_area' + index)
                .attr('class', 'fishplot_areas')
                .attr('fill', 'none')
                .attr('stroke-width', 5)
                .attr("stroke", "transparent")
                .style("stroke-linejoin", "round")
                .attr('d', top_line_gen(temp_nested_data.values));

            temp_svg.append('path')
                .attr('id', 'fishplot_area' + index)
                .attr('class', 'fishplot_areas')
                .attr('fill', 'none')
                .attr("stroke", "transparent")
                .style("stroke-linejoin", "round")
                .attr('stroke-width', 8)
                .attr('d', bottom_line_gen(temp_nested_data.values));

            //difference between edge of mini fishplot div, and where fishplot fill starts
            var left_adjustment = 0;


            temp_svg.append('path')
                .attr('id', 'fishplot_area' + index)
                .attr('opacity', 1)
                .attr('fill', temp_nested_data.color)
                .datum(function () {
                    return temp_nested_data.values;
                })
                .attr('d', area_between_lines)
                .attr('cursor', 'pointer')
                .attr('class', 'fishplot_areas')
                .on('mousedown', function () {
                    d3.event.preventDefault();
                    var i = index;
                    d3.selectAll('.fishplot_areas').attr('opacity', 1);
                    var div_id = '#mini_fishplot_div' + i;
                    var svg_id = '#mini_fishplot_svg' + i;
                    var mini_fishplot = d3.select(svg_id);

                    //get svg info for clone
                    var dragable_div_content = mini_fishplot.node().outerHTML;

                    //Calculate top based on the top of the mini fishplot div and how far user scrolled
                    top_in_container = parseInt(d3.select(div_id).style('top')) - d3.select('#container_div').node().scrollTop;
                    top_in_container = top_in_container + 'px';
                    left_in_container = d3.select(div_id).style('left');
                    var width = d3.select(div_id).style('width');
                    var height = d3.select(div_id).style('height');

                    //remove any clones that are already layed down, if any at all
                    //Some may be left behind if user moves mouse rapdily
                    d3.selectAll('#dragable_div').remove();

                    if (fishplot_svgs.indexOf(i) != -1) {
                        return;
                    }

                    for (var j = 0; j < fishplot_svgs.length; j++) {
                        var plotted_data = canvas_nested_data[fishplot_svgs[j]];
                        var data = canvas_nested_data[i];
                        var fit = can_fit(canvas_nested_data, plotted_data, data, num_of_timepoints);
                        if (!fit) {
                            cant_fit.push(fishplot_svgs[j]);
                            d3.select('#big_fish' + plotted_data.index)
                                .attr('fill', '#262626');
                        }
                    }

                    var dragable_div = dragable_div_wrapper.append('div')
                        .style('top', top_in_container)
                        .style('left', left_in_container)
                        .style('width', width)
                        .style('height', height)
                        .style('position', 'absolute')
                        .style('cursor', 'pointer')
                        .html(dragable_div_content)
                        .attr('index', i)
                        .attr('z-index', 10)
                        .attr('id', 'dragable_div');

                    d3.select('#dragable_div').selectAll('.info_text').remove();
                    d3.select('#dragable_div').selectAll('.info_lines').remove();

                    //remove cog wheel
                    d3.select('#dragable_div').select('#cog_wheel').remove();
                    d3.select('#dragable_div').select('#infolight').remove();

                    var bounding = d3.select('#fishplot_area' + i).node().getBoundingClientRect();
                    left_adjustment = bounding.left - parseInt(left_in_container);

                    if (navigator.userAgent.indexOf("Firefox") != -1) {
                        old_x_pos = d3.event.pageX;
                        old_y_pos = d3.event.pageY;
                    }
                    else {
                        old_x_pos = d3.event.x;
                        old_y_pos = d3.event.y;
                    }

                    dragging = true;
                    d3.select(this).attr('opacity', 0);

                    d3.select('#dragable_div').style('pointer-events', 'none')
                    //give mouseup remove functionality
                        .on('mouseup', function () {
                            d3.select(this).remove();
                        });
                    d3.select(el).style('cursor', 'pointer');

                });

        }

    });

    function allele_index(nested_data, allele) {
        for (var i = 0; i < nested_data.length; i++) {
            if (nested_data[i].key == allele) {
                return i;
            }
        }
    }

    function from_table_update_nested_data(canvas_nested_data, mini_nested_data, allele, timepoint, vaf) {
        for (var i = 0; i < canvas_nested_data.length; i++) {
            if (canvas_nested_data[i].key == allele) {
                var canvas_data = canvas_nested_data[i];
                var mini_data = mini_nested_data[i];
                for (var j = 0; j < canvas_data.values.length; j++) {
                    if (canvas_data.values[j].Sample_Barcode == timepoint) {
                        canvas_data.values[j].alt_count = vaf;
                        mini_data.values[j].alt_count = vaf;
                        break;
                    }
                }
                break;
            }
        }
    }

    canvas_svg.append("svg:g")
        .attr("class", "axis noselect")
        .attr('id', 'editor_x_axis')
        .attr("transform", "translate(0," + canvas_range_max_y + ")")
        .call(canvas_x_axis);

    function resize_mini_fishplots(new_width) {
        d3.selectAll('.mini_fishplots').remove();

        mini_x_range_max = 0.25 * new_width;
        y_max = y_scale_domain_max(mini_nested_data);
        generate_mini_fishplot_top_and_bottom(mini_nested_data, y_max);

        mini_fishplot_data = JSON.parse(JSON.stringify(mini_nested_data));
        pinch_data(mini_fishplot_data);
        remove_unnecessary_values(mini_fishplot_data);

        mini_x_scale = d3.scale.linear().rangeRound([0, mini_x_range_max], 0.5)
        mini_x_scale = d3.scale.linear().rangeRound([0, mini_x_range_max], 0.5)
            .domain(d3.extent(x_axis_labels, function (d) {
                return d;
            }));

        mini_y_scale = d3.scale.linear().range([20, 140]).domain([y_max + 1, -1]);

        for (var i = 0; i < mini_nested_data.length; i++) {
            var div = d3.select('#mini_fishplot_div' + i);
            div.style('width', 0.25 * new_width);
            div.append('svg')
                .attr('width', '100%')
                .attr('height', '100%')
                .attr('class', 'mini_fishplots')
                .attr('opacity', 1)
                .attr('id', function () {
                    return 'mini_fishplot_svg' + i;
                });

            d3.select('#mini_fishplot_svg' + i).append('svg:image')
                .attr('x', mini_x_range_max * 0.01)
                .attr('y', mini_fishplot_container_height * 0.85)
                .attr('width', mini_fishplot_container_height * 0.15)
                .attr('height', mini_fishplot_container_height * 0.15)
                .attr('id', 'cog_wheel')
                .attr('cursor', 'pointer')
                .attr('index', function () {
                    return i;
                })
                .attr('xlink:href', 'https://cdn1.iconfinder.com/data/icons/trycons/32/settings-512.png')
                .on('click', function () {
                    var index = d3.select(this).attr('index');
                    //return if the fishplot of this allele has already been plotted
                    if (fishplot_svgs.indexOf(index) != -1) {
                        return;
                    }
                    d3.select('#dragable_div').remove();
                    var ploidy_num = d3.select('#ploidy_text' + index).node().innerHTML.split(' ')[1];
                    d3.select('#ploidy_input').node().value = ploidy_num;
                    d3.select('#ploidy_input').attr('fishplot_index', index);

                    $("#exampleModal").modal('show');

                });

            d3.select('#mini_fishplot_svg' + i).append('svg:image')
                .attr('x', mini_x_range_max * 0.10)
                .attr('y', mini_fishplot_container_height * 0.85)
                .attr('width', mini_fishplot_container_height * 0.15)
                .attr('height', mini_fishplot_container_height * 0.14)
                .attr('id', 'infolight')
                .attr('cursor', 'pointer')
                .attr('index', function () {
                    return i;
                })
                .attr('xlink:href',
                    'https://cdn0.iconfinder.com/data/icons/seo-web-15/130/seo-social-web-network-internet_186-128.png')
                .on('click', function () {
                    var index = d3.select(this).attr('index');
                    d3.select('#gene-info-table').remove();
                    d3.select('#gene-info-modal-header-title').html('');
                    d3.select('#gene-info-modal-header-title').html(mini_nested_data[index].values[0].allele + ' ' + 'Gene Information');

                    var info = ['chromosome', 'position', 'type', 'cDNA', 'ref_seq', 'reference', 'alternative',
                        'patients with gene'];
                    var table_data = [];
                    for (var j = 0; j < info.length; j++) {
                        table_data.push({
                            name: info[j],
                            value: mini_nested_data[index][info[j]]
                        });
                    }


                    var table = d3.select('#gene-info-modal-body').append('table')
                        .attr('id', 'gene-info-table')
                        .attr('class', 'table');

                    var thead = table.append('thead').append('tr');
                    thead.append('th').html('Parameter');
                    thead.append('th').html('Value');

                    var tbody = table.append('tbody').attr('id', 'tbody-gene-info-table');

                    var rows = tbody.selectAll('gene-info')
                        .data(table_data)
                        .enter()
                        .append('tr');

                    rows.append('td')
                        .html(function (d) {
                            return d.name;
                        });

                    rows.append('td')
                        .html(function (d) {
                            return d.value;
                        });

                    $('#gene-info-modal').modal('show');

                });

            d3.select('#mini_fishplot_svg' + i).append('path')
                .attr('id', function () {
                    return 'fishplot_area' + i
                })
                .attr('fill', 'none')
                .attr('stroke-width', 5)
                .attr("stroke", "transparent")
                .style("stroke-linejoin", "round")
                .attr('d', function () {
                    return top_line_gen(mini_fishplot_data[i].values);
                });

            d3.select('#mini_fishplot_svg' + i).append('path')
                .attr('id', function () {
                    return 'fishplot_area' + i
                })
                .attr('fill', 'none')
                .attr("stroke", "transparent")
                .style("stroke-linejoin", "round")
                .attr('stroke-width', 8)
                .attr('d', function () {
                    return bottom_line_gen(mini_fishplot_data[i].values);
                });

            d3.select('#mini_fishplot_svg' + i).append('path')
                .attr('id', function () {
                    return 'fishplot_area' + i;
                })
                .attr('opacity', 1)
                .attr('fill', function () {
                    return mini_fishplot_data[i].color;
                })
                .datum(function () {
                    return mini_fishplot_data[i].values;
                })
                .attr('d', area_between_lines)
                .attr('cursor', 'pointer')
                .attr('class', 'fishplot_areas')
                .attr('index', function () {
                    return i;
                })
                .on('mousedown', function () {
                    d3.event.preventDefault();
                    var index = d3.select(this).attr('index');
                    d3.selectAll('.fishplot_areas').attr('opacity', 1);
                    var div_id = '#mini_fishplot_div' + index;
                    var svg_id = '#mini_fishplot_svg' + index;
                    var mini_fishplot = d3.select(svg_id);

                    //get svg info for clone
                    var dragable_div_content = mini_fishplot.node().outerHTML;

                    //Calculate top based on the top of the mini fishplot div and how far user scrolled
                    top_in_container = parseInt(d3.select(div_id).style('top')) - d3.select('#container_div').node().scrollTop;
                    top_in_container = top_in_container + 'px';
                    left_in_container = d3.select(div_id).style('left');
                    var width = d3.select(div_id).style('width');
                    var height = d3.select(div_id).style('height');

                    //remove any clones that are already layed down, if any at all
                    //Some may be left behind if user moves mouse rapdily
                    d3.selectAll('#dragable_div').remove();

                    if (fishplot_svgs.indexOf(index) != -1) {
                        return;
                    }

                    for (var j = 0; j < fishplot_svgs.length; j++) {
                        var plotted_data = canvas_nested_data[fishplot_svgs[j]];
                        var data = canvas_nested_data[index];
                        var fit = can_fit(canvas_nested_data, plotted_data, data, num_of_timepoints);
                        if (!fit) {
                            cant_fit.push(fishplot_svgs[j]);
                            d3.select('#big_fish' + plotted_data.index)
                                .attr('fill', '#262626');
                        }
                    }

                    var dragable_div = dragable_div_wrapper.append('div')
                        .style('top', top_in_container)
                        .style('left', left_in_container)
                        .style('width', width)
                        .style('height', height)
                        .style('position', 'absolute')
                        .style('cursor', 'pointer')
                        .html(dragable_div_content)
                        .attr('index', index)
                        .attr('z-index', 10)
                        .attr('id', 'dragable_div');

                    d3.select('#dragable_div').selectAll('.info_text').remove();
                    d3.select('#dragable_div').selectAll('.info_lines').remove();

                    //remove cog wheel
                    d3.select('#dragable_div').select('#cog_wheel').remove();
                    d3.select('#dragable_div').select('#infolight').remove();

                    var bounding = d3.select('#fishplot_area' + index).node().getBoundingClientRect();
                    left_adjustment = bounding.left - parseInt(left_in_container);

                    if (navigator.userAgent.indexOf("Firefox") != -1) {
                        old_x_pos = d3.event.pageX;
                        old_y_pos = d3.event.pageY;
                    }
                    else {
                        old_x_pos = d3.event.x;
                        old_y_pos = d3.event.y;
                    }

                    dragging = true;
                    d3.select(this).attr('opacity', 0);

                    d3.select('#dragable_div').style('pointer-events', 'none')
                    //give mouseup remove functionality
                        .on('mouseup', function () {
                            d3.select(this).remove();
                        });
                    d3.select(el).style('cursor', 'pointer');

                });

            //Ploidy and Chrs Affected table configuration
            d3.select('#mini_fishplot_svg' + i).append('text')
                .attr('x', function () {
                    //use jQuery again because d3.select().node().clientWidth doesnt work in Firefox
                    var center = $('#mini_fishplot_svg' + i).width() / 2;
                    return center + 'px';
                })
                .attr('y', '155px')//if it were a formula this would be 15.5/16 using container height = 160
                .text(function () {
                    return mini_nested_data[i].key;
                })
                .attr('font-size', '15px')
                .attr('text-anchor', 'middle')
                .attr('class', 'noselect info_text');

            d3.select('#mini_fishplot_svg' + i).append('text')
                .attr('x', function () {
                    //use jQuery again because d3.select().node().clientWidth doesnt work in Firefox
                    var center = $('#mini_fishplot_svg' + i).width() / 3;
                    center = center * 0.5; //cut in half, then cut in half again
                    return center + 'px';
                })
                .attr('y', '15px')
                .text(function () {
                    return 'Chrs Affected: ' + 'N/A';
                })
                .attr('font-size', '12px')
                .attr('text-anchor', 'middle')
                .attr('id', function () {
                    return 'chrs_aff_text' + i;
                })
                .attr('class', 'noselect info_text');

            d3.select('#mini_fishplot_svg' + i).append('text')
                .attr('x', function () {
                    //use jQuery again because d3.select().node().clientWidth doesnt work in Firefox
                    var center = $('#mini_fishplot_svg' + i).width() / 3;
                    center = center * 1.5; //cut in half, then cut in half again
                    return center + 'px';
                })
                .attr('y', '15px')
                .text(function () {
                    return 'Chr: ' + mini_nested_data[i].chromosome;
                })
                .attr('font-size', '12px')
                .attr('text-anchor', 'middle')
                .attr('id', function () {
                    return 'chr' + i;
                })
                .attr('class', 'noselect info_text');

            d3.select('#mini_fishplot_svg' + i).append('text')
                .attr('font-size', '12px')
                .attr('text-anchor', 'middle')
                .attr('id', function () {
                    return 'ploidy_text' + i;
                })
                .attr('class', 'noselect info_text')
                .attr('x', function () {
                    //use jQuery again because d3.select().node().clientWidth doesnt work in Firefox
                    var center = $('#mini_fishplot_svg' + i).width() / 3;
                    center = center * 2.5; //cut in half, then cut in half again
                    return center + 'px';
                })
                .attr('y', '15px')
                .text(function () {
                    if (mini_nested_data[i].chromosome == 'X' || mini_nested_data[i].chromosome == 'Y') {
                        return 'Ploidy: ' + 1;
                    }
                    return 'Ploidy: ' + 2; //Will put variable for Ploidy eventually
                });

/*
            d3.select('#mini_fishplot_svg' + i).append('line')
                .attr('x1', '0px')
                .attr('x2', function () {
                    return d3.select('#mini_fishplot_svg' + i).node().clientWidth;
                })
                .attr('y1', '20px')
                .attr('y2', '20px')
                .attr('fill', 'none')
                .attr('stroke', '#000000')
                .attr('class', 'info_lines');

            d3.select('#mini_fishplot_svg' + i).append('line')
                .attr('x1', function () {
                    return d3.select('#mini_fishplot_svg' + i).node().clientWidth / 3;
                })
                .attr('x2', function () {
                    return d3.select('#mini_fishplot_svg' + i).node().clientWidth / 3;
                })
                .attr('y1', '0px')
                .attr('y2', '20px')
                .attr('stroke', '#000000')
                .attr('class', 'info_lines');

            d3.select('#mini_fishplot_svg' + i).append('line')
                .attr('x1', function () {
                    return (d3.select('#mini_fishplot_svg' + i).node().clientWidth / 3) * 2;
                })
                .attr('x2', function () {
                    return (d3.select('#mini_fishplot_svg' + i).node().clientWidth / 3) * 2;
                })
                .attr('y1', '0px')
                .attr('y2', '20px')
                .attr('stroke', '#000000')
                .attr('class', 'info_lines');
*/

        }
    }

    $window.addEventListener('resize', resize_canvas);

    function resize_canvas() {
        d3.select('#canvas_div').selectAll('svg').remove();
        var new_width = d3.select(el).node().clientWidth;

        canvas_svg = canvas.append('svg')
            .attr('width', parseInt(new_width * 0.73))
            .attr('height', '100%')
            .attr('id', 'canvas_svg')
            .attr('index', 'canvas_svg')
            .on('mouseover', function () {
                if (dragging) {
                    moused_over = d3.select(this).attr('index');
                }
            });

        canvas_range_max_x = $('#canvas_svg').width();
        canvas_x_scale = d3.scale.linear()
            .rangeRound([canvas_range_max_x * 0.01, canvas_range_max_x * 0.99], 0.25)
            .domain(d3.extent(x_axis_labels, function (d) {
                return d;
            }));
        canvas_x_axis = d3.svg.axis().scale(canvas_x_scale).tickValues(tick_labels);

        canvas_range_max_y = $('#canvas_svg').height() * 0.95;
        canvas_y_scale = d3.scale.linear().range([0, canvas_range_max_y]).domain([max_VAF_value, -1]);

        minimum_left_pos = parseInt(new_width * 0.27) - 2;
        minimum_left_pos = Math.floor(minimum_left_pos);


        //Right now type is alt_count... will need to account for resize when CCF plotted
        fishplot_plot(canvas_svg, tick_labels, canvas_nested_data, fishplot_svgs, plot_background, num_of_timepoints,
            canvas_top_line_gen, canvas_bottom_line_gen, canvas_area_between_lines, moused_over, contextMenuFor, contextMenuShowing,
            contextMenuForPrevious, 'alt_count', allele_color_reference, max_VAF_value, canvas_range_max_y, canvas_x_axis);

        resize_mini_fishplots(new_width);

        canvas_svg.append("svg:g")
            .attr("class", "axis noselect")
            .attr('id', 'editor_x_axis')
            .attr("transform", "translate(0," + canvas_range_max_y + ")")
            .call(canvas_x_axis);
    }

}