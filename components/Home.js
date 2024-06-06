import React from 'react';
import { ImageBackground, StyleSheet, Text, View,Image, TextInput,TouchableOpacity } from 'react-native';
import { bkimg, icon } from '../assets'; // For ensure the corrrectly imported asset
import { useNavigation } from '@react-navigation/native';



export default function Home() {
    const navigation = useNavigation();
  return (
  <View style={styles.container}>
    <ImageBackground 
    source={icon}  // bkimg use for set background image 
     style={styles.image}> 
   <Image
    resizeMode='contain'
    source={bkimg}  // bkimg use for set icon image 
    style={styles.logo}/>
    <TouchableOpacity style={styles.loginButton}
    onPress={() => navigation.navigate('Login')}  //  For navigate to Login screen
    >
    <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton }
        onPress={() => navigation.navigate('Register')}  // For navigate to Register screen
        >
        <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
  </ImageBackground>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  logo: {
    width: 200,
    height: 140,
    position:"absolute",
    top:125,
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 110,
  },
  registerButton:{
    width: '80%',
    height: 50,
    backgroundColor: '#1F75FE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});