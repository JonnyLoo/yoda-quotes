import {switchMap, mergeMap} from 'rxjs/operators';
import {Observable, empty, of} from 'rxjs';
import {ofType} from 'redux-observable';
import {
  GET_HELLO,
  GET_HELLO_SUCCESS,
  GET_HELLO_ERROR
} from '../constants/action-types';
import {API} from './api';

export const helloEpic = (action$, store) =>
  action$.pipe(
    ofType(GET_HELLO),
    switchMap(() => {
      return API.fetchGreeting(store);
    }),
    mergeMap(result => {
      return of({type: GET_HELLO_SUCCESS, payload: result});
    })
  );
