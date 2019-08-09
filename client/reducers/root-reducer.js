import {combineReducers} from 'redux';
import yodaReducer from './yoda-reducer';

export default combineReducers({
  yoda: yodaReducer
});
