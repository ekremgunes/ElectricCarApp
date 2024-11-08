import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView className='py-5 bg-white flex-1'>
      <Text className="text-yellow-300 bg-red-400">HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})