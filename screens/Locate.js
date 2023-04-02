import { useNavigation } from "@react-navigation/native";
import { View,Text, TouchableOpacity } from "react-native";

export default function Locate(){
   const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the Locate screen!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}