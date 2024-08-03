import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import ArtistCard from '../components/ArtistCard';
import AlbumCard from '../components/AlbumCard';
import {AlbumsContext} from '../context/AlbumsContext';
import Loader from '../components/Loader';
import Error from '../components/Error';
import {ArtsitsContext} from '../context/ArtistContext';

export default function HomeScreen() {
  const navigation = useNavigation();

  const {
    albums,
    loading: albumsLoading,
    error: albumsError,
  } = useContext(AlbumsContext);

  const {
    artists,
    loading: artistsLoading,
    error: artistsError,
  } = useContext(ArtsitsContext);

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      {albumsLoading ? (
        <Loader />
      ) : albumsError ? (
        <Error error={albumsError} />
      ) : (
        <ScrollView
          style={{marginTop: 50}}
          contentContainerStyle={{paddingBottom: 100}}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
              }}>
              <Image
                source={{uri: 'https://picsum.photos/200/300'}}
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'cover',
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  backgroundColor: '#1DB954',
                  borderRadius: 15,
                  paddingHorizontal: 20,
                  paddingVertical: 4,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                  }}>
                  all
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#282828',
                  borderRadius: 15,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                  }}>
                  Music
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#282828',
                  borderRadius: 15,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                  }}>
                  Podcast
                </Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="lightning-bolt-outline"
              color="white"
              size={24}
            />
          </View>

          <View>
            <Pressable
              onPress={() => navigation.navigate('Liked')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                flex: 1,
                marginHorizontal: 10,
                marginVertical: 8,
                backgroundColor: '#202020',
                borderRadius: 4,
              }}>
              <LinearGradient colors={['#33006F', '#FFFFFF']}>
                <Pressable
                  style={{
                    width: 55,
                    height: 55,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="heart" color="white" size={24} />
                </Pressable>
              </LinearGradient>

              <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
                Liked Songs
              </Text>
            </Pressable>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                flex: 1,
                marginHorizontal: 10,
                marginVertical: 8,
                backgroundColor: '#202020',
                borderRadius: 4,
              }}>
              <Image
                source={{uri: 'https://picsum.photos/100/100'}}
                style={{width: 55, height: 55}}
              />
              <View style={{}}>
                <Text
                  style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
                  Hippop
                </Text>
              </View>
            </View>

            {/* fltalist */}
            <Pressable
              style={{
                marginVertical: 8,
                marginHorizontal: 10,
                backgroundColor: '#282828',
                flexDirection: 'row',
                borderRadius: 4,
              }}>
              <Image
                source={{uri: 'https://picsum.photos/100/100'}}
                style={{width: 55, height: 55}}
              />
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 8,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
                  name
                </Text>
              </View>
            </Pressable>

            <Text
              style={{
                color: 'white',
                marginHorizontal: 10,
                fontSize: 19,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Your Top Artists
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {artists?.map((artist, index) => (
                <ArtistCard key={index} artist={artist} />
              ))}
            </ScrollView>

            <View style={{height: 10}} />

            <Text
              style={{
                fontSize: 19,
                color: 'white',
                fontWeight: 'bold',
                marginHorizontal: 10,
                marginTop: 10,
              }}>
              Popular Albums
            </Text>

            {/* flatlist */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {albums?.map((album, index) => (
                <AlbumCard album={album} key={index} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </LinearGradient>
  );
}
