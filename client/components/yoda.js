import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as YodaActions from '../actions/yoda-actions';

export class Yoda extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getYodish();
  }

  render() {
    if(this.props.isFetching) {
      return <div className='center'>{'Loading...'}</div>;
    }

    return <div className='center'>{!this.props.error && this.props.yodish ? this.props.yodish : 'Hello'}</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    english: state.yoda.english,
    yodish: state.yoda.yodish,
    isFetching: state.yoda.isFetching,
    error: state.yoda.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      YodaActions
    ),
    dispatch
  );
};

Yoda.propTypes = {
  yoda: PropTypes.object,
  getYodish: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Yoda);
