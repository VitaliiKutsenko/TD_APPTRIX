import { $api_youTrack } from './youTrack.config';

export const youtrackUsers = async () => {
  return await $api_youTrack
    .get(`/users/`)
    .then(({ data }) =>
      Promise.all(
        data.map(item => {
          return youtrackAll(item.id);
        })
      )
    )
    // .then(item => item))
    .catch(error => Promise.reject(error));
};

export const youtrackAll = async id => {
  const fields = '?fields=id,login,name,email';

  return await $api_youTrack
    .get(`/users/${id}${fields}`)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error));
};
