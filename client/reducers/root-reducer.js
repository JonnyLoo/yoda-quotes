import {combineReducers} from 'redux';
import helloReducer from './hello-reducer';

export default combineReducers({
  hello: helloReducer
});
