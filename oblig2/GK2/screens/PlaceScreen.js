// screens/PlaceScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { STORES } from '../data/const'; // Sørg for at const.js har riktig data

export default function PlaceScreen({ route, navigation }) {
    const { city } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Velg et sted i {city.name}:</Text>
            <FlatList
                data={city.places}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.placeButton}
                        onPress={() =>
                            navigation.navigate('StoreScreen', { place: item, stores: STORES[item] })
                        }
                    >
                        <Text style={styles.placeButtonText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    placeButton: {
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
    },
    placeButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
    },
});
