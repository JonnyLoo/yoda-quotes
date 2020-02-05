import axios from 'axios';
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

  const request = axios({ url, ...requestOptions })
    .then(response => assessResponseStatus(response));

  return from(request);
};

export const API = {
  fetchAllQuotes: (state$) => {
    const url = 'http://localhost:3000/api/quotes';
    return fetchHelper(url, 'GET');
  }
};
