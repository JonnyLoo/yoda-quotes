import createReducer from './create-reducer';
import * as ActionTypes from '../constants/action-types';

export const quotes = {
  list: [],
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
      list: payload,
      isFetching: false
    };
  },

  [ActionTypes.GET_ALL_QUOTES_ERROR]: (state, payload) => {
    return {
      ...state,
      error: payload,
      isFetching: false
    };
  }
});
