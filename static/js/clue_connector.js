const prov = phovea.core.provenance;

function addCLUEFish(inputs, parameter) {
  return inputs[0].v.then((elem) => {
    const old = elem.innerText;
    elem.innerText = parameter.text;
    return {
      inverse: createAddCLUEFish(inputs[0], old)
    };
  });
}

function createAddCLUEFish(outputRef, text) {
  return prov.action(prov.meta('change text', prov.cat.visual, prov.op.update), 'addCLUEFish', addCLUEFish, [outputRef], {
    text: text
  });
}

const global_history = prov.createDummy();

$(() => {
  const g = prov.createDummy();
  const main = document.querySelector('#canvas_div');
  // create or recreate the dynamic reference
  // TODO: not sure what elements to choose here
  const outputRef = g.findOrAddObject(document.querySelector('#canvas_div'), 'output', prov.cat.data);

  // I've put the g.push and the g.undo deep inside.

  // main.querySelector('button').addEventListener('click', () => {
  //   const newText = main.querySelector('input').value;
  //   g.push(createSetCLUEHelloWorldText(outputRef, newText));
  // });
  // document.querySelector('#undo').addEventListener('click', () => {
  //   g.undo();
  // });
});

function draw_fish(moused_over, canvas_nested_data, mini_fishplot, should_update_vaf_scale,
                   plot_background, canvas_y_scale, num_of_timepoints, start, groups, fishplot_svgs,
                   scope, canvas_svg, canvas_top_line_gen, canvas_bottom_line_gen, canvas_area_between_lines) {
  alert('moused_over? '+moused_over);
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
                    console.log('enter '+moused_over);
                })
                .on('mouseover', function () {
                    moused_over = parseInt(d3.select(this).attr('index'));
                  console.log('over '+moused_over);
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
    alert('on canvas?');
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
                    console.log('else enter '+moused_over)
                  })
                  .on('mouseover', function () {
                      moused_over = parseInt(d3.select(this).attr('index'));
                    console.log('else over '+moused_over)
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
      alert('on fish?');
  }

  // These are set inside the if-then above
  // console.log(fishplot_svgs); // Array of indices currently displayed
  // console.log(fishplot_data); // {allele: 'allele-name', freqs: [24, 42]}
  // TODO
  alert('TODO: CLUE add fishplot');
  const outputRef = global_history.findOrAddObject(document.querySelector('#canvas_div'), 'output', prov.cat.data);
  // This push itself takes care of updating the display: it needs to be inside the if-else.
  //global_history.push(createAddCLUEFish(outputRef, 'state-goes-here'));
}