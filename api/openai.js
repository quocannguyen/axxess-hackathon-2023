const OPENAI_API_KEY = process.env.OPENAI_API_KEY

if (!OPENAI_API_KEY) {
    throw new Error("Please define OPEN_API_KEY in .env.local")
}