import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { BackButton } from '../components/back_button';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const buttonWidth = screenWidth * 0.65;

export default function TrackerScreen(){
    return (
        <View style={styles.TrackerScreen}>
            <View style={styles.BackButton_Image}>
                <BackButton
                    onPress={() => console.log('Button pressed!')}
                    imageSource={require('../assets/back_button.png')}
                />
            </View>
            <View>
                <Text style={styles.WorkProgress}>Work in Progress</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TrackerScreen: {
        flex: 1,
        backgroundColor: 'rgba(231,216,242,1)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    Back_button: {
        width: '16%',
        height: '17%',
    },
    BackButton_Image: {
        width: '100%',
        position: 'absolute',
        top: '8%',
        paddingLeft: '15%',
    },
    WorkProgress: {
        fontSize: 30,
        fontWeight: 700,
    }
});