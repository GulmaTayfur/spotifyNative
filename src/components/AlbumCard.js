import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function AlbumCard({album}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Info', {album})}
      style={{margin: 10, width: 100, alignItems: 'center, '}}>
      <Image
        source={{uri: album.coverArt}}
        style={{width: 100, height: 100, borderRadius: 5}}
      />
      <Text
        numberOfLines={1}
        style={{
          color: 'white',
          fontSize: 13,
          fontWeight: '500',
          marginTop: 7,
        }}>
        {album.name}
      </Text>
      <Text
        numberOfLines={1}
        style={{
          color: 'gray',
          fontSize: 13,
          fontWeight: '500',
          marginTop: 10,
        }}>
        {album.artist}
      </Text>
    </TouchableOpacity>
  );
}
