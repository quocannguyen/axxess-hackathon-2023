import { useNavigation } from "@react-navigation/native";
import { View,Text, TouchableOpacity } from "react-native";

export default function Prescription(){
   const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the Prescription screen!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}