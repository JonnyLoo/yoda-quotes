import {switchMap} from 'rxjs/operators';
import {empty} from 'rxjs/observable/empty';
import {Observable} from '../../node_modules/rxjs/Observable';
import {ofType} from 'redux-observable';
import {
  GET_HELLO,
  GET_HELLO_SUCCESS,
  GET_HELLO_ERROR
} from '../constants/action-types';

export const helloEpic = (action$, store) =>
  action$.pipe(
    ofType(GET_HELLO),
    switchMap((payload) => {
      return empty();
    })
  );
