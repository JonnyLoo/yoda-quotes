import {combineEpics} from 'redux-observable';
import {
  getAllQuotesEpic,
  getRandomQuoteEpic
} from './quotes-epic';

export default combineEpics(
  getAllQuotesEpic,
  getRandomQuoteEpic
);
