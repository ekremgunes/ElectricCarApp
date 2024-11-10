import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { TripItem } from '../../interfaces/TripInterface';

const TripMapFooter = ({ tripDetails, secondLastTrip }: { tripDetails: TripItem | null, secondLastTrip: TripItem | null }) => {
    if (!tripDetails) return null;

    const renderTripItem = (time: string, title: string) => (
        <View className='flex-row items-center self-start ml-5'>
            <View className='w-4 h-4 rounded-full elevation bg-stone-400'></View>
            <View className='ml-4'>
                <Text className='text-stone-400 font-semibold'>{time}</Text>
                <Text className='text-black font-bold text-xl tracking-wide bottom-1'>{title}</Text>
            </View>
        </View>
    );

    return (
        <View className='px-5 absolute items-center justify-around bottom-3 w-full flex-row'>
            <Animated.View
                entering={FadeInDown.duration(450).delay(50).damping(8).springify()}
                className='w-8/12 h-full py-5 items-center justify-between bg-white rounded-3xl'>

                {/* Render current trip */}
                {renderTripItem(tripDetails.time, tripDetails.location)}

                {/* Render second last trip */}
                {secondLastTrip && renderTripItem(secondLastTrip.time, secondLastTrip.location)}
            </Animated.View>

            <View className='mx-3'></View>

            <Animated.View
                entering={FadeInDown.duration(450).delay(150).damping(8).springify()}
                className='h-full w-4/12 justify-between py-5 items-center bg-white rounded-3xl'>
                <Text className='font-bold text-lg text-stone-400'>DISTANCE</Text>
                <Text className='font-bold text-[40px] text-black'>{tripDetails.distance}</Text>
                <Text className='text-center text-stone-400 font-semibold'>kilometres</Text>
            </Animated.View>
        </View>
    );
};

export default TripMapFooter;

const styles = StyleSheet.create({});
