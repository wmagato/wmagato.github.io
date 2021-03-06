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

  chart.forceX([Date.parse('Sep 07, 2015'), Date.parse('Jan 29, 2016')]);
//  chart.forceY([75, 275]);

  d3.select('#csStarterMondayChart svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function squatData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: '3-Position Snatch',
                   values: [
                     { x: Date.parse('Sep 08, 2015'), y: 135 },
                     { x: Date.parse('Sep 14, 2015'), y: 145 },
                     { x: Date.parse('Sep 21, 2015'), y: 145 },
                     { x: Date.parse('Sep 28, 2015'), y: 155 },
                     { x: Date.parse('Oct 12, 2015'), y: 135 },
                     { x: Date.parse('Oct 19, 2015'), y: 155 },
                     { x: Date.parse('Oct 26, 2015'), y: 165 },
                     { x: Date.parse('Nov 02, 2015'), y: 135 },
                     { x: Date.parse('Nov 09, 2015'), y: 135 },
                     { x: Date.parse('Nov 23, 2015'), y: 155 },
                     { x: Date.parse('Dec 07, 2015'), y: 155 },
                     { x: Date.parse('Dec 14, 2015'), y: 155 },
                   ]
                 },
                 {
                   key: 'Power Clean',
                   values: [
                     { x: Date.parse('Sep 08, 2015'), y: 205 },
                     { x: Date.parse('Sep 14, 2015'), y: 215 },
                     { x: Date.parse('Sep 21, 2015'), y: 205 },
                     { x: Date.parse('Sep 28, 2015'), y: 185 },
                     { x: Date.parse('Oct 13, 2015'), y: 185 },
                     { x: Date.parse('Oct 20, 2015'), y: 205 },
                     { x: Date.parse('Oct 26, 2015'), y: 205 },
                     { x: Date.parse('Nov 09, 2015'), y: 205 },
                     { x: Date.parse('Nov 23, 2015'), y: 205 },
                     { x: Date.parse('Dec 14, 2015'), y: 205 },
                   ]
                 },
                 {
                   key: 'Back Squat',
                   values: [
                     { x: Date.parse('Sep 08, 2015'), y: 155 },
                     { x: Date.parse('Sep 14, 2015'), y: 205 },
// injured                     { x: Date.parse('Sep 21, 2015'), y: 135 },
// injured                     { x: Date.parse('Sep 28, 2015'), y: 135 },
                     { x: Date.parse('Oct 12, 2015'), y: 185 },
                     { x: Date.parse('Oct 19, 2015'), y: 185 },
                     { x: Date.parse('Oct 20, 2015'), y: 185 },
                     { x: Date.parse('Nov 02, 2015'), y: 225 },
                     { x: Date.parse('Nov 08, 2015'), y: 295 },
                     { x: Date.parse('Nov 24, 2015'), y: 315 },
                     { x: Date.parse('Nov 30, 2015'), y: 315 },
                     { x: Date.parse('Dec 14, 2015'), y: 275 },
                   ]
                 },
                 {
                   key: 'Split Jerk',
                   values: [
                     { x: Date.parse('Sep 08, 2015'), y: 185 },
                     { x: Date.parse('Sep 14, 2015'), y: 205 },
// injured                    { x: Date.parse('Sep 21, 2015'), y: 135 },
                     { x: Date.parse('Oct 13, 2015'), y: 185 },
                     { x: Date.parse('Oct 20, 2015'), y: 245 },
                     { x: Date.parse('Oct 26, 2015'), y: 245 },
                     { x: Date.parse('Nov 03, 2015'), y: 225 },
                     { x: Date.parse('Nov 09, 2015'), y: 225 },
                     { x: Date.parse('Nov 24, 2015'), y: 225 },
                     { x: Date.parse('Nov 30, 2015'), y: 225 },
                     { x: Date.parse('Dec 07, 2015'), y: 225 },
                     { x: Date.parse('Dec 14, 2015'), y: 245 },
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
