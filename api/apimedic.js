// const APIMEDIC_AUTH_TOKEN = process.env.APIMEDIC_AUTH_TOKEN
//
// if (!APIMEDIC_AUTH_TOKEN) {
//     throw new Error("Please define APIMEDIC_AUTH_TOKEN in .env.local")
// }
import {Diagnosis} from "../models/Diagnosis";

const APIMEDIC_AUTH_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5pc2hpdGhzYXJtYUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEyMDY1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIzLTA0LTAxIiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2ODA0NDkyODIsIm5iZiI6MTY4MDQ0MjA4Mn0.wf-iUAqBKHWUWGkwTISFJoMK7PiKVK3OMPYWrfmo7XU"


export const Genders = {
    Male: "male",
    Female: "female"
}

export function getDiagnosis(symptomIds, gender, yearOfBirth) {
    console.log(symptomIds)
    let url = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${symptomIds.toString()}]&gender=${gender}&year_of_birth=${yearOfBirth}&token=${APIMEDIC_AUTH_TOKEN}&format=json&language=en-gb`
    fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log("response " + response)
            response.forEach(element => {
                let diagnosis = Diagnosis.getFromJson(element)
                DIAGNOSIS_LIST.push(diagnosis)
            })
            console.log(DIAGNOSIS_LIST)
        })
}

export const DIAGNOSIS_LIST = []