import {switchMap, mergeMap, catchError} from 'rxjs/operators';
import {Observable, empty, of} from 'rxjs';
import {ofType} from 'redux-observable';
import {
  GET_STONKS,
  GET_STONKS_SUCCESS,
  GET_STONKS_ERROR
} from '../constants/action-types';
import {API} from './api';

export const getStonksEpic = (action$, state$) => action$.pipe(
  ofType(GET_STONKS),
  switchMap(({ payload }) => {
    const symbol = payload;
    return API.fetchStonks(symbol)
      .pipe(
        mergeMap(result => of({ type: GET_STONKS_SUCCESS, payload: result })),
        catchError(error => of({ type: GET_STONKS_ERROR, payload: error.message }))
      );
  })
);
