/*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .margin({ left: 100, right: 100 })  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                .transitionDuration(350)  //how fast do you want the lines to transition?
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
  ;

  chart.xAxis     //Chart x-axis settings
      .tickFormat(function(d) {
            return d3.time.format("%b-%d")(new Date(d))
          });

  chart.yAxis     //Chart y-axis settings
      .tickFormat(function(d) {
            return d3.time.format("%M:%S")(new Date(d))
          });
  chart.forceY([0, 600000]);

  d3.select('#crossfitChart svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function crossfitData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Isabel',
                   color: '#2ca02c',
                   values: [
                     { x: Date.parse('Jan 06, 2015'), y: 502000 },
                     { x: Date.parse('Jan 09, 2015'), y: 355000 },
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
