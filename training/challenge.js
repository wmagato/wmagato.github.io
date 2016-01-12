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
       .axisLabel('Points');

  chart.forceX([Date.parse('Jan 11, 2016'), Date.parse('Mar 07, 2016')]);
//  chart.forceY([75, 275]);

  d3.select('#challenge svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function challengeData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   // 2 points for each rep
                   // 3 extra points for every 10 reps
                   // 5 extra points for every 25 reps
                   // 10 extra points for every 50 reps
                   key: 'Push-ups',
                   values: [
                     { x: Date.parse('Jan 11, 2016'), y: 42+3+3+3+3+5 },
                   ]
                 },
                 {
                   // 2 points for each rep
                   // 3 extra points for every 10 reps
                   // 5 extra points for every 25 reps
                   // 10 extra points for every 50 reps
                   key: 'Squats',
                   values: [
                     { x: Date.parse('Jan 11, 2016'), y: 0 },
                   ]
                 },
                 {
                   // 1 point for every 15 seconds
                   // 3 extra points for every 60 seconds
                   // 10 extra points for every 5 minutes
                   key: 'Wall-sits',
                   values: [
                     { x: Date.parse('Jan 11, 2016'), y: 0 },
                   ]
                 },
                 {
                   key: 'Pillars',
                   values: [
                     { x: Date.parse('Jan 11, 2016'), y: 0 },
                   ]
                 },
                 {
                   // 2 points for each pound and 1% lost
                   // 5 extra points for every 5 pounds and 5% lost
                   // 10 extra points for every 10 pounds and 10% lost
                   // started at 231.4
                   key: 'Weight-loss',
                   values: [
                     { x: Date.parse('Jan 11, 2016'), y: 0 },
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
