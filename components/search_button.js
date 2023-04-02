import { Image, TouchableOpacity } from 'react-native';

export function SearchButton(props) {
    const { onPress, imageSource } = props;
  
    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={imageSource} />
      </TouchableOpacity>
    );
  }