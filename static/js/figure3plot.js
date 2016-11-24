/**
 * Created by jakeconway on 11/24/16.
 */
function plotDendrogram(updatedData, el, width, height, cluster, scope) {
    d3.select(el).select('svg').remove();
    var alleles = [];

    var data = updatedData[0];
    var dendro_y_positions = updatedData[1];
    var alleleified_data = updatedData[2];

    var color_ref = updatedData[3];

    if (alleleified_data.length == 0) {
        return;
    }

    var canvas = d3.select(el).append('svg')
        .attr('height', height)
        .attr('width', width);

    var title = canvas.append('text')
        .attr('class', 'title-text')
        .attr('x', width / 2)
        .attr('y', 20)
        .style('text-anchor', 'middle')
        .text(function () {
            return 'Clustering of Alleles by VAF';
        });

    var sliderSvg = canvas.append('g');

    canvas = canvas.append('g')
        .attr('transform', 'translate(0, 75)');

    var nodes = cluster.nodes(data);
    var links = cluster.links(nodes);

    //Update dendrogram position based on python clustering position
    nodes.forEach(function (d, i) {
        d.y = dendro_y_positions[i];
        d.id = i;
    });

    var drag = d3.behavior.drag()
        .on('drag', function () {
            var slider = d3.select(this);
            var max_path_y = yScale.invert(30);
            if (d3.event.x < 30) {
                slider.attr('cx', 30);
                d3.select('#cutoff_line').attr('x1', 30).attr('x2', 30);
                max_path_y = yScale.invert(30);
            }
            else if (d3.event.x > 450) {
                slider.attr('cx', 450);
                d3.select('#cutoff_line').attr('x1', 450).attr('x2', 450);
                max_path_y = yScale.invert(450);
            }
            else {
                slider.attr('cx', d3.event.x);
                var cutoff = d3.select('#cutoff_line').attr('x1', d3.event.x).attr('x2', d3.event.x);
                max_path_y = yScale.invert(d3.event.x);
            }
            var linked_alleleified_data = cut_data(max_path_y, alleleified_data, nodes, scope.$parent.tevData);
            var clusters = linked_alleleified_data[2];
            var parents = linked_alleleified_data[3];

            for (var i = 0; i < clusters.length; i++) {
                var alleles_in_cluster = clusters[i];
                for (var j = 0; j < alleles_in_cluster.length; j++) {
                    var id = '#allele' + alleles.indexOf(alleles_in_cluster[j]);
                    var node = d3.select(id);
                    for (var k = 0; k < parents.length; k++) {
                        if (alleles_in_cluster.indexOf(parents[k]) != -1) {
                            node.attr('fill', color_ref[parents[k]]);
                        }
                    }
                }
            }
            scope.$apply(function () {
                scope.$parent.linked_alleleified_data = linked_alleleified_data[0];
                scope.$parent.clustered_alleleified_data = linked_alleleified_data[1];
            });
        });

    sliderSvg.append('line')
        .attr('x1', 30)
        .attr('x2', 450)
        .attr('y1', 50)
        .attr('y2', 50)
        .attr('stroke', 'black')
        .attr('stroke-width', 1.5)
        .attr('fill', 'none');

    sliderSvg.append('circle')
        .attr('r', 7)
        .attr('cy', 50)
        .attr('cx', 450)
        .attr('id', 'slider_circle')
        .attr('stroke', 'black')
        .attr('stroke-width', 0.5)
        .attr('fill', '#EEEEEE')
        .style('cursor', 'pointer')
        .call(drag);

    var y_max = Math.max.apply(null, dendro_y_positions);
    var yScale = d3.scale.linear().domain([y_max, 0]).range([30, 450]);
    var yAxis = d3.svg.axis().scale(yScale).orient('top');

    var link = canvas.selectAll('.link')
        .data(links)
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('d', function elbow(d, i) {
            return "M" + yScale(d.source.y) + "," + d.source.x
                + "V" + d.target.x + "H" + yScale(d.target.y);
        })
        .attr('fill', 'none')
        .attr('stroke', "#ccc")
        .attr('stroke-width', 1.5)
        .attr('transform', 'translate(0,40)');

    var node = canvas.selectAll('.node')
        .data(nodes)
        .enter()
        .append('g')
        .attr('transform', function (d) {
            return "translate(" + yScale(d.y) + "," + (d.x + 40) + ")";
        });

    node.append('circle')
        .attr('r', function (d) {
            if (d.name == " ") {
                return 0;
            }
            return 4.5;
        })
        .attr('id', function (d) {
            if (d.name != " ") {
                alleles.push(d.name);
                return 'allele' + (d.cluster - 1);
            }
            else {
                return "empty";
            }
        })
        .attr('stroke-width', 1.5)
        .attr('fill', function (d) {
            if (d3.select(this).attr('id') == 'empty') {
                return;
            }
            return color_ref[d.parent_allele];
        });

    canvas.append('line')
        .attr('x1', function () {
            var x = d3.select('#slider_circle').attr('cx');
            return x;
        })
        .attr('x2', function () {
            var x = d3.select('#slider_circle').attr('cx');
            return x;
        })
        .attr('y1', 30)
        .attr('y2', 450)
        .attr('id', 'cutoff_line')
        .attr('stroke', 'black')
        .attr('stroke-width', 1)
        .attr('fill', 'none');

    node.append("text")
        .attr("dx", function (d) {
            return d.children ? -8 : 8;
        })
        .attr("dy", 3)
        .attr('class', 'node_text')
        .attr("text-anchor", function (d) {
            return d.children ? "end" : "start";
        })
        .text(function (d) {
            return d.name;
        });

    canvas.append("svg:g")
        .attr("class", "axis")
        .attr('transform', 'translate(0, 25)')
        .call(yAxis);

    //Initialize the fishplot data
    var linked_alleleified_data = cut_data(0, alleleified_data, nodes, scope.$parent.tevData);
    scope.$parent.linked_alleleified_data = linked_alleleified_data[0];
    scope.$parent.clustered_alleleified_data = linked_alleleified_data[1];
    //Input the alleles, ordered by clustering
    scope.$parent.alleles = alleles;
}