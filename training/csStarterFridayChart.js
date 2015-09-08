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
       .axisLabel('Weight (lbs)');

  chart.forceX([Date.parse('Sep 01, 2015'), Date.parse('Nov 10, 2015')]);
  chart.forceY([125, 275]);

  d3.select('#csStarterFridayChart svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function squatData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Body Weight',
                   values: [
                     { x: Date.parse('Sep 02, 2015'), y: 226 },
                   ]
                 },
                 {
                   key: 'Snatch (1,2,2,2)',
                   values: [
                     { x: Date.parse('Sep 02, 2015'), y: 135 },
                   ]
                 },
                 {
                   key: 'Clean & Jerk (1,2,2,2)',
                   values: [
                     { x: Date.parse('Sep 02, 2015'), y: 185 },
                   ]
                 },
                 {
                   key: 'Back Squat (1,3,3)',
                   values: [
                     { x: Date.parse('Sep 02, 2015'), y: 185 },
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
