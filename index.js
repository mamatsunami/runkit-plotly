/*
 * runkit-plotly — index.js
 * wrapper for plotly to make is easier to embed charts in runkit
 * based off of tonic-d3
 */
 
module.exports = (plotlyFn, options = {}) => {
	const plotlyLocation = 'https://cdn.plot.ly/plotly-latest.min.js';
	const id = Math.random().toString(36).substr(2, 10);
	options = Object.assign({
		width: 550,
		height: 450,
		style: ''
	}, options);

	return (plotlyArgs) => {
		return `
			<center>
				<style>${options.style}</style>
				<div id="plotly-${id}" width=${options.width} height=${options.height}></div>
				<script src="${plotlyLocation}"></script>
				<script>
					(${plotlyFn.toString()})(${JSON.stringify(plotlyArgs)}, "plotly-${id}", Plotly)
				</script>
			</center>
		`;
	};
};
