import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/Home.js'
import PrescriptionsScreen from './screens/Prescriptions.js'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <PrescriptionsScreen/>
  );
}