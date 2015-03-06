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

  chart.forceX([Date.parse('Dec 22, 2014'), Date.parse('Mar 31, 2015')]);
  chart.forceY([150, 400]);

  d3.select('#barbellChart svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function squatData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Squat 5RM',
                   values: [
                     { x: Date.parse('Dec 29, 2014'), y: 195 },
                     { x: Date.parse('Jan 06, 2015'), y: 225 },
                     { x: Date.parse('Jan 12, 2015'), y: 245 },
                     { x: Date.parse('Jan 21, 2015'), y: 215 },
                     { x: Date.parse('Jan 26, 2015'), y: 255 },
                   ]
                 },
                 {
                   key: 'Squat Target',
                   values: [
                     { x: Date.parse('Dec 29, 2014'), y: 195 },
                     { x: Date.parse('Jan 05, 2015'), y: 205 },
                     { x: Date.parse('Jan 12, 2015'), y: 215 },
                     { x: Date.parse('Jan 19, 2015'), y: 225 },
                     { x: Date.parse('Jan 26, 2015'), y: 235 },
                     { x: Date.parse('Feb 02, 2015'), y: 245 },
                     { x: Date.parse('Feb 09, 2015'), y: 255 },
                     { x: Date.parse('Feb 16, 2015'), y: 265 },
                     { x: Date.parse('Feb 23, 2015'), y: 275 },
                   ]
                 },
                 {
                   key: 'Deadlift 5RM',
                   values: [
                     { x: Date.parse('Jan 01, 2015'), y: 260 },
                     { x: Date.parse('Jan 05, 2015'), y: 275 },
                     { x: Date.parse('Jan 08, 2015'), y: 305 },
                     { x: Date.parse('Jan 14, 2015'), y: 315 },
                     { x: Date.parse('Jan 20, 2015'), y: 335 },
                     { x: Date.parse('Jan 27, 2015'), y: 365 },
                   ]
                 },
                 {
                   key: 'Deadlift Target',
                   values: [
                     { x: Date.parse('Dec 31, 2014'), y: 260 },
                     { x: Date.parse('Jan 07, 2015'), y: 270 },
                     { x: Date.parse('Jan 14, 2015'), y: 280 },
                     { x: Date.parse('Jan 21, 2015'), y: 290 },
                     { x: Date.parse('Jan 28, 2015'), y: 300 },
                     { x: Date.parse('Feb 04, 2015'), y: 310 },
                     { x: Date.parse('Feb 11, 2015'), y: 320 },
                     { x: Date.parse('Feb 18, 2015'), y: 330 },
                     { x: Date.parse('Feb 25, 2015'), y: 340 },
                   ]
                 },
                 {
                   key: 'Clean 1RM',
                   values: [
                     { x: Date.parse('Dec 23, 2014'), y: 215},
                     { x: Date.parse('Jan 03, 2015'), y: 175},
                     { x: Date.parse('Jan 07, 2015'), y: 200},
                   ]
                 },
                 {
                   key: 'Jerk 1RM',
                   values: [
                     { x: Date.parse('Mar 04, 2015'), y: 205},
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
