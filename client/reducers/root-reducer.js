import {combineReducers} from 'redux';
import quotesReducer from './quotes-reducer';

export default combineReducers({
  quotes: quotesReducer
});
