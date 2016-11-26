/**
 * Created by jakeconway on 11/24/16.
 */
function makeTable(updated_data, el, width, height, color_ref, plotted, timepoints, scope) {
    d3.selectAll('table').remove();
    d3.selectAll('h2').remove();
    var data = updated_data;
    var nested_data = d3.nest().key(function (d) {
        return d.allele;
    }).entries(data);

    nested_data = sort_nested_alleles(nested_data);

    timepoints = uniqueAxisLabels(data, 'Sample_Barcode');
    timepoints = timepoints.sort(function (a, b) {
        return a - b;
    });

    var num_of_timepoints = timepoints.length;

    var fishplot_data = [];

    nested_data.forEach(function (d, i) {
        var allele_data = {};
        allele_data['allele'] = d.key;
        allele_data['freqs'] = [];
        var freqs = d.values;
        for (var j = 0; j < freqs.length; j++) {
            allele_data['freqs'].push(freqs[j].alt_count);
        }
        fishplot_data.push(allele_data);
    });

    add_conserved_alt_count(nested_data);


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

    nested_data = order_by_rank(nested_data, sort_array);

    //Any initial attributes on alleles will be applied within this for loop
    for (var i = 0; i < nested_data.length; i++) {
        nested_data[i].color = color_ref[nested_data[i].key];
    }

    d3.select(el).append('h2').style('text-align', 'center').html('VAF of Alleles at Each Timepoint');

    var table = d3.select(el).append('table').attr('class', 'table table-bordered editor-table')
        .attr('id', 'editor-table')
        .attr('data-toggle', 'table')
        .style('table-layout', 'fixed');

    var header1 = table.append('thead').attr('id', 'editor-thead').append('tr');
    header1.append('th').html(' ');
    header1.append('th').attr('colspan', timepoints.length).html('Timepoints');

    var tbody = table.append('tbody').attr('id', 'tbody-editor-table').append('tr');
    tbody.append('td').attr('align', 'center').html('<b> Alleles </b>');

    for (var i = 0; i < timepoints.length; i++) {
        if (Number.isInteger(timepoints[i]) == true) {
            var timepoint = 'Day ' + timepoints[i];
        }
        else {
            timepoint = timepoints[i];
        }
        tbody.append('td').attr('align', 'center').html('<b>' + timepoint + '</b>');
    }

    for (var i = 0; i < nested_data.length; i++) {
        var table_data = d3.select('#tbody-editor-table').append('tr').attr('id', 'tr' + i);
        d3.select('#tr' + i).append('td')
            .attr('bgcolor', nested_data[i].color)
            .style('text-align', 'center')
            .html(nested_data[i].key);
        for (var j = 0; j < timepoints.length; j++) {
            d3.select('#tr' + i).append('td')
                .style('text-align', 'center')
                .attr('value', nested_data[i].values[j].alt_count)
                .attr('conserved_val', nested_data[i].values[j].conserved_alt_count)
                .attr('timepoint', timepoints[j])
                .attr('allele', nested_data[i].key)
                .attr('index', i)
                .html(function () {
                    if (nested_data[i].values[j].alt_count == nested_data[i].values[j].conserved_alt_count) {
                        return (nested_data[i].values[j].alt_count + '%');
                    }
                    else {
                        var conserved_alt_count = nested_data[i].values[j].conserved_alt_count;
                        var html = '%' + ' '
                            + '<a data-toggle="popover" data-trigger="click" ' +
                            'title="This VAF has been altered"'
                            + 'data-content="The original VAF was ' + conserved_alt_count
                            + '">*</a>';
                        return (nested_data[i].values[j].alt_count + html);
                    }

                })
                .on('dblclick', function () {
                    var index = parseInt(d3.select(this).attr('index'));
                    if (plotted.indexOf(index) != -1) {

                        return;
                    }

                    var allele = d3.select(this).attr('allele');
                    var alt_count = d3.select(this).attr('value');
                    var conserved_alt_count = d3.select(this).attr('conserved_val');
                    var current_td = d3.select(this);
                    current_td.html(' ');
                    var form = current_td.append('form');
                    form.append('input')
                        .attr('type', 'number')
                        .attr('min', '0')
                        .attr('max', '100')
                        .attr('value', alt_count)
                        .on('keydown', function () {
                            if (d3.event.keyCode == 13) {
                                d3.event.preventDefault();
                                if (!isNaN(parseInt(d3.select(this).node().value))) {
                                    var new_vaf = parseInt(d3.select(this).node().value);
                                    if (new_vaf > 100) {
                                        new_vaf = 100;
                                    }
                                    if (new_vaf < 0) {
                                        new_vaf = 0;
                                    }
                                    current_td.innerHTML = '';
                                    var percentage = '%';
                                    if (new_vaf != conserved_alt_count) {
                                        percentage = percentage + ' '
                                            + '<a data-toggle="popover" data-trigger="click" ' +
                                            'title="This VAF has been altered"'
                                            + 'data-content="The original VAF was ' + conserved_alt_count
                                            + '">*</a>';
                                    }
                                    current_td.attr('value', new_vaf).html(new_vaf + percentage);
                                    var updated_info = [current_td.attr('allele'),
                                        current_td.attr('timepoint'),
                                        new_vaf];
                                    //update with parent scope with info on the allele, timepoint,
                                    //and new VAF
                                    //updated_editor_info will be used to communicate between the table
                                    //and the fishplot editor
                                    scope.$apply(function () {
                                        scope.$parent.updated_editor_info = updated_info;
                                    });
                                }
                            }
                        });
                    form.append('label').html('%');
                });
        }
    }
}

function makeTableFromLoadedData(loaded_data, plotted, timepoints, scope) {
    var nested_data = JSON.parse(JSON.stringify(loaded_data));

    for(var i = 0; i < nested_data.length; i++){
        var current_allele = nested_data[i];
        for(var j = 0; j < current_allele.values.length; j++){
            if(current_allele.values[j].Sample_Barcode >= 0 && timepoints.indexOf(current_allele.values[j].Sample_Barcode) == -1){
                timepoints.push(current_allele.values[j].Sample_Barcode);
            }
        }
    }
    timepoints.sort(function(a, b){
        return a - b;
    });

    //check if origin already added. If so, remove it
    for (var i = 0; i < nested_data.length; i++) {
        var timepoint_data = nested_data[i].values;
        if (timepoint_data[0].Sample_Barcode < 0 || timepoint_data[0].Sample_Barcode == 'origin') {
            timepoint_data.shift();
        }
    }

    d3.select('#tbody-editor-table').remove();
    var tbody = d3.select('#editor-table').append('tbody').attr('id', 'tbody-editor-table').append('tr');
    tbody.append('td').attr('align', 'center').html('<b> Alleles </b>');

    for (var i = 0; i < timepoints.length; i++) {
        if (Number.isInteger(timepoints[i]) == true) {
            var timepoint = 'Day ' + timepoints[i];
        }
        else {
            timepoint = timepoints[i];
        }
        tbody.append('td').attr('align', 'center').html('<b>' + timepoint + '</b>');
    }

    for (var i = 0; i < nested_data.length; i++) {
        var table_data = d3.select('#tbody-editor-table').append('tr').attr('id', 'tr' + i);
        d3.select('#tr' + i).append('td')
            .attr('bgcolor', nested_data[i].color)
            .style('text-align', 'center')
            .html(nested_data[i].key);
        for (var j = 0; j < timepoints.length; j++) {
            d3.select('#tr' + i).append('td')
                .style('text-align', 'center')
                .attr('value', nested_data[i].values[j].alt_count)
                .attr('conserved_val', nested_data[i].values[j].conserved_alt_count)
                .attr('timepoint', timepoints[j])
                .attr('allele', nested_data[i].key)
                .attr('index', i)
                .html(function () {
                    if (nested_data[i].values[j].alt_count == nested_data[i].values[j].conserved_alt_count) {
                        return (nested_data[i].values[j].alt_count + '%');
                    }
                    else {
                        var conserved_alt_count = nested_data[i].values[j].conserved_alt_count;
                        var html = '%' + ' '
                            + '<a data-toggle="popover" data-trigger="click" ' +
                            'title="This VAF has been altered"'
                            + 'data-content="The original VAF was ' + conserved_alt_count
                            + '">*</a>';
                        return (nested_data[i].values[j].alt_count + html);
                    }

                })
                .on('dblclick', function () {
                    var index = parseInt(d3.select(this).attr('index'));
                    if (plotted.indexOf(index) != -1) {

                        return;
                    }

                    var allele = d3.select(this).attr('allele');
                    var alt_count = d3.select(this).attr('value');
                    var conserved_alt_count = d3.select(this).attr('conserved_val');
                    var current_td = d3.select(this);
                    current_td.html(' ');
                    var form = current_td.append('form');
                    form.append('input')
                        .attr('type', 'number')
                        .attr('min', '0')
                        .attr('max', '100')
                        .attr('value', alt_count)
                        .on('keydown', function () {
                            if (d3.event.keyCode == 13) {
                                d3.event.preventDefault();
                                if (!isNaN(parseInt(d3.select(this).node().value))) {
                                    var new_vaf = parseInt(d3.select(this).node().value);
                                    if (new_vaf > 100) {
                                        new_vaf = 100;
                                    }
                                    if (new_vaf < 0) {
                                        new_vaf = 0;
                                    }
                                    current_td.innerHTML = '';
                                    var percentage = '%';
                                    if (new_vaf != conserved_alt_count) {
                                        percentage = percentage + ' '
                                            + '<a data-toggle="popover" data-trigger="click" ' +
                                            'title="This VAF has been altered"'
                                            + 'data-content="The original VAF was ' + conserved_alt_count
                                            + '">*</a>';
                                    }
                                    current_td.attr('value', new_vaf).html(new_vaf + percentage);
                                    var updated_info = [current_td.attr('allele'),
                                        current_td.attr('timepoint'),
                                        new_vaf];
                                    //update with parent scope with info on the allele, timepoint,
                                    //and new VAF
                                    //updated_editor_info will be used to communicate between the table
                                    //and the fishplot editor
                                    scope.$apply(function () {
                                        scope.$parent.updated_editor_info = updated_info;
                                    });
                                }
                            }
                        });
                    form.append('label').html('%');
                });
        }
    }
}