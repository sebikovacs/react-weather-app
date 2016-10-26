/* global Plotly */
import React from 'react';

class Plot extends React.Component {
  drawPlot = () => {
    Plotly.newPlot('plot', [{
      x: this.props.xData,
      y: this.props.yData,
      type: this.props.type,
    },
  ], {
      margin: {
        t: 0, r: 0, l: 30,
      },
      xaxis: {
        gridcolor: 'transparent',
      },
    }, {
      displayModeBar: false,
    });

    document.getElementById('plot').on('plotly_click', this.props.onPlotClick)

  };

  componentDidUpdate () {
    this.drawPlot()
  }

  componentDidMount () {
    this.drawPlot()
  }

  render () {
    return (
      <div id="plot"></div>
    );
  }
}

export default Plot;
