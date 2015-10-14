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

  chart.forceX([Date.parse('Sep 07, 2015'), Date.parse('Nov 16, 2015')]);
//  chart.forceY([75, 275]);

  d3.select('#csStarterWednesdayChart svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function squatData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'HS + OHS (5x1)',
                   values: [
                     { x: Date.parse('Sep 09, 2015'), y: 145 },
                     { x: Date.parse('Sep 16, 2015'), y: 155 },
                     { x: Date.parse('Sep 23, 2015'), y: 165 },
                     { x: Date.parse('Sep 30, 2015'), y: 165 },
                     { x: Date.parse('Oct 14, 2015'), y: 170 },
                   ]
                 },
                 {
                   key: '3-Position Clean (10x1)',
                   values: [
                     { x: Date.parse('Sep 09, 2015'), y: 195 },
                     { x: Date.parse('Sep 16, 2015'), y: 210 },
                     { x: Date.parse('Sep 23, 2015'), y: 215 },
                     { x: Date.parse('Sep 30, 2015'), y: 205 },
                     { x: Date.parse('Oct 14, 2015'), y: 230 },
                   ]
                 },
                 {
                   key: 'Front Squat (5x3)',
                   values: [
                     { x: Date.parse('Sep 09, 2015'), y: 185 },
                     { x: Date.parse('Sep 16, 2015'), y: 205 },
                   ]
                 },
                 {
                   key: 'Push Jerk (5x3)',
                   values: [
                     { x: Date.parse('Sep 09, 2015'), y: 95 },
                     { x: Date.parse('Sep 16, 2015'), y: 155 },
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
