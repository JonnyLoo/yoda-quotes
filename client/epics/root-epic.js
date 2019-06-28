import {combineEpics} from 'redux-observable';
import {helloEpic} from './hello-epic';

export default combineEpics(
  helloEpic
);
