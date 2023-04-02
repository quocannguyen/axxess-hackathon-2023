import {Address} from "../models/Address";

const RADAR_API_KEY = "prj_test_pk_e338470edd0e7b79510549beb2767c144e3bf4f5"

export function getNearbyAddresses(query, latitude, longitude) {
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

export function getFromAddress(address) {
    let url = `https://api.radar.io/v1/geocode/forward?query=${address}`
    fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": RADAR_API_KEY
        }
    })
        .then(response => response.json())
        .then(response => {
        console.log(Address.getFromJson(response["addresses"][0]))
    })
}