const AUTH_TOKEN = process.env.AUTH_TOKEN

if (!AUTH_TOKEN) {
    throw new Error("Please define the AUTH_TOKEN inside .env.local")
}

const Genders = {
    Male: "male",
    Female: "female"
}

function getDiagnosis(symptomIds, gender, yearOfBirth) {
    let url = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${symptomIds.toString()}]&gender=${gender}&year_of_birth=${yearOfBirth}&token=${AUTH_TOKEN}&format=json&language=en-gb`
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