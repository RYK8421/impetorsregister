import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Login" 
        component={Login}
        options={{
        animation: 'slide_from_right',
        }}
        />
        <Stack.Screen name="Register"
         component={Register} 
         options={{
          animation: 'slide_from_right', // set the  animnation 
          }}
         />
         
      </Stack.Navigator>
    </NavigationContainer>
);
}

