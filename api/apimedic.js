// const APIMEDIC_AUTH_TOKEN = process.env.APIMEDIC_AUTH_TOKEN
//
// if (!APIMEDIC_AUTH_TOKEN) {
//     throw new Error("Please define APIMEDIC_AUTH_TOKEN in .env.local")
// }
import {Diagnosis} from "../models/Diagnosis";

const APIMEDIC_AUTH_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InF1b2NhbjI5MTAyMDAwQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTIwNjQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjMtMDQtMDEiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTY4MDM5ODM4MiwibmJmIjoxNjgwMzkxMTgyfQ.M_y2xyLrd1dE8tkPKgaZFlloP7YZKEdhhS52YeGVY7Q"


export const Genders = {
    Male: "male",
    Female: "female"
}

export function getDiagnosis(symptomIds, gender, yearOfBirth) {
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