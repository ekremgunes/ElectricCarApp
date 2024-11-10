import * as Location from 'expo-location';

// Konum bilgisi alma fonksiyonu
export const getLocation = async (setUserLocation: React.Dispatch<React.SetStateAction<{ latitude: number; longitude: number } | null>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setLoading(false);
      return;
    }
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
      timeout: 5000,
      maximumAge: 10000,
    });
    setUserLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  } catch (error) {
    console.log('Location cant reached: ', error);
  } finally {
    setLoading(false);
  }
};