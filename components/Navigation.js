import { Text } from 'react-native';
import React from 'react';
import TabBar from 'react-native-xtabbar';
import Profile from './Profile';
import Ratings from './Ratings';
import Queue from './Queue';

const Lists = () => (<Text>Lists</Text>);
const Search = () => (<Text>Following</Text>);

const homeIcon = require('../assets/icons/home.png');
const queueIcon = require('../assets/icons/queued.png');
const ratingsIcon = require('../assets/icons/star.png');
const listIcon = require('../assets/icons/list.png');
const searchIcon = require('../assets/icons/search.png');

export default () => (
  <TabBar>
    <TabBar.Item title="Home" icon={homeIcon} selectedIcon={homeIcon}>
      <Profile />
    </TabBar.Item>
    <TabBar.Item title="Queued" icon={queueIcon} selectedIcon={queueIcon}>
    <Queue />
    </TabBar.Item>
    <TabBar.Item title="Ratings" icon={ratingsIcon} selectedIcon={ratingsIcon}>
      <Ratings />
    </TabBar.Item>
    <TabBar.Item title="Lists" icon={listIcon} selectedIcon={listIcon}>
      <Lists />
    </TabBar.Item>
    <TabBar.Item title="Search" icon={searchIcon} selectedIcon={searchIcon}>
      <Search />
    </TabBar.Item>
  </TabBar>
);
