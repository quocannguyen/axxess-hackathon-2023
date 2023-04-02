import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { BackButton } from '../components/back_button';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const buttonWidth = screenWidth * 0.65;

export default function Prescription(){
  const [medicineName, setMedicineName] = useState('');
  const [pillCount, setPillCount] = useState('');
  const [reminder, setReminder] = useState('');
  const [alarmTime, setAlarmTime] = useState('');

  const handleMedicineNameInput = (text) => {
    setMedicineName(text);
  };

  const handlePillCountInput = (text) => {
    setPillCount(text);
  };

  const handleReminderInput = (text) => {
    setReminder(text);
  };

  const handleAlarmTimeInput = (text) => {
    setAlarmTime(text);
  };

  const handleSave = () => {
    console.log('Medicine Name: ' + medicineName);
    console.log('Pill Count: ' + pillCount);
    console.log('Reminder: ' + reminder);
    console.log('Alarm Time: ' + alarmTime);

  };

  return (
    <View style={styles.Prescription_add}>
        <View style={styles.Group337}>
        <View style={styles.BackButton_Image}>
                    <BackButton
                        imageSource={require('../assets/back_button.png')}
                    />
                </View>
      <TextInput
        style={styles.Name1}
        placeholder="Medicine Name"
        onChangeText={handleMedicineNameInput}
        value={medicineName}
      />
      <TextInput
        style={styles.Quantity1}
        placeholder="Pill Count"
        onChangeText={handlePillCountInput}
        value={pillCount}
      />
      <TextInput
        style={styles.Reminder1}
        placeholder="Reminder"
        onChangeText={handleReminderInput}
        value={reminder}
      />
      <TextInput
        style = {styles.Set1}
        placeholder="Alarm Time (HH:MM)"
        onChangeText={handleAlarmTimeInput}
        value={alarmTime}
      />
      <Button
        title="Save"
        onPress={handleSave}
      />
    </View>
    </View>
  );
};


    
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
            top: '70%',
            
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
      });