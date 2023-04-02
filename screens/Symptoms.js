import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Image, TouchableOpacity } from 'react-native';
import { BackButton } from '../components/back_button';
import { AddButton } from '../components/drop_down';
import { DiagnoseButton } from '../components/diagnose_button';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Symptoms() {
    return (
      <View style={styles.Background}>
        <View style={styles.Group645}>
            <Text style={styles.Symptoms}>Symptoms</Text>
            <View style={styles.BackButton_Image}>
                <BackButton
                    onPress={() => console.log('Button pressed!')}
                    imageSource={require('../assets/back_button.png')}
                />
            </View>
            <View style={styles.AddButton_Image}>
                <AddButton
                    onPress={() => console.log('Button pressed!')}
                    imageSource={require('../assets/add_button.png')}
                />
            </View>
            <View style={styles.Background_Top_Layer}>
                <View style={styles.DiagnoseButton_Image}>
                    <DiagnoseButton
                        onPress={() => console.log('Button pressed!')}
                        imageSource={require('../assets/Diagnose_button.png')}
                    />
                </View>
                <View style={styles.Top_Layer_Window}>

                </View>
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        backgroundColor: '#E7D8F2',
        paddingTop: 0.05 * screenHeight,
        //paddingBottom: 0.05 * screenHeight,
    },
    Group645: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', 
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
    },
    Background_Top_Layer: {
        width: screenWidth,
        height: 0.6 * screenHeight,
        backgroundColor: '#756CAD',
        position: 'absolute',
        top: '40.0%',
        bottom: "0.0%",
        left: "0.0%",
        right: "0.0%",
    },
    Top_Layer_Window: {
        backgroundColor: '#9A98ED',
        aspectRatio: 358/327,
        position: 'absolute',
        top: 0,
        botttom: 0,
        left: 0,
        right: 0,
        marginLeft: 0.1 * screenWidth,
        marginRight: 0.1 * screenWidth,
        marginTop: 0.05 * screenHeight,
        alignItems: 'center',
    },
    BackButton_Image: {
        width: '10%', // adjust this value as needed
        aspectRatio: 63 / 67, // maintains the aspect ratio of the image
        position: 'absolute',
        top: '2.0%',
        left: '3.0%',
    },
    AddButton_Image: {
        width: '80%', 
        position: 'absolute',
        alignSelf: 'center',
        
         // align to the right edge
    },
    DiagnoseButton_Image: {
        aspectRatio: 334/99,
        position: 'absolute',
        top: '70.0%',
        left: '6.0%',
    },
    Symptoms: {
        color: '#3B2960',
        fontSize: screenWidth * 0.12,
        lineHeight: screenWidth * 0.12,
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
        textAlign: 'flex-start',
        marginTop: 0.33 * screenHeight,
        marginLeft: 0.03 * screenWidth,
    },
});