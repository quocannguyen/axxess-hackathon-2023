import {Issue} from "./Issue";

export class Diagnosis {
    constructor(issue, accuracy, icdCodes, icdNames, profName, ranking) {
        this.issue = issue
        this.accuracy = accuracy
        this.icdCodes = icdCodes
        this.icdNames = icdNames
        this.profName = profName
        this.ranking = ranking
    }

    static getFromJson(diagnosisJson) {
        console.log(diagnosisJson)
        let issue = new Issue(diagnosisJson["Issue"]["ID"], diagnosisJson["Issue"]["Name"])
        let accuracy = diagnosisJson["Issue"]["Accuracy"]
        let icdCodes = diagnosisJson["Issue"]["Icd"].split(";")
        let icdNames = diagnosisJson["Issue"]["IcdName"].split(";")
        let profName = diagnosisJson["Issue"]["ProfName"]
        let ranking = diagnosisJson["Issue"]["Ranking"]
        return new Diagnosis(issue, accuracy, icdCodes, icdNames, profName, ranking)
    }
}