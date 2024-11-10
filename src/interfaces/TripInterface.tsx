export type TripLocation = {
    latitude: number,
    longitude: number,
};

export type TripItem = {
    id: number,
    time: string,
    location: string,
    latest?: boolean,
    startLocation: TripLocation,
    destination: TripLocation,
    distance: number;
};