import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { ScrollView } from 'react-native';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const buttonWidth = screenWidth * 0.65;

export default function HomeScreen() {

    const navigation = useNavigation();

  return (
    <View style={styles.HomeScreen}>
      <View style={styles.Group645}>
        <Text style={styles.HealthBuddy}>HEALTH BUDDY</Text>
        <View style={styles.Symptoms1}>
          <TouchableOpacity onPress={() => navigation .navigate('Symptoms')}>
                <Text style={styles.Symptoms}>Symptoms</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Locate1}>
          <TouchableOpacity onPress={() => navigation .navigate('Locate')}>
                <Text style={styles.Locate}>Locate</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Prescriptions}>
          <TouchableOpacity onPress={() => navigation .navigate('Prescription')}>
                <Text style={styles.Prescription}>Prescription</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    backgroundColor: 'rgba(231,216,242,1)',
    padding: 0.05 * screenWidth,
    paddingTop: 0.12 * screenHeight,
    paddingBottom: 0.05 * screenHeight,
  },
  Group645: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // center horizontally
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  },
  HealthBuddy: {
    color: 'rgba(0,0,0,1)',
    fontSize: screenWidth * 0.12,
    lineHeight: screenWidth * 0.12,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 0.05 * screenHeight,
  },
  Symptoms1: { 
    
    width: buttonWidth,
    paddingLeft: 0.1 * buttonWidth,
    paddingRight: 0.08 * buttonWidth,
    paddingTop: 0.03 * screenHeight,
    paddingBottom: 0.03 * screenHeight,
    borderRadius: 0.05 * screenWidth,
    marginTop: 0.4 * screenHeight,
    marginBottom: 0.03 * screenHeight,
    alignItems: 'center', // center horizontally
    backgroundColor: 'rgba(154,152,237,1)',
  },
  Symptoms: {
    color: 'rgba(117,108,173,1)',
    fontSize: screenWidth * 0.06,
    lineHeight: screenWidth * 0.06,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
  },
  Locate1: {
    width: buttonWidth,
    paddingLeft: 0.12 * buttonWidth,
    paddingRight: 0.1 * buttonWidth,
    paddingTop: 0.03 * screenHeight,
    paddingBottom: 0.03 * screenHeight,
    borderRadius: 0.05 * screenWidth,
    marginBottom: 0.03 * screenHeight,
    alignItems: 'center', // center horizontally
    backgroundColor: 'rgba(154,152,237,1)',
  },
  Locate: {
    color: 'rgba(117,108,173,1)',
    fontSize: screenWidth * 0.06,
    lineHeight: screenWidth * 0.06,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
  },
  Prescriptions: {
    width: buttonWidth,
    paddingLeft: 0.09 * buttonWidth,
    paddingRight: 0.07 * buttonWidth,
    paddingTop: 0.03 * screenHeight,
    paddingBottom: 0.03 * screenHeight,
    borderRadius: 0.05 * screenWidth,
    alignItems: 'center', // center horizontally
    backgroundColor: 'rgba(154,152,237,1)',
  },
  Prescription: {
    color: 'rgba(117,108,173,1)',
    fontSize: screenWidth * 0.06,
    lineHeight: screenWidth * 0.06,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
  },
});