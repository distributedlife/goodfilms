import { queueUrl } from './endpoints';
import { fetchError } from './error';

export const STORE_QUEUE_DATA = 'GOODFILMS/STORE_QUEUE_DATA';

export const storeQueueData = (queueData) => ({
  type: STORE_QUEUE_DATA,
  queueData,
});

const fetchQueueData = (id, page) => fetch(queueUrl(id, page))
  .then((response) => response.json());

export const getQueueData = (page) => (dispatch, getState) => {
  const id = getState().seed.id;

  return fetchQueueData(id, page)
    .then((data) => dispatch(storeQueueData(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export const getLatestQueueData = (id) => (dispatch) =>
   fetchQueueData(id, 1)
    .then((data) => dispatch(storeQueueData(data)))
    .catch((error) => dispatch(fetchError(error)));
