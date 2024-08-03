import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <SafeAreaView>
        <View style={{height: 80}} />
        <Entypo
          name="spotify"
          size={80}
          color={'#fff'}
          style={{textAlign: 'center'}}
        />
        <Text style={styles.loginTitle}>Millions of Songs Free on Spotify</Text>

        <View style={{height: 80}} />
        <Pressable
          onPress={() => navigation.navigate('Main')}
          style={styles.loginButton}>
          <Text style={{fontWeight: 'bold'}}>Sign up Free</Text>
        </Pressable>
        <Pressable style={styles.loginContainer}>
          <MaterialIcons name="phone-android" size={24} color={'#fff'} />
          <Text style={styles.formButtonText}>Continue with phone number</Text>
        </Pressable>
        <Pressable style={styles.loginContainer}>
          <AntDesign name="google" size={24} color={'#fff'} />
          <Text style={styles.formButtonText}>Continue with Google</Text>
        </Pressable>
        <Pressable style={styles.loginContainer}>
          <AntDesign name="facebook-square" size={24} color={'#fff'} />
          <Text style={styles.formButtonText}>Continue with Facebook</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  loginTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  loginButton: {
    backgroundColor: '#1db954',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 10,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  loginContainer: {
    flexDirection: 'row',
    backgroundColor: '#131624',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 10,
    borderWidth: 0.8,
    borderColor: '#c0c0c0',
    width: 300,
    alignItems: 'center',
    borderRadius: 25,
  },
  formButtonText: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
});
