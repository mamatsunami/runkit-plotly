/*
 * runkit-plotly — index.js
 * wrapper for plotly to make is easier to embed charts in runkit
 * based off of tonic-d3
 */
 
module.exports = (plotlyFn, options = {}) => {
	const plotlyLocation = 'https://cdn.plot.ly/plotly-latest.min.js';
	options = Object.assign({
		width: 550,
		height: 450,
		style: ''
	}, options);

	return (plotlyArgs) => {
		return `
			<center>
				<style>${options.style}</style>
				<div id="plotly" width=${options.width} height=${options.height}></div>
				<script src="${plotlyLocation}"></script>
				<script>
					(${plotlyFn.toString()})(${JSON.stringify(plotlyArgs)}, "plotly", Plotly)
				</script>
			</center>
		`;
	};
};
