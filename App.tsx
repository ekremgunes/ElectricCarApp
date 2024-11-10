
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import "./global.css"
import { SectionProvider } from './src/context/SectionContext';
import MapScreen from './src/screens/MapScreen';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
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