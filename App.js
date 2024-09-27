import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Pac": require('./font/Pac.ttf'),
    "Kan": require('./font/Kan.ttf'),
  })

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar style='light' backgroundColor='#fff' />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
