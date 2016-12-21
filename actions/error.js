export const FETCH_ERROR = 'GOODFILMS/FETCH_ERROR';

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  error,
});
