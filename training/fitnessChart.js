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

  d3.select('#fitnessChart svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function crossfitData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Plank',
                   color: '#2ca02c',
                   values: [
                     { x: Date.parse('Dec 29, 2014'), y: 60000 },
                     { x: Date.parse('Jan 01, 2015'), y: 65000 },
                     { x: Date.parse('Jan 03, 2015'), y: 70000 },
                     { x: Date.parse('Jan 05, 2015'), y: 75000 },
                     { x: Date.parse('Jan 08, 2015'), y: 80000 },
                   ]
                 },
                 {
                   key: '50-Burpees',
                   color: '#ff7f0e',
                   values: [
                     { x: Date.parse('Jan 02, 2015'), y: 359000 },
                     { x: Date.parse('Jan 09, 2015'), y: 415000 },
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
