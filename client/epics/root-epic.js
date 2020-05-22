import {combineEpics} from 'redux-observable';
import {
  getAllQuotesEpic,
  getRandomQuoteEpic
} from './quotes-epic';
import {
  getStonksEpic
} from './stonks-epic';

export default combineEpics(
  getAllQuotesEpic,
  getRandomQuoteEpic,
  getStonksEpic
);
