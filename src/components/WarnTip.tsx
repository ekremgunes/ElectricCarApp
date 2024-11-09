import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


//right,left,top,bottom
type position = {
    r?: number, 
    l?: number,
    t?:number,
    b?:number,
}

const WarnTip = ({ r=-10,l,t,b }: position) => {
    return (
        <View className={`absolute -right-3 -top-2 py-0.5 px-3.5 justify-center items-center rounded-full bg-red-600/70 elevation-xl`}>
            <Text className='text-white font-bold text-xl'>!</Text>
        </View>
    )
}

export default WarnTip

const styles = StyleSheet.create({})