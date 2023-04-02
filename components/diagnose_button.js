import { useNavigation } from '@react-navigation/native';
import {Image, View, TouchableOpacity, Text } from 'react-native';

export function DiagnoseButton(props) {
    const navigation = useNavigation();
    const imageSource = props.imageSource
    const symptoms = props.symptoms
  
    return (
       <View>
      <TouchableOpacity onPress={() => navigation.navigate('Personalize', {
          paramKey: symptoms
      })}>
        <Image source={imageSource}/>
      </TouchableOpacity>
    </View>
    );
  }