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
  chart.forceY([190]);

  /* Done setting the chart up? Time to render it!*/
  var myData = squatData();   //You need data...

  d3.select('#squatChart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(myData)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
function squatData() {
  var target = [];

  target.push({x: Date.parse('Dec 29, 2014'), y: 195});
  target.push({x: Date.parse('Jan 5, 2015'), y: 205});
  target.push({x: Date.parse('Jan 12, 2015'), y: 215});
  target.push({x: Date.parse('Jan 19, 2015'), y: 225});
  target.push({x: Date.parse('Jan 26, 2015'), y: 235});
  target.push({x: Date.parse('Feb 2, 2015'), y: 245});
  target.push({x: Date.parse('Feb 9, 2015'), y: 255});
  target.push({x: Date.parse('Feb 16, 2015'), y: 265});
  target.push({x: Date.parse('Feb 23, 2015'), y: 275});

  var actual = [];

  actual.push({x: Date.parse('Dec 29, 2014'), y: 195});

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: target,
      key: 'Target',
      color: '#2ca02c',
      area: true      //area - set to true if you want this line to turn into a filled area chart.
    },
    {
      values: actual,      //values - represents the array of {x,y} data points
      key: '5RM', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
  ];
}
