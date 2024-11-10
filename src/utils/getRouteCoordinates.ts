import { GOOGLE_MAPS_API_KEY } from '@env';
import { decodePolyline } from './decodePolyline';

export const getRouteCoordinates = async (startLocation: { latitude: number; longitude: number }, destination: { latitude: number; longitude: number }, setRouteCoordinates: React.Dispatch<React.SetStateAction<{ latitude: number; longitude: number }[]>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation.latitude},${startLocation.longitude}&destination=${destination.latitude},${destination.longitude}&key=${GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();
    const points = data.routes[0].legs[0].steps.flatMap((step: any) =>
      decodePolyline(step.polyline.points)
    );
    setRouteCoordinates(points);
  } catch (error) {
    console.log('Rota alınamadı: ', error);
  } finally {
    setLoading(false);
  }
};
