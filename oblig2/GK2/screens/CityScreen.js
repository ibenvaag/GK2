// screens/CityScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CITY } from '../data/const';

export default function CityScreen({ navigation }) {
    const [selectedCity, setSelectedCity] = useState(null);

    const handleConfirm = () => {
        if (selectedCity) {
            navigation.navigate('PlaceScreen', { city: selectedCity });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Velg en by:</Text>
            {CITY.map((city) => (
                <TouchableOpacity
                    key={city.name}
                    style={[
                        styles.cityButton,
                        selectedCity?.name === city.name && styles.selectedCityButton
                    ]}
                    onPress={() => setSelectedCity(city)}
                >
                    <Text style={styles.cityButtonText}>{city.name}</Text>
                </TouchableOpacity>
            ))}
            {selectedCity && (
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmButtonText}>Bekreft {selectedCity.name}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    cityButton: {
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
    },
    selectedCityButton: {
        backgroundColor: '#388E3C',
    },
    cityButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
    },
    confirmButton: {
        padding: 15,
        backgroundColor: '#1976D2',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    confirmButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
