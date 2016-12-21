import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Banner from './Banner';

const LoadingScreen = ({ loading, children }) => (
  <View style={{ flex: 1 }}>
    <Banner />
    <Spinner visible={loading} color="black" overlayColor="rgba(1,1,1,0.25)" />
    {!loading && children}
  </View>
);

export default connect((state) => ({
  loading: !state.profile.hasData,
}))(LoadingScreen);
