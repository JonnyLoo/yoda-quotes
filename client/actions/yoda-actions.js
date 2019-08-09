import { GET_YODISH } from '../constants/action-types';

export const getYodish = () => {
  return {
    type: GET_YODISH
  };
};

export const updateText = (text) => {
  return {
    type: UPDATE_TEXT,
    payload: text
  };
};
