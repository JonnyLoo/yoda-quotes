import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import moment from 'moment';

export class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.createChart = this.createChart.bind(this);
  }

  createChart() {
    const element = this.element;

    const timeDiff = (time) => {
      const startOfDay = moment().hour(9).minute(30).second(0);
      const diff = moment(time).diff(startOfDay, 'minutes');

      return diff;
    };

    const timeSeries = this.props.timeSeries.filter(d => timeDiff(d.date) >= 0);

    const maxX = d3.max(timeSeries, d => timeDiff(d.date));
    const minY = d3.min(timeSeries, d => d.price);
    const maxY = d3.max(timeSeries, d => d.price);

    const xScale = d3.scaleLinear()
      .domain([0, maxX])
      .range([0, 900]);

    const yScale = d3.scaleLinear()
      .domain([minY, maxY])
      .range([650, 50]);

    const line = d3.line()
      .curve(d3.curveStep)
      // .curve(d3.curveBasis)
      .x(d => xScale(timeDiff(d.date)))
      .y(d => yScale(d.price));

    const pathStr = line(timeSeries);

    if (pathStr) {
      d3.select(element)
        .append('path')
        .attr('transform', 'translate(50, 0)')
        .attr('d', pathStr);

      // d3.select(element)
      //   .append('g')
      //   .attr('transform', 'translate(50, 0)')
      //   .call(d3.axisLeft(yScale).tickSizeOuter(0));
    }
  }

  componentDidMount() {
    this.createChart();
  }

  componentDidUpdate() {
    this.createChart();
  }

  render() {
    return (
      <div>
        <div className='chart-title'>{ this.props.metadata.symbol }</div>
        <svg ref={element => this.element = element} width={1000} height={650}></svg>
      </div>
    );
  }
};

LineChart.propTypes = {
  metadata: PropTypes.object,
  timeSeries: PropTypes.array
};

export default LineChart;
