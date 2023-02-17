import { $api_auth } from './api.config';

export const apiAuth = async fields => {
  return await $api_auth
    .post('/token/', fields)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error));
};

export const apiRefreshToken = async token => {
  return await $api_auth
    .post('/token/refresh/', token)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error));
};
