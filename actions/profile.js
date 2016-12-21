import { profileUrl } from './endpoints';
import { fetchError } from './error';

export const STORE_PROFILE_DATA = 'GOODFILMS/STORE_PROFILE_DATA';

export const storeProfileData = (profileData) => ({
  type: STORE_PROFILE_DATA,
  profileData,
});

const fetchProfileData = (id) => fetch(profileUrl(id))
  .then((response) => response.json());

export const getProfileData = () => (dispatch, getState) => {
  const username = getState().seed.username;

  return fetchProfileData(username)
    .then((profileData) => dispatch(storeProfileData(profileData)))
    .catch((error) => dispatch(fetchError(error)));
};
