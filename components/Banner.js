import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';

const imageStyle = {
  margin: 8,
  alignSelf: 'flex-start',
};

export default () => (
  <LinearGradient colors={['#212121', '#333']}>
    <Image
      source={require('../assets/images/logo.png')}
      style={imageStyle}
      height={28}
      width={211}
      resizeMode="contain"
    />
  </LinearGradient>
);
