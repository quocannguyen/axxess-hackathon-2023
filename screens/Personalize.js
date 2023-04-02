import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { BackButton } from '../components/back_button';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const buttonWidth = screenWidth * 0.65;

export default function PersonalizeScreen(){
    return (
        <View style={styles.PersonalizeScreen}>
            <BackButton
                    onPress={() => console.log('Button pressed!')}
                    imageSource={require('../assets/back_button.png')}
            />
            <View> 
                <Text style={styles.RecommendationsText}>Recommendations</Text>
                </View>
            <View style={styles.Recommendations}>
                <View style={styles.RecommendationsTop}>
                </View>
            </View>
            <View style={styles.Scroll}>                
            </View>
            <View style={styles.PersonalizedList}>
                <View>
                    <Text style={styles.PersonalizedHeading}>Personalized</Text>
                </View>
                <View style={styles.Container}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PersonalizeScreen: {
        flex: 1,
        backgroundColor: 'rgba(231,216,242,1)',
        paddingTop: '14%',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '14%',
        display: "flex",
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
    RecommendationsText: {
        marginTop: '9%',
        fontWeight: 700,
        fontSize: '24',
        alignSelf: 'center',
    },
    RecommendationsTop: {
        borderWidth: 1,
        width: '100%',
        height: '%',
        backgroundColor: "white",
        borderBottomRightRadius: '30%',
        borderBottomLeftRadius: '30%',
        borderTopLeftRadius: '30%',
        borderTopRightRadius: '30%',
    },
    Scroll: {
        marginTop: '4%',
        height: '30%',
        backgroundColor: "black",
        borderWidth: 1,
        borderBottomRightRadius: '30%',
        borderBottomLeftRadius: '30%',
        borderTopLeftRadius: '30%',
        borderTopRightRadius: '30%',
    },
    PersonalizedList: {
        width: '100%',
        height: '50%',
        display: "flex",
        padding: '3.5%',
        marginTop: '13%',
        borderTopLeftRadius: '30%',
        borderTopRightRadius: '30%',
        borderBottomRightRadius: '30%',
        borderBottomLeftRadius: '30%',
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '5%',
    },
    PersonalizedHeading: {
        fontSize: '20%',
        fontWeight: 700,
    },
    Container: {
        borderWidth: '150%',
        Width: '100%',
        backgroundColor: "grey",
        Display: "flex",
    }
});