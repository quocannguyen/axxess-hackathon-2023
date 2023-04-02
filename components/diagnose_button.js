import { useNavigation } from '@react-navigation/native';
import {Image, View, TouchableOpacity, Text } from 'react-native';

export function Diagnose(props) {
    const navigation = useNavigation();
    const {imageSource} = props
  
    return (
       <View>
      <TouchableOpacity onPress={() => navigation.navigate('Personalize')}>
        <Image source={imageSource}/>
      </TouchableOpacity>
    </View>
    );
  }