/**
 * Created by jakeconway on 11/24/16.
 */
//Function to calculate CCF based on ploidy and purity specified
    function find_CCFs(independent_evos, counter, nested_data, purity, num_of_evos, cells_per_evo_array, timepoints,
                       options, timepoint_index, is_child, pre_determined_total_chrs){
        //need to update to keep track of how many times we need to recursively call this function
        var max_cells_of_this_evo = purity; //- (num_of_evos-1);

        if(is_child == true && independent_evos.length == 1){
                calculate_child_CCF(independent_evos, nested_data, purity, timepoints, options,
                        timepoint_index);
        }

        if((counter == num_of_evos) && (num_of_evos == 1)){
            return;
        }

        else {

            //The following lines of this function are for generating all possible combinations of cell counts per
            //independent clonal expansion based on the purity (or percentage of cells assigned to parent)
            //initialize cells_per_evo_array
            if ((counter == num_of_evos) && (counter > 1)) {
                counter = counter - 1;
                for (var i = 0; i < max_cells_of_this_evo + 1; i++) {
                    cells_per_evo_array.push(i);
                    find_CCFs(independent_evos, counter, nested_data, purity, num_of_evos, cells_per_evo_array, timepoints,
                            options, timepoint_index, is_child, pre_determined_total_chrs);
                    cells_per_evo_array = [];
                }
            }

            //if this is not the last independent evolution, continue with the process
            //generate additional combinations if the below is true
            if ((counter > 1) && (counter < num_of_evos)) {
                counter = counter - 1;
                for (var i = 0; i < max_cells_of_this_evo + 1; i++) {
                    var cells_array = cells_per_evo_array.slice();
                    cells_array.push(i);
                    var sum = cells_array.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    //if we've already reached our limit, break out of the loop
                    if (sum > purity) {
                        break;
                    }
                    else {
                        find_CCFs(independent_evos, counter, nested_data, purity, num_of_evos, cells_array, timepoints,
                                options, timepoint_index, is_child, pre_determined_total_chrs);
                    }
                }
            }
            //else if we are on the last one, start checking the combinations
            if ((counter == 1) && (counter != num_of_evos)) {
                if (cells_per_evo_array.length != 0) {
                    for (var i = 0; i < max_cells_of_this_evo + 1; i++) {
                        var cells_array = cells_per_evo_array.slice();
                        cells_array.push(i);
                        sum = cells_array.reduce(function (a, b) {
                            return a + b;
                        }, 0);
                        if (sum > purity) {
                            break;
                        }
                        //if we have a good combination, see if it is possible to calculate the cancer cell fraction
                        if ((sum <= purity) && (cells_array.length == num_of_evos)) {
                            if (nested_data[independent_evos[0]].parent_index_of_this == 'plot' && sum != purity) {
                                continue;
                            }
                            else {
                                //function to see if there is a solution using the given ploidys
                                calculate_CCF(cells_array, independent_evos, nested_data, purity, timepoints, options, timepoint_index);
                            }
                        }
                        else {
                            continue;
                        }
                    }
                }
            }
        }
    }

    function calculate_child_CCF(independent_evos, nested_data, parent_cell_count, timepoints,
                                 options, timepoint_index) {
        var max_cells_of_this_evo = parent_cell_count;
        for (var i = 0; i < max_cells_of_this_evo + 1; i++) {
            var cells_array = [];
            cells_array.push(i);
            var sum = i;
            if ((sum <= parent_cell_count)){
                //function to see if there is a solution using the given ploidys
                calculate_CCF(cells_array, independent_evos, nested_data, parent_cell_count, timepoints, options, timepoint_index);
            }
        }

    }

    //Function to see if there is a solution for CCF given the independent clonal expansions and cell ploidys
    //cells_per_evo_array contains proposed cell counts for all independent clonal expansions except the last listed one
    function calculate_CCF(cells_per_evo_array, independent_evos, nested_data, purity, timepoints, options, timepoint_index){
        var normal_cells =  100-purity;
        //number of chromosomes coming from normal (impure) cells
        var num_chrs_normal_cells = normal_cells*2;

        //calculate total number of chromosomes
        var total_chromosomes = calculate_chromosome_total(cells_per_evo_array, num_chrs_normal_cells, nested_data, independent_evos);

        //and the number of chromosomes in each independent clonal expansion
        var chromosome_counts = {};

        //get the cells counts from each independent clonal expansion by adding the last cell count to array
        var all_evo_cell_counts = cells_per_evo_array;

        //Initialize the chromosome count coming from normal cells
        chromosome_counts.normal = num_chrs_normal_cells;

            chromosome_counts[timepoints.toString()] = {};
            for (var i = 0; i < independent_evos.length; i++) {
                //calculate number of chromsomes from each specific independent evolution
                //by multiplying number of cells for that independent evolution by the proposed ploidy of those cells
                var chrs_for_this_evo = all_evo_cell_counts[i] * nested_data[independent_evos[i]].ploidy;
                chromosome_counts[timepoints.toString()][nested_data[independent_evos[i]].key] = chrs_for_this_evo;
            }

            var chromosomes_affected_of_each = [];
            var will_work = true;

            for (var i = 0; i < independent_evos.length; i++) {
                //variant allele frequency
                var vaf = nested_data[independent_evos[i]].values[timepoint_index].alt_count;
                var chromosomes_needed = total_chromosomes * (vaf/100);
                chromosomes_needed = Math.round(chromosomes_needed);

                //if the number of cells we have for this independent evolution is greater than the chromosomes needed for
                //the VAF at this timepoint, then it wont work. Need at least 1 chrs affected per cell
                if ((chromosomes_needed < all_evo_cell_counts[i]) && (nested_data[independent_evos[i]].values[timepoint_index].alt_count != 0)) {
                    will_work = false;
                }

                if(all_evo_cell_counts[i] > 0 && chromosomes_needed == 0){
                    will_work = false;
                }

                if (chromosomes_needed > ((chromosome_counts[timepoints.toString()][nested_data[independent_evos[i]].key]) + nested_data[independent_evos[i]].ploidy-1)) {
                    will_work = false;
                }

                //else, try to find the closest number of chromosomes affected per independent evolution
                else {
                    var proportions = generate_portions(nested_data[independent_evos[i]].ploidy);
                    var proportion_affected = chromosomes_needed / chromosome_counts[timepoints.toString()][nested_data[independent_evos[i]].key];
                    var closest_proportion = find_closest_proportion(proportions, proportion_affected);
                    var num_of_chromosomes_affected = proportions.indexOf(closest_proportion) + 1;
                    chromosomes_affected_of_each.push(num_of_chromosomes_affected);
                }
            }

            if (will_work == true) {
                var CCF = {};
                for (var i = 0; i < independent_evos.length; i++) {
                    var allele = nested_data[independent_evos[i]].key;
                    CCF[allele] = [cells_per_evo_array[i]];
                    CCF[allele+'_chrs'] = chromosomes_affected_of_each[i];
                }
                options[timepoints.toString()].push(CCF);
            }

        return;
    }

    //function to generate possible proportions of chromosomes affected in cell based on ploidy
    function generate_portions(ploidy){
        var proportions_array = [];
        var increment = 1/ploidy;
        for(var i = 0; i < ploidy; i++){
            var proportion = (i+1)*increment;
            proportion = parseFloat(proportion.toFixed(2));
            proportions_array.push(proportion);
        }
        return proportions_array;
    }

    //calculate the total number of chromosomes based on the purity, ploidy, and cells distribution
    function calculate_chromosome_total(cells_per_evo_array, num_chrs_normal_cells, nested_data, independent_evos) {
        var total_chromosomes = num_chrs_normal_cells;
        for (var i = 0; i < cells_per_evo_array.length; i++) {
            var chrs_for_this_evo = cells_per_evo_array[i] * nested_data[independent_evos[i]].ploidy;
            total_chromosomes = total_chromosomes + chrs_for_this_evo;
        }
        return total_chromosomes;
    }

    //find the closest proportion of chromosomes affected by variation
    function find_closest_proportion(proportions, proportion_affected){
        var closest = proportions[0];
        for(var i = 1; i < proportions.length; i++){
            if(Math.abs(proportion_affected-proportions[i]) < Math.abs(proportion_affected-closest)){
                closest = proportions[i];
            }
        }
        return closest;
    }

    //Find unique values for oridinal scale
    function uniqueAxisLabels(data, key) {
        var unique = {};
        var distinct = [];
        data.forEach(function (x) {
            if (!unique[x[key]]) {
                distinct.push(x[key]);
                unique[x[key]] = true;
            }
        });

        return distinct;
    }


    //Find difference between two arrays
    Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
    };

    //Sort each allele in nested data by timepoint
    function sort_nested_alleles(nested_data){
        for(var i = 0; i < nested_data.length; i++){
            nested_data[i].values = nested_data[i].values.sort(function(a, b){
               return a.Sample_Barcode - b.Sample_Barcode;
            });
        }
        return nested_data;
    }

    //functions for adjusting beginning and end of fishplots
    function pinch_data(data) {
        for (var i = 0; i < data.length; i++) {
            var current_allele = data[i];
            for (var j = 0; j < current_allele.values.length; j++) {
                //Initialize all pinches to false
                //Pinch will only be true if the "origin" timepoint is not the subclones actual origin
                current_allele.values[j].pinch = false;
            }
            current_allele.values = find_origin(current_allele);
        }
    }

    function remove_unnecessary_values(data) {
        for (var i = 0; i < data.length; i++) {
            var current_allele = data[i];
            current_allele.values.reverse();
            for (var j = 0; j < current_allele.values.length; j++) {
                if (current_allele.values[j].alt_count != 0) {
                    if (j != 0) {
                        current_allele.values.splice(0, j - 1);
                    }
                    current_allele.values.reverse();
                    break;
                }
            }
        }
    }


    //Order fish plot data by first timepoint, and then by alternative allele freq
    //Directives used in: figure5Plot
    function order_by_rank(data, rank_data){
        var reordered_data = [];
        for(var i = 0; i < data.length; i++){
            var current_allele = data.findIndex(x => x.key == rank_data[i].allele);
            current_allele = data[current_allele];
            reordered_data[i] = current_allele;
        }
        return reordered_data;
    }


    //Dirty way of adding origin (tail fin of fish plot)
    //Important to unshift, because the order of the x-values matters when using d3.line.svg()!
    function add_origin(nestedData, Sample_Barcode) {
        for (var i = 0; i < nestedData.length; i++) {
            var allele_cluster = nestedData[i].values[0].cluster;
            var parent_allele = nestedData[i].values[0].parent_allele;
            nestedData[i].values.unshift({
                Sample_Barcode: Sample_Barcode,
                alt_count: 0,
                conserved_alt_count: 0,
                allele: nestedData[i].key,
                cluster: allele_cluster,
                parent_allele: parent_allele
            });
        }
        return nestedData;
    }

    //Is one < 0 or > 100?
    function parent_border_collision_detection(parent, start_point, min, max, measure) {
        for (var j = 0; j < parent.values.length; j++) {
            if ((start_point - parent.values[j][measure] / 2) < min) {
                parent.values[j].bottom = min;
                parent.values[j].top = parent.values[j][measure];
            }
            else if ((start_point + parent.values[j][measure] / 2) > max) {
                parent.values[j].top = max;
                parent.values[j].bottom = max - parent.values[j][measure];
            }
            else {
                parent.values[j].top = (start_point + parent.values[j][measure] / 2);
                parent.values[j].bottom = (start_point - parent.values[j][measure] / 2);
            }
        }
        return parent;
    }


    //pass in nestedData, and the index representing the timepoint
    function collision_detection(data, children, timepoint_index, min, max, measure) {
        var range = max - min;
        var total_alt_counts = 0;
        for (var i = 0; i < children.length; i++) {
            //loop through children, and see where we can move the tops and bottoms
            total_alt_counts = data[children[i]].values[timepoint_index][measure] + total_alt_counts;
        }
        var space = (range - total_alt_counts);
        space = space / (children.length + 1);

        var new_bottom = min + space;

        for (var i = 0; i < children.length; i++) {
            data[children[i]].values[timepoint_index].bottom = new_bottom;
            data[children[i]].values[timepoint_index].top = new_bottom + data[children[i]].values[timepoint_index][measure];
            data[children[i]].values[timepoint_index].pinch_point = (data[children[i]].values[timepoint_index].top
                    + data[children[i]].values[timepoint_index].bottom) / 2;
            new_bottom = data[children[i]].values[timepoint_index].top + space;
        }
        return data;
    }


    //Find if there are any conflicts with the adjusted borders for the independent evolutions
    //And adjust the borders if there are any conflicts
    function adjust_independent_evolution_positions(nestedData, plot_background, num_of_timepoints, measure, max_vaf) {
        for (var i = 0; i < num_of_timepoints + 1; i++) {
            for (var j = 1; j < plot_background.children.length; j++) {
                var last_top = nestedData[plot_background.children[j - 1]].values[i].top;
                var current_bottom = nestedData[plot_background.children[j]].values[i].bottom;
                if (current_bottom < last_top) {
                    nestedData = collision_detection(nestedData, plot_background.children, i, 0, max_vaf, measure);
                    break;
                }
            }
        }
    }


    //Adjust children top and bottom based on parents
    function adjust_children_positioning(nestedData, num_of_timepoints, measure) {
        for (var i = 0; i < nestedData.length; i++) {
            var parent_index = nestedData[i].parent_index_of_this;
            //Added || != 'none' to satisfy fishplot editor (Had to add separate if statement for some reason??)
            //All fishplots that havent been placed down yet have a parent_index of 'none'
            //This is so I can do the collision prevention for the children that are already plotted
            if (parent_index != "plot") {
                if (parent_index != "none") {
                    var parent = nestedData[parent_index];
                    var children = parent.children;
                    var start_point = parent.start_point;
                    //Potentially include an && the children has not already been checked
                    //If parent has 2+ children, then the loop below will have taken care of those children already
                    if (children.length != 0) {
                        for (var j = 0; j < children.length; j++) {
                            var child = nestedData[children[j]];
                            for (var k = 0; k < child.values.length; k++) {
                                var start_point_space = parent.values[k][measure] / children.length;
                                var start_point_base = start_point_space / 2;
                                child.start_point = start_point_base + (start_point_space * j) + parent.values[k].bottom;
                                child.values[k].start_point = child.start_point;
                                if ((child.start_point - child.values[k][measure] / 2) < parent.values[k].bottom) {
                                    child.values[k].bottom = parent.values[k].bottom;
                                    child.values[k].top = child.values[k].bottom + child.values[k][measure];
                                }
                                else if (( child.start_point + child.values[k][measure] / 2) > parent.values[k].top) {
                                    child.values[k].top = parent.values[k].top;
                                    child.values[k].bottom = child.values[k].top - child.values[k][measure];
                                }
                                else {
                                    child.values[k].top = (child.start_point + child.values[k][measure] / 2);
                                    child.values[k].bottom = (child.start_point - child.values[k][measure] / 2);
                                }
                            }
                            child.start_point = child.values[0].bottom;
                        }
                        for (var j = 0; j < num_of_timepoints + 1; j++) {
                            nestedData = collision_detection(nestedData, children, j, parent.values[j].bottom, parent.values[j].top, measure);
                        }
                    }
                }
            }
        }
        return nestedData;
    }


    //Function to find the actual origin of the fishplots
    //Directives used in: figure5Plot
    function find_origin(current_allele){
        var allele_data = current_allele.values;
        var zeroes = [];
        //Find out if "origin" is the only timepoint that has an alternative allele frequency of zero
        for(var i = 0; i < allele_data.length; i++){
            if(allele_data[i].alt_count == 0){
                zeroes.push(i);
            }
            else {
                break;
            }
        }
        //If "origin" is not the actuall origin of the tumor
        //Trim the data until one timepoint before the actual origin
        if(zeroes.length > 1){
                allele_data.splice(0, zeroes.length - 1);
            }
        return allele_data;
    }

    //Reformat the data based on the cutoff point of the slider in the elbow dendrogram (Figure 3)
    //Directives used in: figure3Plot
    function cut_data(max_path_y, alleleified_data, nodes, timepoints) {

        var new_data = [];
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].y <= max_path_y) {
                new_data.push(nodes[i]);
            }
        }

        var upper_level_data = [];
        var used_nodes = [];
        for (var i = 0; i < new_data.length; i++) {
            var allele_level_data = [];
            var current_data = new_data[i];
            if (current_data.name != " " && used_nodes.indexOf(current_data.id) == -1) {
                used_nodes.push(current_data.id);
                allele_level_data.push(current_data.name);
                upper_level_data.push(allele_level_data);
                nodes[nodes.indexOf(current_data)].cluster = upper_level_data.length;
                nodes[nodes.indexOf(current_data)].parent_allele = current_data.name;
            }
            else if (current_data.name == " " && used_nodes.indexOf(current_data.id) == -1) {
                var cluster = upper_level_data.length + 1;
                var parent_allele = find_parent_allele(alleleified_data, allele_level_data);
                get_all_children(current_data, used_nodes, allele_level_data, nodes, cluster, parent_allele);
                upper_level_data.push(allele_level_data);
            }
        }

        var updated_linked_alleleified_data = convert_to_allelified(alleleified_data, upper_level_data, timepoints);
        var new_alleleified_data = update_alleleified_data(alleleified_data, upper_level_data);
        var parents = alleleified_parent_alleles(new_alleleified_data);

        return [updated_linked_alleleified_data, new_alleleified_data, upper_level_data, parents];
    }

    //for figure3 node color assignment... gets array of parent alleles
    function alleleified_parent_alleles(alleleified_data){
        var nested_data = d3.nest().key(function(d){
            return d.parent_allele;
        }).entries(alleleified_data);

        var parents = [];
        for(var i = 0; i < nested_data.length; i++){
            parents.push(nested_data[i].key);
        }
        return parents;
    }

    //for figure 3, cut_data function
    function find_parent_allele(alleleified_data, allele_level_data) {
        var nested_data = d3.nest().key(function (d) {
                    return d.allele;
                })
                .entries(alleleified_data);
        var parent_allele = '';
        var max_avg = 0;

        for(var i = 0; i < nested_data.length; i++) {
            var current_allele = nested_data[i];
            if (allele_level_data.indexOf(current_allele.key) == -1) {
                continue;
            }
            else {
                var sum = 0;
                for (var j = 0; j < current_allele.values.length; j++) {
                    sum = sum + current_allele.values[j].alt_count;
                }
                if (sum > max_avg) {
                    max_avg = sum;
                    parent_allele = current_allele.key;
                }
            }
        }
        return parent_allele;
    }

    function find_largest_allele(alleleified_data, allele_list, timepoints){
        var max_vaf = 0;
        var alleles_with_max_vaf = [];
        for(var i = 0; i < timepoints.length; i++){
            var timepoint = timepoints[i];
            for(var j = 0; j < allele_list.length; j++){
                for(var k = 0; k < alleleified_data.length; k++){
                    if(alleleified_data[k].allele == allele_list[j] && alleleified_data[k].Sample_Barcode == timepoint){
                        if(alleleified_data[k].alt_count == max_vaf){
                            alleles_with_max_vaf.push(alleleified_data[k].allele);
                        }
                        if(alleleified_data[k].alt_count > max_vaf){
                            max_vaf = alleleified_data[k].alt_count;
                            alleles_with_max_vaf = [];
                            alleles_with_max_vaf.push(alleleified_data[k].allele);
                        }
                        break;
                    }
                    else{
                        continue;
                    }
                }
            }
            //if there is more than one allele with the maximum VAF, compare those alleles VAF at the next timepoint
            if(alleles_with_max_vaf.length > 1){
                max_vaf = 0;
                allele_list = JSON.parse(JSON.stringify(alleles_with_max_vaf));
                alleles_with_max_vaf = [];
            }
            //if there is only one allele with the largest VAF, return the allele name
            if(alleles_with_max_vaf.length == 1){
                return alleles_with_max_vaf[0];
            }
        }
        //if > 1 have same VAF at every timepoint, it doesnt matter what one we pick
        return alleles_with_max_vaf[0];
    }

    //Convert newly cut data into linked alleleified data, so it is readable by fishplot & fishbone
    //Directives used in: figure3Plot
    function convert_to_allelified(alleleified_data, upper_level_data, timepoint_data) {
        var new_linked_alleleified_data = [];
        var allele;
        var timepoints = [];
        for(var i = 0; i < timepoint_data.length; i++){
            timepoints.push(timepoint_data[i].timepoint);
        }

        for (var i = 0; i < upper_level_data.length; i++) {
            var allele_list = upper_level_data[i];
            var parent_allele = find_parent_allele(alleleified_data, allele_list);
            if (allele_list.length > 1) {
                var new_allele_name = allele_list.join("\n");
            }
            else {
                new_allele_name = allele_list[0];
            }
            for (var j = 0; j < alleleified_data.length; j++) {
                //Now generate data grouping the alleles for the fishbone and fishplot
                if (alleleified_data[j].allele == parent_allele) {
                    allele = JSON.parse(JSON.stringify(alleleified_data[j]));
                    allele.allele = new_allele_name;
                    allele.parent_allele = parent_allele;
                    new_linked_alleleified_data.push(allele);
                }
            }
        }
        return new_linked_alleleified_data;
    }

    //Update the clusters of the alleleified data for the line plot and box plot
    //Directives used in: figure3Plot
    function update_alleleified_data(alleleified_data, upper_level_data) {
        for (var i = 0; i < upper_level_data.length; i++) {
            var allele_list = upper_level_data[i];
            var parent_allele = find_parent_allele(alleleified_data, allele_list);
            for (var j = 0; j < alleleified_data.length; j++) {
                for (var k = 0; k < allele_list.length; k++) {
                    if (alleleified_data[j].allele == allele_list[k]) {
                        alleleified_data[j].cluster = i + 1;
                        alleleified_data[j].parent_allele = parent_allele;
                    }
                }
            }
        }
        return alleleified_data;
    }

    //If the cutoff point of the slider is above a node that isn't directly associated with an allele
    //Find all of the alleles (children) under that node
    //Directives used in: figure3Plot
    function get_all_children(current_data, used_nodes, allele_level_data, nodes, cluster, parent_allele) {
        if (current_data.children != undefined) {
            for (var i = 0; i < current_data.children.length; i++) {
                if (current_data.children[i].name == " ") {
                    used_nodes.push(current_data.children[i].id);
                    get_all_children(current_data.children[i], used_nodes, allele_level_data, nodes, cluster, parent_allele);
                }
                else {
                    if (used_nodes.indexOf(current_data.children[i].id) == -1) {
                        nodes[nodes.indexOf(current_data.children[i])].cluster = cluster;
                        nodes[nodes.indexOf(current_data.children[i])].parent_allele = parent_allele;
                        used_nodes.push(current_data.children[i].id);
                        allele_level_data.push(current_data.children[i].name);
                    }
                }
            }
        }
    }

    //Function to correctly format data passed from fishplot (figure5Plot) to fishbone (figure4Plot) for d3 dendrogram
    //Directives used in: figure4Plot
    function add_children(child, parent, data) {
        var childData = {name: child.key, children: [], cluster: child.values[0].cluster,
            parent_allele: child.values[0].parent_allele};
        parent.children.push(childData);

        for (var i = 0; i < child.children.length; i++) {
            var newChild = data[child.children[i]];
            add_children(newChild, childData, data);
        }
    }

    //get purity at each timepoint for fishplot editor
    //only works when parent is plot_background
    function get_purity_dict(tick_labels) {
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
        return purity_dict;
    }

    function can_plot_CCF(canvas_nested_data, fishplot_svgs){
        var can_plot = true;
        for(var i = 0; i < fishplot_svgs.length; i++){
            var current_allele = canvas_nested_data[fishplot_svgs[i]];
            for(var j = 0; j < current_allele.values.length; j++){
                if(current_allele.values[j].ccf == undefined){
                    can_plot = false;
                    break;
                }
            }
            if(can_plot == false){
                break;
            }
        }
        return can_plot;
    }

    function get_pre_determined_total_chrs_count(nested_data, plot_background, tick_labels) {
        var total_chrs = {};
        for (var i = 0; i < tick_labels.length; i++) {
            var purity_value = parseInt(d3.select('#day' + tick_labels[i].toString() + '_input').node().value);
            total_chrs[tick_labels[i].toString()] = [];
            //chrs from normal cells at timepoint
            total_chrs[tick_labels[i].toString()].push((100 - purity_value) * 2);
        }

        var independent_evos = plot_background.children;
        for (var i = 0; i < independent_evos.length; i++) {
            var current_allele = nested_data[independent_evos[i]];
            for (var j = 0; j < tick_labels.length; j++) {
                total_chrs[tick_labels[j].toString()].push(
                        current_allele.values[j + 1].ccf * current_allele.ploidy
                );
            }
        }
        return total_chrs;
    }

    //function to plot CCF relative to cancer cells, not to total cells in sample
    function relative_to_cancer_cells(nested_data, fishplot_svgs, purity_dict, timepoints){
        for(var i = 0; i < fishplot_svgs.length; i++){
            var allele_data = nested_data[fishplot_svgs[i]].values;
            allele_data[0].only_cancer_ccf = 0;
            for (var j = 0; j < timepoints.length; j++) {
                var total_cc_cells = purity_dict[timepoints[j].toString()];
                if (allele_data[j + 1].ccf == undefined) {
                    return 0;
                }
                allele_data[j + 1].only_cancer_ccf = parseInt((allele_data[j + 1].ccf / total_cc_cells) * 100);
            }
        }
    }

    function load_CCF_options(CCF_options, sample_timepoints) {
        for (var i = 0; i < sample_timepoints.length; i++) {
            CCF_options[sample_timepoints[i].toString()] = [];
        }
    }

    function associated_allele_colors(canvas_nested_data) {
        var allele_dict = {};
        for (var i = 0; i < canvas_nested_data.length; i++) {
            allele_dict[canvas_nested_data[i].key] = canvas_nested_data[i].color;
        }
        return allele_dict;
    }


    function is_valid(CCF_options, timepoints) {
        var valid = true;
        for (var i = 0; i < timepoints.length; i++) {
            if (CCF_options[timepoints[i]].length < 1) {
                valid = false;
            }
        }
        return valid;
    }

    function all_cell_combos(CCF_options, timepoints, alleles) {
        for (var i = 0; i < timepoints.length; i++) {
            if (i == 0) {
                var opts = CCF_options[timepoints[i].toString()];
            }
            else {
                var timepoint_data = CCF_options[timepoints[i].toString()];

                opts = add_combo(opts, timepoint_data, alleles);
            }
        }
        return opts;
    }

    function add_combo(opts, timepoint_data, alleles) {
        var updated_opts = [];
        for (var i = 0; i < opts.length; i++) {
            //object
            var current_opt = opts[i];
            for (var j = 0; j < timepoint_data.length; j++) {
                var opt_copy = JSON.parse(JSON.stringify(current_opt));
                var chrs_check = true;
                for (var k = 0; k < alleles.length; k++) {
                    if (opt_copy[(alleles[k] + '_chrs').toString()] != timepoint_data[j][(alleles[k] + '_chrs').toString()]) {
                        chrs_check = false;
                    }
                    opt_copy[alleles[k].toString()] = opt_copy[alleles[k].toString()].concat(timepoint_data[j][alleles[k].toString()]);
                }
                if (chrs_check == true) {
                    updated_opts.push(opt_copy);
                }
            }
        }
        return updated_opts;
    }

    function get_parent_alleles(plot_background_children, canvas_nested_data) {
        var alleles = [];
        for (var i = 0; i < plot_background_children.length; i++) {
            alleles.push(canvas_nested_data[parseInt(plot_background_children[i])].key);
        }
        return alleles;
    }

    function get_ploidy(allele, nested_data, plot_background_children) {
        for (var i = 0; i < plot_background_children.length; i++) {
            if (nested_data[plot_background_children[i]].key == allele) {
                return nested_data[plot_background_children[i]].ploidy;
            }
        }
    }

    function set_up_ccf_boundries(canvas_nested_data, fishplot_svgs, ccf_type) {
        for (var i = 0; i < fishplot_svgs.length; i++) {
            var current_allele = canvas_nested_data[fishplot_svgs[i]];
            var start_point = current_allele.start_point;
            for (var j = 0; j < current_allele.values.length; j++) {
                var half_ccf = current_allele.values[j][ccf_type] / 2;
                current_allele.values[j].top = start_point + half_ccf;
                current_allele.values[j].bottom = start_point - half_ccf;
            }
        }
    }

    //Retains un-trimmed copy of updated values
    function update_canvas_nested_data(canvas_nested_data, fishplot_svgs) {
        for (var i = 0; i < fishplot_svgs.length; i++) {
            var current_index = fishplot_svgs[i];
            canvas_nested_data[current_index] = JSON.parse(JSON.stringify(canvas_nested_data[current_index]));
        }
    }


    //Check if it can fit within parent
    function can_fit(nested_data, parent, current_data, num_of_timepoints) {
        //Add 1 to include the origin
        num_of_timepoints = num_of_timepoints + 1;
        var children = parent.children;
        for (var i = 0; i < num_of_timepoints; i++) {
            var freq_at_timepoint = current_data.values[i].alt_count;
            for (var j = 0; j < children.length; j++) {
                freq_at_timepoint = freq_at_timepoint + nested_data[children[j]].values[i].alt_count;
            }
            if (freq_at_timepoint > parent.values[i].alt_count) {
                return false;
            }
        }
        return true;
    }

    //Make nested data in correct order using only those plotted
    //This makes the data being plotted compatible with the adjust children positioning function
    function reconstruct_data(nested_data, fishplot_svgs) {
        var new_data = [];
        for (var i = 0; i < fishplot_svgs.length; i++) {
            var current_data = nested_data[fishplot_svgs[i]];
            var new_children = [];
            if (current_data.parent_index_of_this != 'plot') {
                current_data.parent_index_of_this = fishplot_svgs.indexOf(current_data.parent_index_of_this);
            }
            for (var j = 0; j < current_data.children.length; j++) {
                new_children.push(fishplot_svgs.indexOf(parseInt(current_data.children[j])));
            }
            current_data.children = new_children;
            new_data.push(current_data);
        }
        return new_data;
    }

    //Update the start points as we see them on plot, so fishes are relative to where they are dropped
    function set_new_start_point(canvas_nested_data, nested_data, fishplot_svgs, children) {
        for (var i = 0; i < children.length; i++) {
            var index = nested_data[children[i]].index;
            canvas_nested_data[index].start_point = nested_data[children[i]].start_point;
            canvas_nested_data[index] = JSON.parse(JSON.stringify(canvas_nested_data[index]));
        }
    }

    function prompt(sample_timepoints, tick_labels, nested_data, parent, origin_timepoint, complete_nested_data,
                    plot_background, allele_color_reference, fishplot_svgs, parent_of_this) {

        d3.select('#modal_table_reprompt').remove();

        var CCF_options = {};
        load_CCF_options(CCF_options, sample_timepoints);


        if (parent.key == 'plot') {
            var purity_dict = get_purity_dict(tick_labels);
            var is_subclone = false;
            var total_chrs = null;
        }
        if (parent.key != 'plot') {
            var viable_parents = true;
            is_subclone = true;
            var purity_dict = {};
            for (var i = 0; i < tick_labels.length; i++) {

                var purity_value = complete_nested_data[parent_of_this].values[i + 1].ccf;
                if (purity_value == undefined) {
                    viable_parents = false;
                    break;
                }
                if (purity_value > 100) {
                    purity_value = 100;
                }
                if (purity_value < 0) {
                    purity_value = 0;
                }
                purity_dict[tick_labels[i].toString()] = purity_value;
            }
            var total_chrs_counts = get_pre_determined_total_chrs_count(complete_nested_data,
                    plot_background, tick_labels);
        }

        for (var i = 0; i < tick_labels.length; i++) {
            //actual timepoint index is +1 since first timepoint is the origin
            var timepoint_index = i + 1;
            if (is_subclone == true) {
                var total_chrs = total_chrs_counts[tick_labels[i].toString()].reduce(function (a, b) {
                    return a + b;
                }, 0);
            }

            find_CCFs(parent.children, parent.children.length, complete_nested_data,
                    purity_dict[tick_labels[i].toString()], parent.children.length, [], tick_labels[i],
                    CCF_options, timepoint_index, is_subclone, total_chrs);
        }

        delete CCF_options[origin_timepoint.toString()];

        var valid = is_valid(CCF_options, tick_labels);


        if (valid == true) {
            var parent_alleles = get_parent_alleles(parent.children, nested_data);
            CCF_options = all_cell_combos(CCF_options, tick_labels, parent_alleles);
        }
        else {
            CCF_options = [];
        }

        if(CCF_options.length > 100){
            var first_fifty = CCF_options.slice(0, 50);
            var last_fifty = CCF_options.slice((CCF_options.length - 50))
            CCF_options = first_fifty.concat(last_fifty);
        }

        var modal_table = d3.select('#CCF_modal_body_reprompt').append('table')
                .attr('id', 'modal_table_reprompt')
                .attr('class', 'table table-hover');
        var thead = modal_table.append('thead').append('tr');

        var alleles_column = thead.append('th').html('Parent Alleles');
        var chrs_affected_column = thead.append('th').html('Chrs Affected');
        var timepoints_column = thead.append('th').html('CCFs at Timepoints');

        var table_body = modal_table.append('tbody')
                .style('cursor', 'pointer');

        var rows = table_body.selectAll('possible_ccfs')
                .data(CCF_options)
                .enter()
                .append('tr')
                .attr('index', function (d, i) {
                    return i;
                })
                .attr('is-clicked', 0)
                .on('mouseover', function () {
                    if (d3.select(this).attr('is-clicked') != 1) {
                        d3.select(this).style('background-color', '#f5f5f5');
                    }
                })
                .on('mouseout', function () {
                    if (d3.select(this).attr('is-clicked') != 1) {
                        d3.select(this).style('background-color', '#ffffff');
                    }
                })
                .on('mouseenter', function () {
                    if (d3.select(this).attr('is-clicked') != 1) {
                        d3.select(this).style('background-color', '#f5f5f5');
                    }
                })
                .on('click', function (d) {
                    //unselect previously selected tr
                    if (d3.select('#selected-tr').node() != null && d3.select(this).attr('id') != 'selected-tr') {
                        d3.select('#selected-tr').attr('id', '')
                                .attr('is-clicked', 0)
                                .style('background-color', '#ffffff');
                    }

                    d3.select(this).attr('id', 'selected-tr');

                    var is_clicked = d3.select(this).attr('is-clicked');
                    if (is_clicked == 0) {
                        d3.select(this).attr('class', 'is-clicked');
                        d3.select(this).attr('is-clicked', 1);
                        d3.select(this).style('background-color', '#DCDCDC');
                    }
                    else if (is_clicked == 1) {
                        d3.select(this).attr('is-clicked', 0);
                        d3.select(this).style('background-color', '#f5f5f5');
                    }
                });

        rows.append('td')
                .attr('class', function (d, i) {
                    return 'row-data-' + i;
                })
                .html(function (d) {
                    var alleles = JSON.parse(JSON.stringify(parent_alleles));
                    for (var i = 0; i < alleles.length; i++) {
                        var allele = alleles[i];
                        var color = allele_color_reference[allele];
                        var string = '<span style="color:' + color + '">'
                                + allele + '</span>';
                        alleles[i] = string;
                    }
                    alleles = alleles.join(' </br> ');
                    return alleles;
                });

        rows.append('td')
                .attr('class', function (d, i) {
                    return 'row-data-' + i;
                })
                .html(function (d) {
                    var alleles = JSON.parse(JSON.stringify(parent_alleles));
                    var chrs_affected_array = [];
                    for (var i = 0; i < alleles.length; i++) {
                        var chrs_key = alleles[i] + '_chrs';
                        var ploidy = get_ploidy(alleles[i], nested_data, parent.children);
                        var string = d[chrs_key] + '/' + ploidy;
                        chrs_affected_array.push(string);
                    }
                    chrs_affected_array = chrs_affected_array.join(' </br> ');
                    return chrs_affected_array;
                });

        rows.append('td')
                .attr('class', function (d, i) {
                    return 'row-data-' + i;
                })
                .html(function (d) {
                    var alleles = JSON.parse(JSON.stringify(parent_alleles));
                    var cell_fraction_array = [];
                    for (var i = 0; i < alleles.length; i++) {
                        var current_allele = alleles[i];
                        var allele_string = [];
                        for (j = 0; j < tick_labels.length; j++) {
                            allele_string.push('<span style="color:#0000FF">'
                                    + tick_labels[j] + ': '
                                    + '</span>' + d[current_allele][j]);
                        }
                        var string = allele_string.join(', ');
                        cell_fraction_array.push(string);
                    }
                    cell_fraction_array = cell_fraction_array.join(' </br> ');
                    return cell_fraction_array;
                });

                $('#CCF_modal_reprompt').modal('show');

    }

    function alleles_in_nested_data(canvas_nested_data) {
        var alleles = [];
        for (var i = 0; i < canvas_nested_data.length; i++) {
            alleles.push(canvas_nested_data[i].key);
        }
        return alleles;
    }
    function update_variant_info(data, alleles, canvas_nested_data) {
        var all_alleles = alleles_in_nested_data(canvas_nested_data);
        for (var i = 0; i < alleles.length; i++) {
            var index = all_alleles.indexOf(alleles[i]);

            //applying info for ploidy
            var chrs_aff = data[alleles[i] + '_chrs'].toString() + '/' + canvas_nested_data[index].ploidy.toString();
            var string = d3.select('#chrs_aff_text' + index.toString()).node().innerHTML.split(':')[0];
            string = string + ': ' + chrs_aff;
            d3.select('#chrs_aff_text' + index.toString()).text(function () {
                return string;
            });

            //applying info for CCF
            var ccf = data[alleles[i]];
            //CCF was 0 before the origin
            ccf.unshift(0);
            for (var j = 0; j < canvas_nested_data[index].values.length; j++) {
                canvas_nested_data[index].values[j].ccf = ccf[j];
            }
        }
    }

    //function to keep record of conserved alt count, mainly for fishplot table
    //called in fishplot table scope, and fishplot editor (need when saving fishplot)
    function add_conserved_alt_count(nested_data) {
        for (var i = 0; i < nested_data.length; i++) {
            var timepoint_data = nested_data[i].values;
            for (var j = 0; j < timepoint_data.length; j++) {
                timepoint_data[j].conserved_alt_count = timepoint_data[j].alt_count;
            }
        }
    }

    function fishplot_plot(canvas_svg, tick_labels, canvas_nested_data, fishplot_svgs, plot_background, num_of_timepoints,
    canvas_top_line_gen, canvas_bottom_line_gen, canvas_area_between_lines, moused_over, contextMenuFor, contextMenuShowing,
    contextMenuForPrevious, type, allele_color_reference, max_vaf, canvas_range_max_y, canvas_x_axis) {

        canvas_svg.html('');
        var purity = get_purity_dict(tick_labels);
        if(type == 'only_cancer_ccf'){
            relative_to_cancer_cells(canvas_nested_data, fishplot_svgs, purity, tick_labels);
        }
        set_up_ccf_boundries(canvas_nested_data, fishplot_svgs, type);

        var nested_data = canvas_nested_data.slice(0);

        //Create shallow copy for values of each fishplot used
        //Prevents find_origin function from permanently trimming allele values
        update_canvas_nested_data(canvas_nested_data, fishplot_svgs);

        for (var i = 0; i < plot_background.children.length; i++) {
            var parent = nested_data[plot_background.children[i]];
            var start_point = parent.start_point;
            nested_data[plot_background.children[i]] = parent_border_collision_detection(parent, start_point, 0, max_vaf, type);
        }

        adjust_independent_evolution_positions(nested_data, plot_background, num_of_timepoints, type, max_vaf);

        nested_data = reconstruct_data(nested_data, fishplot_svgs);

        //collision detection for children after adjusting the independent evolution positions
        nested_data = adjust_children_positioning(nested_data, num_of_timepoints, type);

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
                    .on('mouseover', function(){
                        moused_over = parseInt(d3.select(this).attr('index'));
                    })
                    .on('mouseleave', function () {
                        d3.select(this).attr('opacity', 1);
                    })
                    .on('contextmenu', function () {
                        d3.event.preventDefault();
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

    function reprompt(sample_timepoints, tick_labels, canvas_nested_data, ten_percent_below_zero,
                      complete_nested_data, plot_background, allele_color_reference, fishplot_svgs, index,
                      canvas_top_line_gen, canvas_bottom_line_gen, canvas_area_between_lines, moused_over, contextMenuFor,
                      contextMenuShowing, contextMenuForPrevious, type, canvas_svg, num_of_timepoints, max_vaf, canvas_range_max_y,
                      canvas_x_axis) {

        d3.select('#save-CCF-button-reprompt').attr('index', index);
        var from_button = d3.select('#save-CCF-button-reprompt').attr('from-button');

        var allele = canvas_nested_data[fishplot_svgs[index]];
            var prompt_ccf = false;
        for (var j = 0; j < allele.values.length; j++) {
            if (allele.values[j].ccf == undefined) {
                prompt_ccf = true;
                var parent_of_this = allele.parent_index_of_this;
                if (parent_of_this == 'plot') {
                    var parent = plot_background;
                }
                else {
                    parent = canvas_nested_data[parent_of_this];
                }
                break;
            }
        }


        if (index == fishplot_svgs.length-1) {
            if(prompt_ccf == true){
                d3.select('#save-CCF-button-reprompt').attr('last-prompt', true);
                if(from_button == true || from_button == 'true') {
                    setTimeout(function(){
                        prompt(sample_timepoints, tick_labels, canvas_nested_data, parent, ten_percent_below_zero,
                            complete_nested_data, plot_background, allele_color_reference,
                            fishplot_svgs, parent_of_this);
                    }, 400);
                    return;
                }
                else{
                    prompt(sample_timepoints, tick_labels, canvas_nested_data, parent, ten_percent_below_zero,
                            complete_nested_data, plot_background, allele_color_reference,
                            fishplot_svgs, parent_of_this);
                    return;
                }
            }
             d3.select('#save-CCF-button-reprompt').attr('last-prompt', false);
            fishplot_plot(canvas_svg, tick_labels, canvas_nested_data, fishplot_svgs, plot_background, num_of_timepoints,
                    canvas_top_line_gen, canvas_bottom_line_gen, canvas_area_between_lines, moused_over, contextMenuFor,
                    contextMenuShowing, contextMenuForPrevious, type, allele_color_reference, max_vaf, canvas_range_max_y,
                      canvas_x_axis);
            return;
        }

            if (prompt_ccf == true) {
                if(from_button == true || from_button == 'true') {
                    setTimeout(function(){
                        prompt(sample_timepoints, tick_labels, canvas_nested_data, parent, ten_percent_below_zero,
                            complete_nested_data, plot_background, allele_color_reference,
                            fishplot_svgs, parent_of_this);
                    }, 400);
                    return;
                }
                prompt(sample_timepoints, tick_labels, canvas_nested_data, parent, ten_percent_below_zero,
                        complete_nested_data, plot_background, allele_color_reference,
                        fishplot_svgs, parent_of_this);
            }

            if(prompt_ccf == false) {
                if(index < fishplot_svgs.length-1){
                    index = index+1;
                    reprompt(sample_timepoints, tick_labels, canvas_nested_data, ten_percent_below_zero,
                      complete_nested_data, plot_background, allele_color_reference, fishplot_svgs, index,
                      canvas_top_line_gen, canvas_bottom_line_gen, canvas_area_between_lines, moused_over, contextMenuFor,
                      contextMenuShowing, contextMenuForPrevious, type, canvas_svg, num_of_timepoints, max_vaf, canvas_range_max_y,
                      canvas_x_axis);
                }
            }
    }