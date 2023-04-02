export class Address {
    constructor(latitude, longitude, layer, formattedAddress, label) {
        this.latitude = latitude
        this.longitude = longitude
        this.layer = layer
        this.formattedAddress = formattedAddress
        this.label = label
    }

    static getFromJson(addressJson) {
        let latitude = addressJson["latitude"]
        let longitude = addressJson["longitude"]
        let layer = addressJson["layer"]
        let formattedAddress = addressJson["formattedAddress"]
        let label = ""
        if (addressJson["placeLabel"]) {
            label = addressJson["placeLabel"]
        } else if (addressJson["addressLabel"]) {
            label = addressJson["addressLabel"]
        }
        return new Address(latitude, longitude, layer, formattedAddress, label)
    }
}