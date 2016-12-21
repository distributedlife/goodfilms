import { STORE_QUEUE_DATA } from '../actions/queue';

const initialState = {
  hasData: false,
  movies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_QUEUE_DATA: {
      return { ...state, movies: action.queueData, hasData: true };
    }
    default:
      return state;
  }
};
