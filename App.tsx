
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import "./global.css"
import { SectionProvider } from './src/context/SectionContext';
import TripMapScreen from './src/screens/TripMapScreen';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={TripMapScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SectionProvider>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
    </SectionProvider>

  );
}