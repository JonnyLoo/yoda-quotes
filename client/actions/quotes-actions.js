import {
  GET_ALL_QUOTES,
  GET_RANDOM_QUOTE
} from '../constants/action-types';

export const getAllQuotes = () => {
  return {
    type: GET_ALL_QUOTES
  };
};

export const getRandomQuote = () => {
  return {
    type: GET_RANDOM_QUOTE
  };
};
