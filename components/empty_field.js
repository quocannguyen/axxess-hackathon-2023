import { Image, TouchableOpacity } from 'react-native';
//import { ScheduleButton } from './schedule_button';

export function EmptyFieldButton(props) {
    const { onPress, imageSource } = props;
  
    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={imageSource} />
      </TouchableOpacity>
    );
  }