import { TripItem } from '../interfaces/TripInterface';
import { fakeTrips } from '../constants/FAKE_DATA';

export const getTripDetails = (
    id: number,
    setTripDetails: React.Dispatch<React.SetStateAction<TripItem | null>>,
    setSecondLastTrip: React.Dispatch<React.SetStateAction<TripItem | null>>,
    setStartLocation: React.Dispatch<React.SetStateAction<{ latitude: number; longitude: number }>>,
    setDestination: React.Dispatch<React.SetStateAction<{ latitude: number; longitude: number }>>,
    navigation: any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const trip = fakeTrips.find((trip) => trip.id === id);
    if (trip) {
      // Get the previous trip, ensure it's not undefined or null
      const previousTrip = fakeTrips[fakeTrips.indexOf(trip) - 1] || null;
      
      setStartLocation(trip.startLocation);
      setDestination(trip.destination);
      setTripDetails(trip);
      setSecondLastTrip(previousTrip); // If previousTrip is undefined, set null
    } else {
      setLoading(false);
      navigation.goBack();
    }
  };
  