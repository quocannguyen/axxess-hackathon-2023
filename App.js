import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import Symptoms from './screens/Symptoms';
import Locate from './screens/Locate';
import Prescription from './screens/Prescripton';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Diagnose } from './components/diagnose_button';
import PersonalizeScreen from './screens/Personalize';

const Stack = createNativeStackNavigator(); 
export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Symptoms" component={Symptoms} />
        <Stack.Screen name="Locate" component={Locate}/>
        <Stack.Screen name="Prescription" component={Prescription}/>
        <Stack.Screen name="Diagnose" component={Diagnose} />
        <Stack.Screen name="Personalize" component={PersonalizeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

