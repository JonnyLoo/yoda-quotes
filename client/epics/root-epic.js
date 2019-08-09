import {combineEpics} from 'redux-observable';
import {yodaEpic} from './yoda-epic';

export default combineEpics(
  yodaEpic
);
