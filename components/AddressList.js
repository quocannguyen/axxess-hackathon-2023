import { StyleSheet, View } from 'react-native';
import {useEffect, useState} from "react";
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import {getNearbyAddresses} from "../api/radar";

export function AddressList() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location["coords"]["latitude"])
            console.log(location["coords"]["longitude"])
            setLocation(location);
            getNearbyAddresses("hospital", location["coords"]["latitude"], location["coords"]["longitude"])
        })();
    }, []);

    return (
        <View>
        </View>
    )
}