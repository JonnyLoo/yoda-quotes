import createReducer from './create-reducer';
import * as ActionTypes from '../constants/action-types';

export const quotes = {
  allQuotes: [],
  randomQuote: {},
  isFetching: false,
  error: null
};

export default createReducer(quotes, {
  [ActionTypes.GET_ALL_QUOTES]: (state) => {
    return {
      ...state,
      isFetching: true
    };
  },

  [ActionTypes.GET_ALL_QUOTES_SUCCESS]: (state, payload) => {
    return {
      ...state,
      allQuotes: payload,
      isFetching: false
    };
  },

  [ActionTypes.GET_ALL_QUOTES_ERROR]: (state, payload) => {
    return {
      ...state,
      error: payload,
      isFetching: false
    };
  },

  [ActionTypes.GET_RANDOM_QUOTE]: (state) => {
    return {
      ...state,
      isFetching: true
    };
  },

  [ActionTypes.GET_RANDOM_QUOTE_SUCCESS]: (state, payload) => {
    return {
      ...state,
      randomQuote: payload,
      isFetching: false
    };
  },

  [ActionTypes.GET_RANDOM_QUOTE_ERROR]: (state, payload) => {
    return {
      ...state,
      error: payload,
      isFetching: false
    };
  }
});
