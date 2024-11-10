import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'

const MapFooter = () => {
    return (
        <View className='px-5 absolute items-center justify-around bottom-3 w-full flex-row'>
            <Animated.View entering={FadeInDown.duration(350).damping(8).springify()} className='w-8/12 py-5 items-center justify-start  bg-white rounded-3xl'>

                <View className='flex-row items-center self-start ml-5 '>
                    <View className='w-4 h-4 rounded-full elevation bg-stone-400'></View>
                    <View className=' ml-4'>
                        <Text className='text-stone-400 font-semibold '>7.40 PM</Text>
                        <Text className='text-black font-bold text-xl tracking-wide bottom-1'>Istanbul Trip</Text>
                    </View>
                </View>
                <View className='flex-row items-center self-start ml-5 mt-4 opacity-90'>
                    <View className='w-4 h-4 rounded-full elevation bg-stone-400'></View>
                    <View className=' ml-4'>
                        <Text className='text-stone-400 font-semibold '>9.40 PM</Text>
                        <Text className='text-black font-bold text-xl tracking-wide bottom-1'>Kebap</Text>
                    </View>
                </View>

            </Animated.View>
            <View className='mx-3'></View>
            <Animated.View entering={FadeInDown.duration(350).delay(100).damping(8).springify()} className='h-full w-4/12 justify-between py-5 items-center bg-white rounded-3xl'>
                <Text className='font-bold text-lg text-stone-400'>DISTANCE</Text>
                <Text className='font-bold text-[40px] text-black'>2.5</Text>
                <Text className='text-center text-stone-400 font-semibold'>kilometres</Text>
            </Animated.View>
        </View>
    )
}

export default MapFooter

const styles = StyleSheet.create({})