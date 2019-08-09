import {switchMap, mergeMap, catchError} from 'rxjs/operators';
import {Observable, empty, of} from 'rxjs';
import {ofType} from 'redux-observable';
import {
  GET_YODISH,
  GET_YODISH_SUCCESS,
  GET_YODISH_ERROR
} from '../constants/action-types';
import {API} from './api';

export const yodaEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_YODISH),
    switchMap(() => {
      return API.fetchYodaQuote(state$)
        .pipe(
          mergeMap(result => {
            return of({type: GET_YODISH_SUCCESS, payload: result});
          }),
          catchError(error => {
            console.log(error.message);
            return of({type: GET_YODISH_ERROR, payload: error.message});
          })
        );
    }),
  );
