/*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
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
  chart.forceY([150]);

  d3.select('#olympicChart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(function () {          //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Body Weight',
                   color: '#cccccc',
                   values: [
                     { x: Date.parse('Dec 23, 2014'), y: 216 },
                     { x: Date.parse('Jan 3, 2015'),  y: 216 },
                   ]
                 },
                 {
                   key: 'Snatch',
                   color: '#2ca02c',
                   values: [
                     { x: Date.parse('Dec 23, 2014'), y: 165},
                     { x: Date.parse('Jan 3, 2015'),  y: 165},
                   ]
                 },
                 {
                   key: 'Clean & Jerk',
                   color: '#ff7f0e',
                   values: [
                     { x: Date.parse('Dec 23, 2014'), y: 195},
                     { x: Date.parse('Jan 3, 2015'),  y: 175},
                   ]
                 },
                 {
                   key: 'Squat Clean',
                   color: '#7777ff',
                   values: [
                     { x: Date.parse('Dec 23, 2014'), y: 215},
                     { x: Date.parse('Jan 3, 2015'),  y: 175},
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
