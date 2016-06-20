nv.addGraph(function() {
    chart = nv.models.lineChart()
        .options({
            duration: 300,
            useInteractiveGuideline: true
        })
    ;

    // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
    chart.xAxis
        .axisLabel("Days")
//        .staggerLabels(true)
    ;

    chart.yAxis
        .axisLabel('Time (s)')
    ;

    chart.forceY([0, 300]);

    data = plankTimes();

    d3.select('#plank').append('svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});

function plankTimes() {
    return [
        {
            area: true,
            key: "Target",
            values: [
                { x: 1, y: 20 },
                { x: 2, y: 20 },
                { x: 3, y: 30 },
                { x: 4, y: 30 },
                { x: 5, y: 40 },
                { x: 7, y: 45 },
                { x: 8, y: 45 },
                { x: 9, y: 60 },
            ]
        },
    ];
}
