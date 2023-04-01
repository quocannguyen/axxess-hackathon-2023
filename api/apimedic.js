const APIMEDIC_AUTH_TOKEN = process.env.APIMEDIC_AUTH_TOKEN

if (!APIMEDIC_AUTH_TOKEN) {
    throw new Error("Please define APIMEDIC_AUTH_TOKEN in .env.local")
}

const Genders = {
    Male: "male",
    Female: "female"
}

function getDiagnosis(symptomIds, gender, yearOfBirth) {
    let url = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${symptomIds.toString()}]&gender=${gender}&year_of_birth=${yearOfBirth}&token=${APIMEDIC_AUTH_TOKEN}&format=json&language=en-gb`
    fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(response => {
            response.forEach(element => {
                let diagnosis = Diagnosis.getFromJson(element)
                console.log(diagnosis)
            })
        })
}