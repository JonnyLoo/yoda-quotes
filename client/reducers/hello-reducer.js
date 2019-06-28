import createReducer from './create-reducer';
import * as ActionTypes from '../constants/action-types';

export const hello = {
  hello: '',
  isFetching: false,
  error: null
};

export default createReducer(hello, {
  [ActionTypes.GET_HELLO]: (state) => {
    return {
      ...state,
      isFetching: true
    };
  },

  [ActionTypes.GET_HELLO_SUCCESS]: (state, payload) => {
    return {
      ...state,
      excuse: payload,
      isFetching: false
    };
  },

  [ActionTypes.GET_HELLO_ERROR]: (state, payload) => {
    return {
      ...state,
      error: payload,
      isFetching: false
    };
  }
});
