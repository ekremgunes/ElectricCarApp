import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Button from '../Button';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSection } from '../../context/SectionContext';
import { useNavigation } from '@react-navigation/native';
import { route } from '../../constants/ROUTES';
import { fakeTrips } from '../../constants/FAKE_DATA';
import { TripItem } from '../../interfaces/TripInterface';


const screenHeight = Dimensions.get('window').height;

const Trips = () => {
    const navigation = useNavigation<any>();
    const { section, prevSection, setSection } = useSection();
    const positionY = useSharedValue(screenHeight / 2);
    const opacity = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: positionY.value },
        ],
        opacity: opacity.value,
    }));

    const navigateToMap = (id: number ) => {
        if (!id) {
            return
        }
        navigation.navigate(route.Map, { id })
    }

    // Section listener for animation, triggers when section changes
    useEffect(() => {
        if (section === 3) {
            positionY.value = withTiming(screenHeight / 1.6, { duration: 420, easing: Easing.in(Easing.ease) });
            opacity.value = withTiming(0, { duration: 340, easing: Easing.in(Easing.ease) });

        } else if (section == 4) {
            positionY.value = withTiming(0, { duration: 600, easing: Easing.in(Easing.ease) });
            opacity.value = withTiming(1, { duration: 550, easing: Easing.in(Easing.ease) });

        }
    }, [section]);

    const renderTripItem = ({ time, location, latest, id }: TripItem) => {
        return (
            <TouchableOpacity onPress={()=>navigateToMap(id)} key={id} style={{ opacity: latest ? 1 : 0.6 }} className='bg-white rounded-[33px] items-center flex-row my-1.5 py-5 px-7'>
                <Fontisto name="map-marker-alt" size={26} color="#a8a29e" />
                <View className='ml-7'>
                    <Text className='text-stone-500/70 font-bold tracking-wide'>TOTAL {time}</Text>
                    <Text className='text-black text-xl font-bold tracking-wide'>{location}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const renderFakeData = () => {
        return fakeTrips.map((trip, index) => (
            <React.Fragment key={index}>
                {renderTripItem(trip)}
            </React.Fragment>
        ));
    }

    return (
        <Animated.View style={[{ position: "absolute" }, animatedStyle]} className='flex-1 bottom-2 w-full absolute  z-20'>
            <View className='px-4 mt-1 '>
                <View className='flex-row items-center mb-1'>
                    <MaterialIcons name="keyboard-arrow-down" size={30} color="gray" />
                    <Text className='text-black/60 tracking-wide font-bold text-xl ml-2'>LAST TRIPS</Text>
                </View>
                <ScrollView>
                    {renderFakeData()}

                    <View className='self-center w-1/2 my-2 p-1'>
                        <Button title='More Trips'></Button>
                    </View>
                </ScrollView>
            </View>
        </Animated.View>
    )
}

export default Trips

const styles = StyleSheet.create({})
