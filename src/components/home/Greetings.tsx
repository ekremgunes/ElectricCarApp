import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { useSection } from '../../context/SectionContext';
import Button from '../Button';

type model = {
  name: string,
  location: string
}
const fakeData: model = {
  name: "Alya",
  location: "A. Hilmi Nalcaci cd. 42 Selcuklu Konya / TR"
}

const Greetings = () => {
  const { section, prevSection, setSection } = useSection();

  const positionY = useSharedValue(-300);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: positionY.value }],
    opacity: opacity.value,
  }));

  useEffect(() => {
    if (section === 1) {
      positionY.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.ease) });
      opacity.value = withTiming(1, { duration: 500, easing: Easing.in(Easing.ease) });
    } else if (section === 2) {
      positionY.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.ease) });
      opacity.value = withTiming(0.7, { duration: 500, easing: Easing.in(Easing.ease) });
    } else if (section === 3) {
      positionY.value = withTiming(-300, { duration: 500, easing: Easing.in(Easing.ease) });
      opacity.value = withTiming(0, { duration: 500, easing: Easing.in(Easing.ease) });
    }
  }, [section]);

  return (
    <Animated.View style={[{ position: "relative" }, animatedStyle]} className={"py-7 justify-center items-center"}>
      <Text style={{ fontSize: 35 }} className={"text-gray-400 top-6"}>Hello</Text>
      <Text style={{ fontSize: 75 }} className={"text-black font-bold"}> {fakeData.name}</Text >
      <Text style={{ fontSize: 17 }} className={"text-gray-400/80 mb-6"}>{fakeData.location}</Text>

      <Button title='Unlock Doors' icon="lock-closed" />
    </Animated.View>
  );
};

export default Greetings;