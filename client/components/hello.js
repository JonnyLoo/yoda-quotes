import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as HelloActions from '../actions/hello-actions';

export class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getHello();
  }

  render() {
    return (
      <div className='center'>{this.props.hello.isFetching || !this.props.greeting ? 'Loading...' : this.props.greeting}</div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    hello: state.hello,
    greeting: state.hello.greeting
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      HelloActions
    ),
    dispatch
  );
};

Hello.propTypes = {
  hello: PropTypes.object,
  getHello: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
