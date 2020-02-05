export const assessResponseStatus = (response) => {
  if(response.status === 200) {
    return Promise.resolve(response.data);
  }

  const error = new Error(response.statusText || 'error');
  return Promise.reject(error);
}
