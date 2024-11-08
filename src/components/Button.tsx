import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

type props = {
    title: string,
    icon: string,
    action?: () => void | null,
}

const Button = ({ title, icon, action }: props) => {
    return (
        <TouchableOpacity onPress={action} className='bg-gray-100 py-6 px-10 rounded-[34px] justify-center items-center'>
            <Ionicons name={icon} size={24} color="gray" />
            <Text className='font-semibold mt-1.5 text-gray-500 tracking-wide'>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({})