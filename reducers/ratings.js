import { STORE_RATINGS_DATA } from '../actions/ratings';

const initialState = {
  hasData: false,
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_RATINGS_DATA: {
      return { ...state, all: action.ratingsData, hasData: true };
    }
    default:
      return state;
  }
};
