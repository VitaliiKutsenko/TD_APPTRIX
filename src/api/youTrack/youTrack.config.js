import axios from 'axios';

export const API_YOUTRACK = `https://demo-apptrix.myjetbrains.com/youtrack/api/admin/users/`;
const token = 'perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL';

export const $api_youTrack = axios.create({
  baseURL: API_YOUTRACK,
  // withCredentials: true,
});

$api_youTrack.interceptors.request.use(async config => {
  config.headers.Authorization = `Bearer ${token}`;
  config.headers['Accept'] = 'application/json';
  config.headers['Cache-Control'] = 'no-cache';

  return config;
});
