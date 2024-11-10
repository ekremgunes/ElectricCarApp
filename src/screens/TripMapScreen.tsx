import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { useRoute, useNavigation } from '@react-navigation/native';
import MapHeader from '../components/tripMap/TripMapHeader';
import MapFooter from '../components/tripMap/TripMapFooter';
import { TripItem } from '../interfaces/TripInterface';
import { whiteMapStyle } from '../../assets/map/mapStyle';
import { getLocation } from '../utils/getLocation';
import { getRouteCoordinates } from '../utils/getRouteCoordinates';
import { getTripDetails } from '../utils/getTripDetails';

const TripMapScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id }:any = route.params;

  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<{ latitude: number; longitude: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [tripDetails, setTripDetails] = useState<TripItem | null>(null); 
  const [secondLastTrip, setSecondLastTrip] = useState<TripItem | null>(null);
  const [startLocation, setStartLocation] = useState<{ latitude: number; longitude: number }>({ latitude: 41.0082, longitude: 28.9784 });
  const [destination, setDestination] = useState<{ latitude: number; longitude: number }>({ latitude: 41.0369, longitude: 28.9857 });

  useEffect(() => {
    getTripDetails(id, setTripDetails, setSecondLastTrip, setStartLocation, setDestination, navigation, setLoading);
    getLocation(setUserLocation, setLoading);
    getRouteCoordinates(startLocation, destination, setRouteCoordinates, setLoading);
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading ...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={whiteMapStyle}
        initialRegion={{
          latitude: startLocation.latitude,
          longitude: startLocation.longitude,
          latitudeDelta: 0.0722,
          longitudeDelta: 0.0721,
        }}
      >
        {/* Marker for start location */}
        <Marker coordinate={startLocation} title="Başlangıç Noktası" />
        
        {/* Marker for destination */}
        <Marker image={require("../../assets/map/icon_car.png")} coordinate={destination} title="Hedef Noktası" />

        {/* Marker for user's current location */}
        {userLocation && <Marker image={require("../../assets/map/mapUser.png")} coordinate={userLocation} title="User Noktası" />}

        {/* Polyline for the route */}
        <Polyline coordinates={routeCoordinates} strokeColor="red" strokeWidth={10} />
      </MapView>

      {/* Map Header and Footer */}
      <MapHeader />
      <MapFooter tripDetails={tripDetails} secondLastTrip={secondLastTrip} />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    position: "absolute",
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

export default TripMapScreen;
