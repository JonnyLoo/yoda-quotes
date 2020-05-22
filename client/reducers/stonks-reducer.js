import createReducer from './create-reducer';
import * as ActionTypes from '../constants/action-types';

export const stonks = {
  metadata: {},
  timeSeries: [],
  isFetching: false,
  error: null
};

export default createReducer(stonks, {
  [ActionTypes.GET_STONKS]: (state) => {
    return {
      ...state,
      isFetching: true
    };
  },

  [ActionTypes.GET_STONKS_SUCCESS]: (state, payload) => {
    return {
      ...state,
      metadata: payload.metadata,
      timeSeries: payload.timeSeries,
      isFetching: false
    };
  },

  [ActionTypes.GET_STONKS_ERROR]: (state, payload) => {
    return {
      ...state,
      error: payload,
      isFetching: false
    };
  }
});
