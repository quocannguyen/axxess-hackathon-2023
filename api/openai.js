import { Configuration, OpenAIApi } from "openai"

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY
// if (!OPENAI_API_KEY) {
//     throw new Error("Please define OPENAI_API_KEY in .env.local")
// }
// const OPENAI_ORGANIZATION_KEY = process.env.OPENAI_ORGANIZATION_ID
// if (!OPENAI_ORGANIZATION_KEY) {
//     throw new Error("Please define OPENAI_ORGANIZATION_ID in .env.local")
// }

const configuration = new Configuration({
    organization: OPENAI_ORGANIZATION_ID,
    apiKey: OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
export async function test() {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Say Say this is a test",
            max_tokens: 7,
            temperature: 0,
        });
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}