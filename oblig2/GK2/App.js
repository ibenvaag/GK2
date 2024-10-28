// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

// Import screens
import CityScreen from './screens/CityScreen';
import PlaceScreen from './screens/PlaceScreen';
import StoreScreen from './screens/StoreScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="CityScreen">
      <Stack.Screen name="CityScreen" component={CityScreen} options={{ title: "Velg By" }} />
      <Stack.Screen name="PlaceScreen" component={PlaceScreen} options={{ title: "Velg Sted" }} />
      <Stack.Screen name="StoreScreen" component={StoreScreen} options={{ title: "Butikker" }} />
    </Stack.Navigator>
  );
}

function MapStack() {
  return (
    <Stack.Navigator initialRouteName="MapScreen">
      <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Explore" component={MainStack} />
        <Tab.Screen name="Map" component={MapStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: '#1E1E1E',
    borderTopColor: 'transparent',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});
