export class Address {
    constructor(latitude, longitude, layer, formattedAddress, placeLabel) {
        this.latitude = latitude
        this.longitude = longitude
        this.layer = layer
        this.formattedAddress = formattedAddress
        this.placeLabel = placeLabel
    }

    static getFromJson(addressJson) {
        let latitude = addressJson["latitude"]
        let longitude = addressJson["longitude"]
        let layer = addressJson["layer"]
        let formattedAddress = addressJson["formattedAddress"]
        let placeLabel = addressJson["placeLabel"]
        return new Address(latitude, longitude, layer, formattedAddress, placeLabel)
    }
}