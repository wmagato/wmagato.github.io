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

  /* Done setting the chart up? Time to render it!*/
  var myData = olympicData();   //You need data...

  d3.select('#olympicChart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(myData)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
function olympicData() {
  var weight = [];
  var snatch = [];
  var cleanAndJerk = [];
  var clean = [];

  weight.push({x: Date.parse('Dec 23, 2014'), y: 216});
  snatch.push({x: Date.parse('Dec 23, 2014'), y: 165});
  cleanAndJerk.push({x: Date.parse('Dec 23, 2014'), y: 195});
  clean.push({x: Date.parse('Dec 23, 2014'), y: 215});

  weight.push({x: Date.parse('Jan 3, 2015'), y: 216});
  snatch.push({x: Date.parse('Jan 3, 2015'), y: 165});
  cleanAndJerk.push({x: Date.parse('Jan 3, 2015'), y: 175});
  clean.push({x: Date.parse('Jan 3, 2015'), y: 175});

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: weight,
      key: 'Body Weight',
      color: '#cccccc',
    },
    {
      values: snatch,
      key: 'Snatch',
      color: '#2ca02c'
    },
    {
      values: cleanAndJerk,      //values - represents the array of {x,y} data points
      key: 'Clean & Jerk', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
    {
      values: clean,
      key: 'Squat Clean',
      color: '#7777ff',
    },
  ];
}
