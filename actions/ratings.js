import { ratingsUrl } from './endpoints';
import { fetchError } from './error';

export const STORE_RATINGS_DATA = 'GOODFILMS/STORE_RATINGS_DATA';

export const storeRatingsData = (ratingsData) => ({
  type: STORE_RATINGS_DATA,
  ratingsData,
});

const fetchRatingsData = (id, page) => fetch(ratingsUrl(id, page))
  .then((response) => response.json());

export const getRatingsData = (page) => (dispatch, getState) => {
  const id = getState().seed.id;

  return fetchRatingsData(id, page)
    .then((data) => dispatch(storeRatingsData(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export const getAllRatingsData = (id) => (dispatch) =>
   fetchRatingsData(id, 1)
    .then((data) => dispatch(storeRatingsData(data)))
    .catch((error) => dispatch(fetchError(error)));
