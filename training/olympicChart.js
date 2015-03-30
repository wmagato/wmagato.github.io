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
  chart.forceY([150, 250]);

  d3.select('#olympicChart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(function () {          //Populate the <svg> element with chart data...
               return [
                 {
                   key: 'Body Weight',
                   values: [
                     { x: Date.parse('Dec 23, 2014'), y: 216 },
                     { x: Date.parse('Jan 03, 2015'), y: 216 },
                     { x: Date.parse('Jan 07, 2015'), y: 219 },
                     { x: Date.parse('Jan 20, 2015'), y: 219 },
                     { x: Date.parse('Jan 27, 2015'), y: 222 },
                     { x: Date.parse('Mar 03, 2015'), y: 216 },
                     { x: Date.parse('Mar 09, 2015'), y: 214 },
                     { x: Date.parse('Mar 15, 2015'), y: 219 },
                     { x: Date.parse('Mar 18, 2015'), y: 221},
                     { x: Date.parse('Mar 23, 2015'), y: 217 },
                     { x: Date.parse('Mar 30, 2015'), y: 222 },
                   ]
                 },
                 {
                   key: 'Snatch',
                   values: [
                     { x: Date.parse('Dec 23, 2014'), y: 165},
                     { x: Date.parse('Jan 03, 2015'), y: 165},
                     { x: Date.parse('Jan 07, 2015'), y: 170},
                     { x: Date.parse('Jan 16, 2015'), y: 175},
//                     { x: Date.parse('Mar 15, 2015'), y: 125},
                     { x: Date.parse('Mar 18, 2015'), y: 165},
                     { x: Date.parse('Mar 23, 2015'), y: 165},
                     { x: Date.parse('Mar 30, 2015'), y: 170},
                   ]
                 },
                 {
                   key: 'Clean & Jerk',
                   values: [
                     { x: Date.parse('Dec 23, 2014'), y: 195},
                     { x: Date.parse('Jan 03, 2015'), y: 175},
                     { x: Date.parse('Jan 07, 2015'), y: 200},
                     { x: Date.parse('Jan 16, 2015'), y: 195},
  //                   { x: Date.parse('Mar 15, 2015'), y: 125},
                     { x: Date.parse('Mar 18, 2015'), y: 185},
                     { x: Date.parse('Mar 23, 2015'), y: 215},
                     { x: Date.parse('Mar 30, 2015'), y: 195},
                   ]
                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
