import { SEED_APP } from '../actions/seed';

const initialState = {
  username: 'unknown',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEED_APP: {
      return { ...state, username: action.username };
    }
    default:
      return state;
  }
};
