import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Tillatelse for lokasjon ble avslått');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
        })();
    }, []);

    if (!location) {
        return <ActivityIndicator style={styles.loader} size="large" color="#1976D2" />;
    }

    return (
        <MapView style={styles.map} region={location}>
            <Marker
                coordinate={location}
                title="Din plassering"
                description="Dette er din nåværende posisjon"
            />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
