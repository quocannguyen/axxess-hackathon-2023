import {Address} from "../models/Address";

export function getAddresses(query, latitude, longitude) {
    let url = `https://api.radar.io/v1/search/autocomplete?query=${query}&near=${latitude},${longitude}`
    fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": RADAR_API_KEY
        }
    })
        .then(response => response.json())
        .then(response => {
            response["addresses"].forEach(element => {
                let address = Address.getFromJson(element)
                console.log(address)
            })
        })
}