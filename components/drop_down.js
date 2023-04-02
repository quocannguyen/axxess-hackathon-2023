import { Image, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import {SYMPTOMS} from "../symptomAPI/symtom-data";

SYMPTOMS.forEach(symptom => {
    symptom["label"] = symptom["Name"]
    symptom["value"] = symptom["ID"]
})

export function DropDownMenu(props) {
    const[open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(SYMPTOMS);
    const addValueToList = props.addValueToList

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={value => {
                console.log(value)
                addValueToList(value)
            }}
        />
    );
}