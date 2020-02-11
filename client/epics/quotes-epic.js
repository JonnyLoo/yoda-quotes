import {switchMap, mergeMap, catchError} from 'rxjs/operators';
import {Observable, empty, of} from 'rxjs';
import {ofType} from 'redux-observable';
import {
  GET_ALL_QUOTES,
  GET_ALL_QUOTES_SUCCESS,
  GET_ALL_QUOTES_ERROR,
  GET_RANDOM_QUOTE,
  GET_RANDOM_QUOTE_SUCCESS,
  GET_RANDOM_QUOTE_ERROR
} from '../constants/action-types';
import {API} from './api';

export const getAllQuotesEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_ALL_QUOTES),
    switchMap(() => {
      return API.fetchAllQuotes()
        .pipe(
          mergeMap(result => {
            return of({ type: GET_ALL_QUOTES_SUCCESS, payload: result });
          }),
          catchError(error => {
            return of({ type: GET_ALL_QUOTES_ERROR, payload: error.message });
          })
        );
    })
  );

export const getRandomQuoteEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_RANDOM_QUOTE),
    switchMap(() => {
      return API.fetchRandomQuote()
        .pipe(
          mergeMap(result => {
            return of({ type: GET_RANDOM_QUOTE_SUCCESS, payload: result });
          }),
          catchError(error => {
            return of({ type: GET_RANDOM_QUOTE_ERROR, payload: error.message });
          })
        );
    })
  );
