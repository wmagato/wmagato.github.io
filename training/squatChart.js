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
  chart.forceY([190]);

  d3.select('#squatChart svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function squatData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Target',
                   color: '#2ca02c',
                   area: true,
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
                   key: '5RM',
                   color: '#ff7f0e',
                   values: [
                     { x: Date.parse('Dec 29, 2014'), y: 195 },
                     { x: Date.parse('Jan 06, 2014'), y: 225 },
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
