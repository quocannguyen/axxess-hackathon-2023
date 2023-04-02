import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
    return (
      <View style={styles.HomeScreen}>
        <View style={styles.Group645}>
          <Text style={styles.HealthBuddy}>HEALTH BUDDY</Text>
          <View style={styles.Symptoms1}>
            <Text style={styles.Symptoms}>Symptoms</Text>
          </View>
          <View style={styles.Locate1}>
            <Text style={styles.Locate}>Locate</Text>
          </View>
          <View style={styles.Prescriptions}>
            <Text style={styles.Prescription}>Prescription</Text>
          </View>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    HomeScreen: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: 430,
      height: 932,
      paddingLeft: 45,
      paddingRight: 45,
      paddingTop: 112,
      paddingBottom: 44,
      boxSizing: "border-box",
      backgroundColor: "rgba(231,216,242,1)",
    },
    Group645: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
    },
    HealthBuddy: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: "rgba(0,0,0,1)",
      fontSize: "48px",
      lineHeight: "48px",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "600",
      textAlign: "center",
    },
    Symptoms1: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      paddingLeft: 108,
      paddingRight: 91,
      paddingTop: 21,
      paddingBottom: 24,
      borderRadius: 15,
      marginTop: 250,
      marginBottom: 23,
      boxSizing: "border-box",
      backgroundColor: "rgba(154,152,237,1)",
    },
    Symptoms: {
      color: "rgba(117,108,173,1)",
      fontSize: "28px",
      lineHeight: "28px",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "600",
    },
    Locate1: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      paddingLeft: 130,
      paddingRight: 119,
      paddingTop: 21,
      paddingBottom: 24,
      borderRadius: 15,
      marginBottom: 23,
      boxSizing: "border-box",
      backgroundColor: "rgba(154,152,237,1)",
    },
    Locate: {
      color: "rgba(117,108,173,1)",
      fontSize: "28px",
      lineHeight: "28px",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "600",
    },
    Prescriptions: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      paddingLeft: 99,
      paddingRight: 83,
      paddingTop: 21,
      paddingBottom: 24,
      borderRadius: 15,
      boxSizing: "border-box",
      backgroundColor: "rgba(154,152,237,1)",
    },
    Prescription: {
      color: "rgba(117,108,173,1)",
      fontSize: "28px",
      lineHeight: "28px",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "600",
    },
  })