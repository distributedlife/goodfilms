import { STORE_PROFILE_DATA } from '../actions/profile';

const initialState = {
  hasData: false,
};

const cannedData = {
  cover: 'http://image.tmdb.org/t/p/w1280/biR9nYZyOwXC2wQVmSUk6TI3eHl.jpg',
  avatar: 'https://graph.facebook.com/607401683/picture?type=square&width=240&height=240',
  id: 'distributedlife',
  name: 'Ryan Boucher',
  counts: { reviews: 160,
    ratings: 681,
    queued: 176,
    lists: 0,
    followers: 21,
    following: 12 },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_PROFILE_DATA: {
      return { ...state, ...cannedData, hasData: true };
    }
    default:
      return state;
  }
};
