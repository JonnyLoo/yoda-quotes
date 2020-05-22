import {
  GET_ALL_QUOTES,
  GET_RANDOM_QUOTE,
  GET_STONKS
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

export const getStonks = (symbol) => {
  return {
    type: GET_STONKS,
    payload: symbol
  };
};
