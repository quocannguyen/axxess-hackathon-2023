import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { BackButton } from '../components/back_button';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const buttonWidth = screenWidth * 0.65;

export default function PrescriptionsScreen(){
    return (
        <View style={styles.Prescription_add}>
            <View style={styles.BackButton_Image}>
                <BackButton
                    onPress={() => console.log('Button pressed!')}
                    imageSource={require('../assets/back_button.png')}
                />
            </View>
            <View style={styles.Name1}>
              <Text style={styles.Name}>Name</Text>
            </View>
            <View style={styles.Quantity1}>
              <Text style={styles.Quantity}>Quantity</Text>
            </View>
            <View style={styles.Reminder1}>
              <Text style={styles.Reminder}>Reminder</Text>
            </View>
            <View style={styles.Set1}>
              <Text style={styles.Set}>Set</Text>
            </View>
          </View>
      )
    }
    
      const styles = StyleSheet.create({
        Prescription_add: {
            flex: 1,
            backgroundColor: 'rgba(231,216,242,1)',
            paddingTop: '50%',
            paddingLeft: '10%',
            paddingRight: '10%',
        },
        Group337: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
        },
        Back_button: {
          width: '16%',
          height: '17%',
        },
        BackButton_Image: {
            width: '10%',
            position: 'absolute',
            top: '8%',
            left: '12%',
          },
        Name1: {
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: '7%',
          paddingBottom: '7%',
          marginBottom: '4%',
          borderRadius: 15,
          boxSizing: "border-box",
          backgroundColor: "rgba(154,152,237,1)",
        },
        Name: {
          color: "rgba(117,108,173,1)",
          fontSize: "28px",
          lineHeight: "28px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "600",
          display: "flex",
        },
        Quantity1: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: '7%',
          paddingBottom: '7%',
          marginBottom: '4%',
          borderRadius: 15,
          boxSizing: "border-box",
          backgroundColor: "rgba(154,152,237,1)",
        },
        Quantity: {
          color: "rgba(126,119,189,1)",
          fontSize: "28px",
          lineHeight: "28px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "600",
        },
        Reminder1: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: '7%',
          paddingBottom: '7%',
          borderRadius: 15,
          marginBottom: '4%',
          boxSizing: "border-box",
          backgroundColor: "rgba(154,152,237,1)",
        },
        Reminder: {
          color: "rgba(117,108,173,1)",
          fontSize: "28px",
          lineHeight: "28px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "600",
        },
        Set1: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: '7%',
          paddingBottom: '7%',
          borderRadius: 15,
          boxSizing: "border-box",
          backgroundColor: "rgba(154,152,237,1)",
        },
        Set: {
          color: "rgba(122,114,181,1)",
          fontSize: "28px",
          lineHeight: "28px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "600",
        },
      })