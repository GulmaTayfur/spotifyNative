import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

export default function Loader() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color={'#1db954'} size={'large'} />
    </View>
  );
}
