import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Avatar from '../Avatar';
import Feather from '@expo/vector-icons/Feather';
import { useSection } from '../../context/SectionContext';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const HomeHeader = () => {
    const { section, prevSection, setSection } = useSection();

    const opacity = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    useEffect(() => {
        if (section == 4) {
            opacity.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) });
        } else {
            opacity.value = withTiming(1, { duration: 400, easing: Easing.in(Easing.ease) });
        }
    }, [section]);

    return (
        <View style={{ height: 50 }} className='flex-row px-6 items-center justify-between w-full'>
            <TouchableOpacity>
                <Feather name="menu" size={32} color="black" />
            </TouchableOpacity>
            <Animated.View style={[animatedStyle]}>
                <Avatar></Avatar>
            </Animated.View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({})