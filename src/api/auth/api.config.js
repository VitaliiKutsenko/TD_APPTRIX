import axios from 'axios';

export const API_AUTH_URL = `http://erp.apptrix.ru/api`;

export const $api_auth = axios.create({ baseURL: API_AUTH_URL });

$api_auth.interceptors.request.use(async config => {
  if (localStorage.getItem('access')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`;
  }

  config.headers['Accept'] = 'application/json';
  config.headers['Cache-Control'] = 'no-cache';

  return config;
});
