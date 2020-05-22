import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import LineChart from './line-chart';
import * as Actions from '../actions';

export class StonksPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getStonks('SPY');
  }

  render() {
    return (
      <div className='stonks-page'>
        <LineChart metadata={this.props.metadata} timeSeries={this.props.timeSeries}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    metadata: state.stonks.metadata,
    timeSeries: state.stonks.timeSeries,
    isFetching: state.stonks.isFetching,
    error: state.stonks.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      Actions
    ),
    dispatch
  );
};

StonksPage.propTypes = {
  getStonks: PropTypes.func,
  metadata: PropTypes.object,
  timeSeries: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(StonksPage);
