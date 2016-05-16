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

  chart.forceX([Date.parse('Apr 18, 2016'), Date.parse('Jun 17, 2016')]);
  chart.forceY([0, 600000]);

  d3.select('#spring-fitness svg')       //Select the <svg> element you want to render the chart in.   
      .datum(function crossfitData() {  //Populate the <svg> element with chart data...
               return [
                 {
                   key: '50-Pull-ups',
                   values: [
                     { x: Date.parse('Apr 18, 2016'), y: 470000 },
                     { x: Date.parse('May 02, 2016'), y: 401000 },
                     { x: Date.parse('May 09, 2016'), y: 345000 },
                     { x: Date.parse('May 16, 2016'), y: 311000 },
                   ]
                 },
                 {
                   key: '50-Ring Dips',
                   values: [
                     { x: Date.parse('Apr 20, 2016'), y: 885000 },
                     { x: Date.parse('May 04, 2016'), y: 710000 },
                     { x: Date.parse('May 10, 2016'), y: 575000 },
                   ]
                 },
                 {
                   key: '50-Burpees',
                   values: [
                     { x: Date.parse('May 10, 2016'), y: 548000 },
                   ]
                 },
                 {
//                   key: '55-Deadlifts',
//                   values: [
//                     { x: Date.parse('Feb 09, 2015'), y: 436000 },
//                   ]
//                 },
//                 {
//                   key: '55-Bench Press',
//                   values: [
//                     { x: Date.parse('Feb 09, 2015'), y: 436000 },
//                   ]
//                 },
//                 {
//                   key: '55-Cleans',
//                   values: [
//                     { x: Date.parse('Feb 09, 2015'), y: 436000 },
//                   ]
//                 },
//                 {
//                   key: 'Isobel',
//                   values: [
//                     { x: Date.parse('Feb 09, 2015'), y: 436000 },
//                   ]
//                 },
//                 {
//                   key: 'Grace',
//                   values: [
//                     { x: Date.parse('Feb 09, 2015'), y: 436000 },
//                   ]
//                 },
//                 {
//                   key: 'Annie',
//                   values: [
//                     { x: Date.parse('Feb 09, 2015'), y: 436000 },
//                   ]
//                 },
               ];
             })
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
