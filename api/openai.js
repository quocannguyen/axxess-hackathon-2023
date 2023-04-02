import { Configuration, OpenAIApi } from "openai"


// const OPENAI_API_KEY = process.env.OPENAI_API_KEY
// if (!OPENAI_API_KEY) {
//     throw new Error("Please define OPENAI_API_KEY in .env.local")
// }
// const OPENAI_ORGANIZATION_KEY = process.env.OPENAI_ORGANIZATION_ID
// if (!OPENAI_ORGANIZATION_KEY) {
//     throw new Error("Please define OPENAI_ORGANIZATION_ID in .env.local")
// }

const OPENAI_API_KEY="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"
const OPENAI_ORGANIZATION_ID="org-Pg7mECkb3RR4vUZZipQdocaK"

const configuration = new Configuration({
    organization: OPENAI_ORGANIZATION_ID,
    apiKey: OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export let RECOMMEND = ""

export async function getOpenAi(symptoms) {
    console.log("getOpenAi")
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content:"What are some possible home remedies for: " + symptoms}],
            temperature: 0,
        })
        console.log(response.data.choices[0].message.content)
        RECOMMEND += response.data.choices[0].message.content
    } catch (e) {
        console.log(e)
    }
}