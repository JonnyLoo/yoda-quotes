import fetch from 'isomorphic-fetch';
import {Observable, from} from 'rxjs';

const fetchHelper = (url, method) => {
  const requestOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  const request = fetch(url, requestOptions)
    .then(response => {
      return response.json().then(data => {
        return Promise.resolve(data);
      });
    });

  return from(request);
};

export const API = {
  fetchGreeting: (store) => {
    const url = 'http://localhost:4000/api/hello';
    return fetchHelper(url, 'GET');
  }
};
