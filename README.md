runkit-plotly
===

Tool module to easily embed [plotly](https://github.com/plotly/plotly.js) charts in a [runkit](https://runkit.com) notebook.

[See working example](https://runkit.com/mamatsunami/runkit-plotly-chart-example)

```
const wrapPlotly = require('runkit-plotly');

var makeChart = wrapPlotly((data, elem, Plotly) => {
    var trace = {
        x: data.x,
        y: data.y,
        mode: 'lines',
        type: 'scatter'
    };

    var data = [trace];

    Plotly.newPlot(elem, data);
});

makeChart(
    {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 9]
    },
    {
        width: 700,
        height: 500
    }
); 
```
