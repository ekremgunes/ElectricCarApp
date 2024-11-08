import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { useSharedValue } from 'react-native-reanimated';
import HomeHeader from '../components/HomeHeader';

export default function HomeScreen() {
  const [section, setSection] = useState(1);

  // scroll event handler
  const handleGesture = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationY < -50 && section < 4) {
        setSection((prev) => prev + 1);
        return
      } else if (nativeEvent.translationY > 50 && section > 1) {
        setSection((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    console.log("section : ", section)
  }, [section])

  return (
    <SafeAreaView className='bg-white flex-1'>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PanGestureHandler onHandlerStateChange={handleGesture}>
          <SafeAreaView className='bg-white flex-1 mt-2'>
            
            <HomeHeader></HomeHeader>

            

          </SafeAreaView>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
