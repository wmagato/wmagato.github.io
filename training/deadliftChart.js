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
  chart.forceY([250]);

  d3.select('#deadliftChart svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function deadliftData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Target',
                   color: '#2ca02c',
                   area: true,
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
                   key: '5RM',
                   color: '#ff7f0e',
                   values: [
                     { x: Date.parse('Jan 01, 2015'), y: 260 },
                     { x: Date.parse('Jan 05, 2015'), y: 275 },
                     { x: Date.parse('Jan 08, 2015'), y: 305 },
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
