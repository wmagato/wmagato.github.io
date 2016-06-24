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

  chart.forceX([Date.parse('Apr 18, 2016'), Date.parse('Jun 17, 2016')]);
//  chart.forceY([150, 400]);

  d3.select('#spring-barbell svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function squatData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Snatch',
                   values: [
                     { x: Date.parse('Apr 18, 2016'), y: 165 },
                     { x: Date.parse('May 06, 2016'), y: 175 },
                     { x: Date.parse('May 09, 2016'), y: 165 },
                     { x: Date.parse('May 20, 2016'), y: 165 },
                     { x: Date.parse('May 25, 2016'), y: 175 },
                     { x: Date.parse('Jun 24, 2016'), y: 180 },
                   ]
                 },
                 {
                   key: 'Clean',
                   values: [
                     { x: Date.parse('Apr 28, 2016'), y: 245 },
                     { x: Date.parse('May 05, 2016'), y: 245 },
                     { x: Date.parse('May 11, 2016'), y: 245 },
                   ]
                 },
                 {
                   key: 'Jerk',
                   values: [
                     { x: Date.parse('Apr 19, 2016'), y: 225 },
                     { x: Date.parse('May 10, 2016'), y: 245 },
                   ]
                 },
                 {
                   key: 'Clean & Jerk',
                   values: [
                     { x: Date.parse('May 06, 2016'), y: 225 },
                     { x: Date.parse('May 20, 2016'), y: 225 },
                     { x: Date.parse('Jun 24, 2016'), y: 225 },
                   ]
                 },
//                 {
//                   key: 'Overhead Squat (3RM)',
//                   values: [
//                     { x: Date.parse('Sep 02, 2015'), y: 185 },
//                   ]
//                 },
//                 {
//                   key: 'Front Squat (3RM)',
//                   values: [
//                     { x: Date.parse('Sep 02, 2015'), y: 185 },
//                   ]
//                 },
                 {
                   key: 'Back Squat (3RM)',
                   values: [
                     { x: Date.parse('Apr 18, 2016'), y: 295 },
                     { x: Date.parse('May 09, 2016'), y: 295 },
                   ]
                 },
//                 {
//                   key: 'Deadlift (5RM)',
//                   values: [
//                     { x: Date.parse('Sep 02, 2015'), y: 185 },
//                   ]
//                 },
                 {
                   key: 'Body Weight',
                   color: '#0f0f0f',
                   values: [
                     { x: Date.parse('Apr 18, 2016'), y: 239 },
                     { x: Date.parse('Apr 19, 2016'), y: 238 },
                     { x: Date.parse('May 05, 2016'), y: 241 },
                     { x: Date.parse('May 06, 2016'), y: 239 },
                     { x: Date.parse('May 09, 2016'), y: 239 },
                     { x: Date.parse('May 11, 2016'), y: 241 },
                     { x: Date.parse('May 16, 2016'), y: 237 },
                     { x: Date.parse('May 20, 2016'), y: 237 },
                     { x: Date.parse('May 25, 2016'), y: 239 },
                     { x: Date.parse('Jun 24, 2016'), y: 241 },
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
