import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { route } from '../../constants/ROUTES';
import Animated, { FadeInUp } from 'react-native-reanimated';

const TripMapHeader = () => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <Animated.View
            entering={FadeInUp.duration(350).delay(20).damping(10)}
            className='fixed px-5 mt-7 items-center justify-between left-0 right-0 top-5 w-full flex-row'>
            <TouchableOpacity onPress={goBack} className='elevation-2xl rounded-full justify-center p-3 items-center bg-white'>
                <Ionicons name="chevron-back-outline" size={32} color="black" />
            </TouchableOpacity>
            <View className=' justify-center items-center'>
                <Text className='elevation-2xl text-center bg-gray/10 rounded-full px-2 text-stone-600 text-xl font-bold'>Map</Text>
            </View>
            <View className='elevation-2xl rounded-full justify-center p-3 items-center bg-white'>
                <Entypo name="dots-three-horizontal" size={30} color="black" />
            </View>
        </Animated.View>
    )
}

export default TripMapHeader

const styles = StyleSheet.create({})