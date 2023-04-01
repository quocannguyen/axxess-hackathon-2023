import { Configuration, OpenAIApi } from "openai"

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
if (!OPENAI_API_KEY) {
    throw new Error("Please define OPENAI_API_KEY in .env.local")
}
const OPENAI_ORGANIZATION_KEY = process.env.OPENAI_ORGANIZATION_ID
if (!OPENAI_ORGANIZATION_KEY) {
    throw new Error("Please define OPENAI_ORGANIZATION_ID in .env.local")
}

const configuration = new Configuration({
    organization: OPENAI_ORGANIZATION_KEY,
    apiKey: OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
const response = await openai.listEngines()

export function test() {
    return {
        a: "b",
        c: "d"
    }
}