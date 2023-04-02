import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { BackButton } from '../components/back_button';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const buttonWidth = screenWidth * 0.65;

export default function TrackerScreen(){
    return (
        <View style={styles.TrackerScreen}>
            <View style={styles.IconContainer}>
                <View style={styles.BackButton_Image}>
                    <BackButton
                        onPress={() => console.log('Button pressed!')}
                        imageSource={require('../assets/back_button.png')}
                    />
                </View>
                <View style={styles.add_button}>
                    <BackButton
                        onPress={() => console.log('Button pressed!')}
                        imageSource={require('../assets/add_button.png')}
                    />
                </View>
            <Text>Hello World</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TrackerScreen: {
        flex: 1,
        backgroundColor: 'rgba(231,216,242,1)',
        paddingTop: '14%',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '14%',
        display: "flex",
        },
    Group337: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        },
    IconContainer: {
        border: 5,
    }

});