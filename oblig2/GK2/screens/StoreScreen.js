// screens/StoreScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function StoreScreen({ route }) {
  const { place, stores } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Butikker i {place}</Text>
      {stores && stores.length > 0 ? (
        <FlatList
          data={stores}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.storeContainer}>
              <Text style={styles.storeName}>{item.name}</Text>
              <Text style={styles.storeDetails}>Avstand: {item.distance}</Text>
              <Text style={styles.storeDetails}>
                Panting: {item.acceptsPlastic ? "Plast" : ""}{item.acceptsGlass ? ", Glass" : ""}
              </Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noStoresText}>Ingen butikker tilgjengelige for dette stedet</Text>
      )}
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
  },
  storeContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  storeDetails: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  noStoresText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});
