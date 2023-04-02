import { useNavigation } from '@react-navigation/native';
import {Image, View, TouchableOpacity, Text } from 'react-native';
import {Genders, getDiagnosis} from "../api/apimedic";
import {CHOSEN_SYMPTOMS, getNameById, SYMPTOMS} from "../symptomAPI/symtom-data";
import {getOpenAi} from "../api/openai";

export function DiagnoseButton(props) {
    const navigation = useNavigation();
    const imageSource = props.imageSource
    const symptoms = props.symptoms
  
    return (
       <View>
      <TouchableOpacity onPress={() => {
          navigation.navigate('Personalize')
          getDiagnosis(CHOSEN_SYMPTOMS, Genders.Male, 2002)
          let symptomNames = CHOSEN_SYMPTOMS.map(id => getNameById(id))
          getOpenAi(symptomNames).then(r => {})
      }}>
        <Image source={imageSource}/>
      </TouchableOpacity>
    </View>
    );
  }