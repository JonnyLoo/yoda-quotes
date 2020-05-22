import {combineReducers} from 'redux';
import quotesReducer from './quotes-reducer';
import stonksReducer from './stonks-reducer';

export default combineReducers({
  quotes: quotesReducer,
  stonks: stonksReducer
});
