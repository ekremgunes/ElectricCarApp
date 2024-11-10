import { TripItem } from "../interfaces/TripInterface";

export const fakeTrips: TripItem[] = [
    {
        id: 1,
        time: "00.20",
        location: "1104 Test Drive",
        latest: true,
        startLocation: { latitude: 41.0082, longitude: 28.9784 }, // a
        destination: { latitude: 37.0369, longitude: 22.9857 },  // b
        distance: 2.5, // Sabit mesafe değeri
    },
    {
        id: 2,
        time: "01.20",
        location: "4916 Kebab",
        startLocation: { latitude: 40.9982, longitude: 28.9789 }, 
        destination: { latitude: 41.0369, longitude: 28.9865 }, 
        distance: 3.1, // Sabit mesafe değeri
    },
    {
        id: 3,
        time: "05.20",
        location: "4131 Istanbul Trip",
        startLocation: { latitude: 41.0099, longitude: 28.9755 }, 
        destination: { latitude: 41.0380, longitude: 28.9870 }, 
        distance: 4.2, // Sabit mesafe değeri
    },
    {
        id: 4,
        time: "00.01",
        location: "0-100 km/h",
        startLocation: { latitude: 41.0000, longitude: 28.9770 }, 
        destination: { latitude: 41.0300, longitude: 28.9890 }, 
        distance: 1.8, // Sabit mesafe değeri
    }
];

