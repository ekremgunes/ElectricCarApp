import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Avatar from '../Avatar';
import Feather from '@expo/vector-icons/Feather';

const HomeHeader = () => {
    return (
        <View className=' flex-row px-6 items-center justify-between w-full'>
            <TouchableOpacity>
                <Feather name="menu" size={28} color="black" />
            </TouchableOpacity>
            <Avatar></Avatar>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({})