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
  chart.forceY([0, 400]);

  d3.select('#squatsChart svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function squatData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Overhead',
                   values: [
                     { x: Date.parse('Nov 20, 2015'), y: 185 },
                     { x: Date.parse('Dec 04, 2015'), y: 205 },
                     { x: Date.parse('Dec 11, 2015'), y: 175 },
                     { x: Date.parse('Dec 15, 2015'), y: 185 },
                     { x: Date.parse('Dec 18, 2015'), y: 195 },
                   ]
                 },
                 {
                   key: 'Front',
                   values: [
                     { x: Date.parse('Nov 20, 2015'), y: 275 },
                     { x: Date.parse('Dec 04, 2015'), y: 275 },
                     { x: Date.parse('Dec 11, 2015'), y: 275 },
                     { x: Date.parse('Dec 15, 2015'), y: 285 },
                     { x: Date.parse('Dec 18, 2015'), y: 275 },
                   ]
                 },
                 {
                   key: 'Back',
                   values: [
                     { x: Date.parse('Nov 20, 2015'), y: 295 },
                     { x: Date.parse('Dec 04, 2015'), y: 315 },
                     { x: Date.parse('Dec 11, 2015'), y: 295 },
                     { x: Date.parse('Dec 15, 2015'), y: 315 },
                     { x: Date.parse('Dec 18, 2015'), y: 305 },
                   ]
                 },
                 {
                   key: 'Body Weight',
                   color: '#0f0f0f',
                   values: [
                     { x: Date.parse('Nov 20, 2015'), y: 231 },
                     { x: Date.parse('Dec 04, 2015'), y: 232 },
                     { x: Date.parse('Dec 11, 2015'), y: 228 },
                     { x: Date.parse('Dec 15, 2015'), y: 229 },
                     { x: Date.parse('Dec 18, 2015'), y: 228 },
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
