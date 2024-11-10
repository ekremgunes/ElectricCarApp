import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { decodePolyline } from '../utils/decodePolyline';
import { whiteMapStyle } from '../../assets/map/mapStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapHeader from '../components/map/MapHeader';
import MapFooter from '../components/map/MapFooter';



const MapScreen = () => {
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<{ latitude: number; longitude: number }[]>([]);
  const [loading, setLoading] = useState(true);

  const startLocation = { latitude: 41.0082, longitude: 28.9784 };
  const destination = { latitude: 41.0369, longitude: 28.9857 };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      getRouteCoordinates();
    } catch (error) {
      console.log('Location cant reached: ', error);
      setLoading(false);
    }
  };

  // get coordinatest with Google Directions API
  const getRouteCoordinates = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=
        ${startLocation.latitude},${startLocation.longitude}
        &destination=${destination.latitude},${destination.longitude}
        &key=${GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      const points = data.routes[0].legs[0].steps.flatMap((step: any) =>
        decodePolyline(step.polyline.points)
      );
      console.log("points", points)
      setRouteCoordinates(points);
      setLoading(false);
    } catch (error) {
      console.log('Rota alınamadı: ', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);



  return (
    <View className='flex-1 pt-8'>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={whiteMapStyle}
        initialRegion={{
          latitude: startLocation.latitude,
          longitude: startLocation.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0521,
        }}
      >
        <Marker coordinate={startLocation} title="Başlangıç Noktası" />
        <Marker image={require("../../assets/map/icon_car.png")} coordinate={destination} title="Hedef Noktası" />

        {userLocation && <Marker image={require("../../assets/map/mapUser.png")} coordinate={userLocation} title="User Noktası" />}

        <Polyline coordinates={routeCoordinates} strokeColor="red" strokeWidth={10} />
      </MapView>

      <MapHeader />

      <MapFooter/>

      
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex:1,
    position: "absolute",
    zIndex: -100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapScreen;
