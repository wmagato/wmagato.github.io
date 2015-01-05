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
  chart.forceY([250]);

  /* Done setting the chart up? Time to render it!*/
  var myData = deadliftData();   //You need data...

  d3.select('#deadliftChart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(myData)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
function deadliftData() {
  var target = [];

  target.push({x: Date.parse('Dec 31, 2014'), y: 260});
  target.push({x: Date.parse('Jan 7, 2015'), y: 270});
  target.push({x: Date.parse('Jan 14, 2015'), y: 280});
  target.push({x: Date.parse('Jan 21, 2015'), y: 290});
  target.push({x: Date.parse('Jan 28, 2015'), y: 300});
  target.push({x: Date.parse('Feb 4, 2015'), y: 310});
  target.push({x: Date.parse('Feb 11, 2015'), y: 320});
  target.push({x: Date.parse('Feb 18, 2015'), y: 330});
  target.push({x: Date.parse('Feb 25, 2015'), y: 340});

  var actual = [];

  actual.push({x: Date.parse('Jan 1, 2015'), y: 260});
  actual.push({x: Date.parse('Jan 5, 2015'), y: 275});

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
