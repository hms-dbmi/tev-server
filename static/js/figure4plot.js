/**
 * Created by jakeconway on 11/24/16.
 */
function makeFishbone(updatedData, el, width, height, color_ref, fishbone_padding) {
    d3.select(el).select('svg').remove();

    var data = updatedData[0];
    color_ref = updatedData[1];
    var additive_y = 50;

    if (data.length == 0) {
        return;
    }

    function get_parent_clones(data) {
        var parent_indices = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].parent_index_of_this == 'plot') {
                parent_indices.push(i);
            }
        }
        return parent_indices;
    }

    var independent_clonal_evos = get_parent_clones(data);

    var svg = d3.select(el).append("svg")
        .attr('id', 'fishbone_svg')
        .attr("height", height)
        .attr("width", width);

    var title = svg.append('text')
        .attr('class', 'title-text')
        .attr('x', width / 2)
        .attr('y', 20)
        .style('text-anchor', 'middle')
        .text(function () {
            return 'Fishbone of Suggested Fishplot';
        });

    for (var p = 0; p < independent_clonal_evos.length; p++) {

        var fishbone_data = {};
        fishbone_data.name = data[independent_clonal_evos[p]].key;
        fishbone_data.children = [];
        fishbone_data.cluster = data[independent_clonal_evos[p]].values[0].cluster;
        fishbone_data.parent_allele = data[independent_clonal_evos[p]].values[0].parent_allele;

        for (var i = 0; i < data[independent_clonal_evos[p]].children.length; i++) {
            var child = data[independent_clonal_evos[p]].children[i];
            child = data[child];
            add_children(child, fishbone_data, data);
        }

        var cluster = d3.layout.cluster()
            .size([100, 400]);

        var diagonal = d3.svg.diagonal()
            .projection(function (d) {
                return [d.y, d.x];
            });

        var fishbone = svg.append('svg')
            .attr('width', width)
            .attr('x', 0)
            .attr('y', additive_y)
            .append("g")
            .attr('id', 'fishbone' + p)
            .attr("transform", "translate(100," + 20 + ")");

        var nodes = cluster.nodes(fishbone_data),
            links = cluster.links(nodes);

        var link = fishbone.selectAll(".link")
            .data(links)
            .enter().append("path")
            .attr("class", "link")
            .attr("d", diagonal);

        var node = fishbone.selectAll(".node")
            .data(nodes)
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        node.append("circle")
            .attr("r", 4.5)
            .attr('fill', function (d) {
                return color_ref[d.parent_allele];
            });

        nodes.forEach(function (d) {
            var names = d.name.split('\n');
            for (var i = 0; i < names.length; i++) {
                var name = names[i];
                fishbone.append('text')
                    .attr('class', 'node_text')
                    .attr("transform", "translate(" + d.y + "," + d.x + ")")
                    .attr('dx', function () {
                        return d.children ? -8 : 8;
                    })
                    .attr('dy', function () {
                        return ((i + 1) * 10);
                    })
                    .style("text-anchor", function () {
                        return d.children ? "end" : "start";
                    })
                    .text(name);
            }
        });

        additive_y = additive_y + d3.select('#fishbone' + p).node().getBBox().height + fishbone_padding;
        if (additive_y > parseInt(d3.select(el).style('height'))) {
            d3.select(el).style('height', additive_y + 'px');
        }
    }
}