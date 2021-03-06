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
//  chart.forceY([125, 275]);

  d3.select('#csStarterFridayChart svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function squatData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Snatch',
                   values: [
//                     { x: Date.parse('Sep 02, 2015'), y: 135 },
                     { x: Date.parse('Sep 11, 2015'), y: 165 },
                     { x: Date.parse('Sep 18, 2015'), y: 175 },
                     { x: Date.parse('Sep 25, 2015'), y: 175 },
                     { x: Date.parse('Oct 04, 2015'), y: 175 },
                     { x: Date.parse('Oct 16, 2015'), y: 175 },
                     { x: Date.parse('Nov 06, 2015'), y: 180 },
                     { x: Date.parse('Nov 16, 2015'), y: 175 },
                   ]
                 },
                 {
                   key: 'Clean & Jerk',
                   values: [
//                     { x: Date.parse('Sep 02, 2015'), y: 185 },
                     { x: Date.parse('Sep 11, 2015'), y: 205 },
                     { x: Date.parse('Sep 18, 2015'), y: 215 },
                     { x: Date.parse('Sep 25, 2015'), y: 215 },
                     { x: Date.parse('Nov 06, 2015'), y: 205 },
                     { x: Date.parse('Nov 16, 2015'), y: 225 },
                   ]
                 },
                 {
                   key: 'Back Squat',
                   values: [
//                     { x: Date.parse('Sep 02, 2015'), y: 185 },
                     { x: Date.parse('Sep 18, 2015'), y: 225 },
                     { x: Date.parse('Nov 16, 2015'), y: 325 },
                   ]
                 },
                 {
                   key: 'Body Weight',
                   color: '#0f0f0f',
                   values: [
//                     { x: Date.parse('Sep 02, 2015'), y: 226 },
                     { x: Date.parse('Sep 11, 2015'), y: 228 },
                     { x: Date.parse('Sep 18, 2015'), y: 230 },
                     { x: Date.parse('Sep 25, 2015'), y: 231 },
                     { x: Date.parse('Oct 04, 2015'), y: 230 },
                     { x: Date.parse('Nov 06, 2015'), y: 234 },
                     { x: Date.parse('Nov 16, 2015'), y: 232 },
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
