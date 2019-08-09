import fetch from 'isomorphic-fetch';
import {Observable, from} from 'rxjs';
import {assessResponseStatus} from '../utils/request-utils';

const fetchHelper = (url, method, body) => {
  const requestOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  if(body) {
    requestOptions.body = JSON.stringify(body);
  }

  const request = fetch(url, requestOptions)
    .then(response => assessResponseStatus(response));

  return from(request);
};

export const API = {
  fetchYodaQuote: (state$) => {
    const toYodish = state$.value.yoda.english,
      url = 'http://localhost:4000/api/yoda',
      body = {
        text: toYodish
      };
    return fetchHelper(url, 'POST', body);
  }
};
