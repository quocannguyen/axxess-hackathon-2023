import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { BackButton } from '../components/back_button';
import { AddButton } from '../components/add_button';
import { SearchButton } from '../components/search_button';
import { EmptyFieldButton } from '../components/empty_field';
import { ScheduleButton } from '../components/schedule_button';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function LocationsScreen() {

    return (
        <View style={styles.Background}>
            <View style={styles.Group645}>
                <View style={styles.BackButton_Image}>
                    <BackButton
                        onPress={() => console.log('Button pressed!')}
                        imageSource={require('../assets/back_button.png')}
                    />
                </View>
                <View style={styles.SearchButton_Image}>
                    <SearchButton
                        onPress={() => console.log('Button pressed!')}
                        imageSource={require('../assets/Search_button.png')}
                    />
                </View>
                <View style={styles.Background2}>
                    <Text style={styles.Text1}>Nearby Medical Facilities</Text>
                    <View style={styles.EmptyField_Image}>
                        <EmptyFieldButton
                            onPress={() => console.log('Button pressed!')}
                            imageSource={require('../assets/empty_field.png')}
                        />
                    </View>
                    <View style={styles.ScheduleButton_Image}>
                        <ScheduleButton
                            onPress={() => console.log('Button pressed!')}
                            imageSource={require('../assets/schedule_button.png')}
                        />
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
    },
    Group645: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', 
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
    },
    Background2: {
        backgroundColor: '#756CAD',
        aspectRatio: 333/558,
        position: 'absolute',
        top: 0,
        botttom: 0,
        left: 0,
        right: 0,
        marginLeft: 0.1 * screenWidth,
        marginRight: 0.1 * screenWidth,
        marginTop: 0.33 * screenHeight,
        borderRadius: 0.05 * screenWidth,
        alignItems: 'center',
    },
    Text1: {
        color: '#FFFFFF',
        fontSize: screenWidth * 0.07,
        lineHeight: screenWidth * 0.12,
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
        textAlign: 'center',
    },
    BackButton_Image: {
        width: '10%', // adjust this value as needed
        aspectRatio: 63 / 67, // maintains the aspect ratio of the image
        position: 'absolute',
        top: '5.0%',
        left: '3.0%',
    },
    SearchButton_Image: {
        aspectRatio: 333/73,
        position: 'absolute',
        top: '20.0%',
        left: '4.5.0%',
    },
    EmptyField_Image: {
        aspectRatio: 213/50,
        position: 'absolute',
        top: '13.0%',
        left: '5.0%',
    },
    ScheduleButton_Image: {
        width: '10%',
        aspectRatio: 47/50,
        position: 'absolute',
        right: '10.0%',
        top: '13.0%',
    }

});