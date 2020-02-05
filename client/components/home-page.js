import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as QuotesActions from '../actions/quotes-actions';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllQuotes();
  }

  render() {
    if(this.props.isFetching) {
      return <div className='loading-title'>{'Loading...'}</div>;
    }

    return <div className='title'>{!this.props.error && this.props.quotesList.length > 0 ? this.props.quotesList[0].yodish : 'Error'}</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    quotesList: state.quotes.list,
    isFetching: state.quotes.isFetching,
    error: state.quotes.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      QuotesActions
    ),
    dispatch
  );
};

HomePage.propTypes = {
  quotesList: PropTypes.array,
  getAllQuotes: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
