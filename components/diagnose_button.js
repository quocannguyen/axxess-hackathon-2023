import { Image, TouchableOpacity } from 'react-native';

export function DiagnoseButton(props) {
    const { onPress, imageSource } = props;
  
    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={imageSource} />
      </TouchableOpacity>
    );
  }