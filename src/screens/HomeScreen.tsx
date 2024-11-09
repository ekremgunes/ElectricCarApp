import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { useSharedValue } from 'react-native-reanimated';
import HomeHeader from '../components/home/HomeHeader';
import Greetings from '../components/home/Greetings';
import { useSection } from '../context/SectionContext';
import Car from '../components/home/Car';
import CarMenu from '../components/home/CarMenu';

export default function HomeScreen() {
  //const [section, setSection] = useState(1);
  const { section, prevSection, setSection } = useSection();

  // scroll event handler
  const handleGesture = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationY < -50 && section < 4) {
        setSection(section + 1);
        return
      } else if (nativeEvent.translationY > 50 && section > 1) {
        setSection(section - 1);
      }
    }
  };

  //section listener for auto switch between 1 to 2,3 to 2
  useEffect(() => {
    if (prevSection == 1 && section == 2) {
      setTimeout(() => {
        setSection(3)
      }, 410);
    }
    if (prevSection == 3 && section == 2) {
      setTimeout(() => {
        setSection(1)
      }, 450);
    }
  }, [section])

  return (
    <SafeAreaView className='bg-white flex-1'>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PanGestureHandler onHandlerStateChange={handleGesture}>
          <SafeAreaView className='bg-white flex-1'>

            <HomeHeader></HomeHeader>

            <Greetings></Greetings>

            <CarMenu></CarMenu>

            <Car></Car>


          </SafeAreaView>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
