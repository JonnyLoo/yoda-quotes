import createReducer from './create-reducer';
import * as ActionTypes from '../constants/action-types';

export const yoda = {
  english: 'Hello',
  yodish: '',
  isFetching: false,
  error: null
};

export default createReducer(yoda, {
  [ActionTypes.UPDATE_TEXT]: (state, payload) => {
    return {
      ...state,
      english: payload
    };
  },

  [ActionTypes.GET_YODISH]: (state) => {
    return {
      ...state,
      isFetching: true
    };
  },

  [ActionTypes.GET_YODISH_SUCCESS]: (state, payload) => {
    return {
      ...state,
      yodish: payload,
      isFetching: false
    };
  },

  [ActionTypes.GET_YODISH_ERROR]: (state, payload) => {
    return {
      ...state,
      error: payload,
      isFetching: false
    };
  }
});
