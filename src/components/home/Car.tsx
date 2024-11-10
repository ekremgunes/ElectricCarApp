import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSection } from '../../context/SectionContext';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Car = () => {
    const { section, prevSection, setSection } = useSection();

    const positionY = useSharedValue(screenHeight / 5);
    const positionX = useSharedValue(screenWidth / 5);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: positionY.value },
            { translateX: positionX.value },
        ],
    }));

    // Section listener for animation, triggers when section changes
    useEffect(() => {
        if (section === 1) {
            positionX.value = withTiming(0, { duration: 500, easing: Easing.in(Easing.ease) });
            positionY.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.ease) });
        } else if (section === 2) {
            positionX.value = withTiming(0, { duration: 500, easing: Easing.in(Easing.ease) });
            positionY.value = withTiming(-screenHeight / 5.6, { duration: 500, easing: Easing.out(Easing.ease) });
        } else if (section === 3) {
            positionY.value = withTiming(-screenHeight / 3, { duration: 500, easing: Easing.in(Easing.ease) });
            positionX.value = withTiming(screenWidth / 2.2, { duration: 500, easing: Easing.in(Easing.ease) });
        } else if (section == 4) {
            positionY.value = withTiming(-screenHeight / 1.3, { duration: 500, easing: Easing.in(Easing.ease) });
            positionX.value = withTiming(screenWidth / 2.8, { duration: 500, easing: Easing.in(Easing.ease) });

        }
    }, [section]);

    return (
        <Animated.View style={[{ position: "relative" }, animatedStyle]} className='mt-2'>
            <Image style={{ height: screenHeight * 0.8, width: "100%", objectFit: "contain" }} source={require("../../../assets/car2.png")}></Image>
        </Animated.View>
    )
}

export default Car

const styles = StyleSheet.create({})