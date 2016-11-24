/**
 * Created by jakeconway on 11/24/16.
 */
function makePurityLinePlot(updated_data, el, height, width) {
    d3.select(el).selectAll('div').remove();
    var data = updated_data;

    var timepoints = Object.keys(data);
    timepoints = timepoints.map(Number);
    if (timepoints.length == 0) {
        return;
    }
    if (timepoints.length == 1) {
        d3.select(el).remove();
        return;
    }

    //Div to hold purity line plot svg... placed over editor div
    var canvas = d3.select(el).append('div')
        .style('top', 0 + 'px')
        .style('left', width * 0.27 + 'px')
        .style('width', '73%')
        .style('height', height + 'px')
        // .style('border-top', '1px solid black')
        // .style('border-left', '1px solid black')
        // .style('border-right', '1px solid black')
        .style('padding', '2px')
        .style('float', 'right')
        .attr('id', 'purity-lineplot-wrapper');

    //Canvas svg where fishplot will be plotted
    var canvas_svg = canvas.append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('id', 'line-plot-canvas');

    var x_axis_labels = JSON.parse(JSON.stringify(timepoints));
    var x_max = Math.max.apply(null, x_axis_labels);

    var ten_percent_below_zero = 0.1 * x_max;
    ten_percent_below_zero = parseInt(0 - ten_percent_below_zero);
    x_axis_labels.unshift(ten_percent_below_zero);

    var ten_percent_above_max = 0.1 * x_max;
    ten_percent_above_max = x_max + ten_percent_above_max;
    x_axis_labels.push(ten_percent_above_max);

    //use jQuery here because d3.select('#line-plot-canvas).node().clientWidth doesnt work in Firefox
    var canvas_range_max_x = $('#line-plot-canvas').width();

    var x_scale = d3.scale.linear().domain(d3.extent(x_axis_labels, function (d) {
        return d;
    }))
        .rangeRound([canvas_range_max_x * 0.01, canvas_range_max_x * 0.99], 0.25);

    var manual_padding = height * 0.075;

    var y_scale = d3.scale.linear().domain([100, 0]).range([(0 + manual_padding), (height - manual_padding)]);
    var y_axis = d3.svg.axis().scale(y_scale).tickValues([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
        .orient('left');

    var line_gen = d3.svg.line().x(function (d) {
        return x_scale(d.timepoint);
    })
        .y(function (d) {
            return y_scale(d.purity);
        });

    var purity_data = [];

    for (var i = 0; i < timepoints.length; i++) {
        purity_data.push({
            timepoint: timepoints[i],
            purity: data[timepoints[i]]
        });
    }

    canvas_svg.append('path')
        .attr('d', line_gen(purity_data))
        .attr('fill', 'none')
        .attr("stroke", "#1e90ff")
        .style("stroke-linejoin", "round")
        .attr('stroke-width', 1);

    var points = canvas_svg.selectAll('points')
        .data(purity_data)
        .enter()
        .append('circle')
        .attr('cx', function (d) {
            return x_scale(d.timepoint);
        })
        .attr('cy', function (d) {
            return y_scale(d.purity);
        })
        .attr('r', 3)
        .attr('fill', '#1e90ff');

    canvas_svg.append('text')
        .attr('x', function () {
            return 0;
        })
        .attr('y', function () {
            return 0;
        })
        .html('Purity')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(20, 75)rotate(270)');

    canvas_svg.append("svg:g")
        .attr('class', 'axis purity-line-ticks')
        .attr("transform", "translate(" + 6 + "0)")
        .call(y_axis);

}