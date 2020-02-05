import {switchMap, mergeMap, catchError} from 'rxjs/operators';
import {Observable, empty, of} from 'rxjs';
import {ofType} from 'redux-observable';
import {
  GET_ALL_QUOTES,
  GET_ALL_QUOTES_SUCCESS,
  GET_ALL_QUOTES_ERROR
} from '../constants/action-types';
import {API} from './api';

export const quotesEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_ALL_QUOTES),
    switchMap(() => {
      return API.fetchAllQuotes(state$)
        .pipe(
          mergeMap(result => {
            return of({type: GET_ALL_QUOTES_SUCCESS, payload: result});
          }),
          catchError(error => {
            return of({type: GET_ALL_QUOTES_ERROR, payload: error.message});
          })
        );
    }),
  );
