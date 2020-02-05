import {combineEpics} from 'redux-observable';
import {quotesEpic} from './quotes-epic';

export default combineEpics(
  quotesEpic
);
