import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import WarnTip from './WarnTip';

type props = {
    title: string,
    icon?: string,
    action?: () => void | null,
    warn?: boolean
}

const Button = ({ title, icon, action, warn }: props) => {
    return (
        <TouchableOpacity onPress={action} className='bg-stone-200 py-6 px-8 rounded-[33px] justify-center items-center'>
            {warn && <WarnTip />}
            {icon && <Ionicons name={icon} size={26} color="#57534e" />}
            <Text className='font-semibold  text-lg text-stone-600 tracking-wide'>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({})