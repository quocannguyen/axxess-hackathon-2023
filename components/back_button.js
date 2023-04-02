import { useNavigation } from '@react-navigation/native';
import {Image, View, TouchableOpacity, Text } from 'react-native';

export function BackButton(props) {
    const navigation = useNavigation();
    const {imageSource} = props
  
    return (
       <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={imageSource}/>
      </TouchableOpacity>
    </View>
    );
  }