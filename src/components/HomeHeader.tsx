import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Avatar from './Avatar';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const HomeHeader = () => {
    return (
        <View className=' flex-row px-6 items-center justify-between w-full'>
            <TouchableOpacity>
                <SimpleLineIcons name="menu" size={26} color="black" />
            </TouchableOpacity>
            <Avatar></Avatar>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({})