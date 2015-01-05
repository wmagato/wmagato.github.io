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
      .tickFormat(function(d) {
            return d3.time.format("%M:%S")(new Date(d))
          });
  chart.forceY([0]);

  /* Done setting the chart up? Time to render it!*/
  var myData = crossfitData();   //You need data...

  d3.select('#crossfitChart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(myData)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
function crossfitData() {
  var plank = [];

  plank.push({x: Date.parse('Dec 29, 2014'), y: 60000});
  plank.push({x: Date.parse('Jan 1, 2015'), y: 65000});
  plank.push({x: Date.parse('Jan 3, 2015'), y: 70000});
  plank.push({x: Date.parse('Jan 5, 2015'), y: 75000});

  var burpees = [];

//  burpees.push({x: Date.parse('Oct 8, 2014'), y: 379000});
  burpees.push({x: Date.parse('Jan 2, 2015'), y: 359000});

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: plank,
      key: 'Plank',
      color: '#2ca02c'
    },
    {
      values: burpees,      //values - represents the array of {x,y} data points
      key: '50-Burpees', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
  ];
}
