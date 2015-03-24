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
      .tickFormat(function(d) {
            return d3.time.format("%M:%S")(new Date(d))
          });

  chart.forceX([Date.parse('Dec 22, 2014'), Date.parse('Mar 31, 2015')]);
  chart.forceY([0, 600000]);

  d3.select('#fitnessChart svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function crossfitData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Plank',
                   values: [
                     { x: Date.parse('Dec 29, 2014'), y: 60000 },
                     { x: Date.parse('Jan 01, 2015'), y: 65000 },
                     { x: Date.parse('Jan 03, 2015'), y: 70000 },
                     { x: Date.parse('Jan 05, 2015'), y: 75000 },
                     { x: Date.parse('Jan 08, 2015'), y: 80000 },
                     { x: Date.parse('Jan 16, 2015'), y: 85000 },
                   ]
                 },
                 {
                   key: '50-Burpees',
                   values: [
                     { x: Date.parse('Jan 02, 2015'), y: 359000 },
                     { x: Date.parse('Jan 09, 2015'), y: 415000 },
                     { x: Date.parse('Mar 06, 2015'), y: 340000 },
                     { x: Date.parse('Mar 24, 2015'), y: 338000 },
                   ]
                 },
                 {
                   key: '50-Ring Dips',
                   values: [
                     { x: Date.parse('Jan 29, 2015'), y: 462000 },
                     { x: Date.parse('Feb 13, 2015'), y: 505000 },
                     { x: Date.parse('Feb 25, 2015'), y: 447000 },
                     { x: Date.parse('Mar 03, 2015'), y: 477000 },
                     { x: Date.parse('Mar 18, 2015'), y: 384000 },
                   ]
                 },
                 {
                   key: '50-Pull-ups',
                   values: [
                     { x: Date.parse('Feb 09, 2015'), y: 436000 },
                     { x: Date.parse('Feb 16, 2015'), y: 467000 },
                     { x: Date.parse('Feb 23, 2015'), y: 350000 },
                     { x: Date.parse('Mar 05, 2015'), y: 317000 },
                     { x: Date.parse('Mar 15, 2015'), y: 319000 },
                   ]
                 },
//                 {
//                   key: '50\'s-Combined',
//                   values: [
//                     { x: Date.parse('Mar 06, 2015'), y: 1577000 },
//                     { x: Date.parse('Mar 13, 2015'), y: 1550000 },
//                   ]
//                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
