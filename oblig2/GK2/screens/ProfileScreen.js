// screens/ProfileScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function ProfileScreen() {
    const plasticPanted = 120; // Antall plastflasker pantet (demo-verdi)
    const glassPanted = 80;    // Antall glassflasker pantet (demo-verdi)
    const co2Saved = (plasticPanted * 0.05 + glassPanted * 0.1).toFixed(2); // Estimert CO₂-besparelse i kg
    const plasticSaved = (plasticPanted * 0.02).toFixed(2); // Estimert plast spart i kg
    const glassSaved = (glassPanted * 0.1).toFixed(2);      // Estimert glass spart i kg
    const creditEarned = 40;    // Kreditt opptjent i kr

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Tillatelse til lokasjon ble avvist');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let locationText = 'Henter lokasjon...';
    if (errorMsg) {
        locationText = errorMsg;
    } else if (location) {
        locationText = `Din lokasjon: ${location.coords.latitude}, ${location.coords.longitude}`;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Din Pantingstatistikk</Text>
            
            <View style={styles.statsContainer}>
                <Text style={styles.statText}>Plast pantet: {plasticPanted}</Text>
                <Text style={styles.statText}>Glass pantet: {glassPanted}</Text>
            </View>

            <View style={styles.savingsContainer}>
                <Text style={styles.savingText}>CO₂ spart: {co2Saved} kg</Text>
                <Text style={styles.savingText}>Plast spart: {plasticSaved} kg</Text>
                <Text style={styles.savingText}>Glass spart: {glassSaved} kg</Text>
            </View>

            <View style={styles.creditContainer}>
                <Text style={styles.creditText}>Opptjent kreditt: {creditEarned} kr</Text>
                <Text style={styles.locationText}>{locationText}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
    },
    statsContainer: {
        backgroundColor: '#E8F5E9',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    statText: {
        fontSize: 18,
        color: '#388E3C',
        fontWeight: '500',
    },
    savingsContainer: {
        backgroundColor: '#FFF3E0',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    savingText: {
        fontSize: 18,
        color: '#F57C00',
        fontWeight: '500',
    },
    creditContainer: {
        backgroundColor: '#E3F2FD',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    creditText: {
        fontSize: 20,
        color: '#1976D2',
        fontWeight: 'bold',
    },
    locationText: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
    },
});
