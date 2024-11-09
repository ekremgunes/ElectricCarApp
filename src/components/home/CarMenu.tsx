import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSection } from '../../context/SectionContext';
import Button from '../Button';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const CarMenu = () => {
    const { section, prevSection, setSection } = useSection();
    const positionY = useSharedValue(0);
    const positionX = useSharedValue(-300);
    const opacity = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: positionY.value },
            { translateX: positionX.value },

        ],
        opacity: opacity.value,
    }));

    //section listener for animation
    useEffect(() => {
        if (section === 2) {
            positionX.value = withTiming(-300, { duration: 500, easing: Easing.in(Easing.ease) });
            positionY.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.ease) });
            opacity.value = withTiming(0, { duration: 500, easing: Easing.in(Easing.ease) });

        } else if (section === 3) {

            positionY.value = withTiming(0, { duration: 550, easing: Easing.in(Easing.ease) });
            positionX.value = withTiming(0, { duration: 550, easing: Easing.in(Easing.ease) });
            opacity.value = withTiming(1, { duration: 550, easing: Easing.in(Easing.ease) });

        } else if (section == 4) {
            positionY.value = withTiming(-500, { duration: 400, easing: Easing.in(Easing.ease) });
            positionX.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) });
            opacity.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) });

        }
    }, [section]);

    return (
        <Animated.View style={[{ position: "absolute" }, animatedStyle]} className='absolute px-4 w-5/12 left-1 h-full -z-10 justify-center'>
            <View className=' h-3/5 justify-around'>
                <Button title='Battery 96%' icon='battery-full-outline' ></Button>
                <Button title='Mainance' icon='build-sharp' warn={true}></Button>
                {/* <Button title='Player Off' icon='musical-notes'></Button> */}
                <Button title='Car 360°' icon='car-sport' ></Button>
                
                <Button title='Security' icon='finger-print' warn={true}></Button>
                
                <Text className='text-3xl font-bold text-center tracking-wider'>...</Text>
            </View>
        </Animated.View>

    )
}

export default CarMenu

const styles = StyleSheet.create({})