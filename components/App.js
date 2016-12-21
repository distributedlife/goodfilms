import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import LoadingScreen from './LoadingScreen';
import Navigation from './Navigation';

import { seedApp } from '../actions/seed';
import { getProfileData } from '../actions/profile';

import seedReducer from '../reducers/seed';
import profileReducer from '../reducers/profile';
import ratingsReducer from '../reducers/ratings';
import queueReducer from '../reducers/queue';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers({
  seed: seedReducer,
  profile: profileReducer,
  ratings: ratingsReducer,
  queue: queueReducer,
});
const store = createStoreWithMiddleware(reducer);

export default () => (
  <Provider store={store}>
    <LoadingScreen>
      <Navigation />
    </LoadingScreen>
  </Provider>
);

store.dispatch(seedApp('distributedlife'));
store.dispatch(getProfileData('distributedlife'));
