import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ArtistCard({artist}) {
  return (
    <TouchableOpacity>
      <View style={{margin: 10, width: 100}}>
        <Image
          source={{uri: artist.data.visuals.avatarImage.sources[0].url}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text
          numberOfLines={1}
          style={{
            color: 'white',
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: 7,
          }}>
          {artist.data.profile.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
