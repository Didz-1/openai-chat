require("dotenv").config()

const OpenAI = require("openai");

const chat = async (question) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAIKEY
    })

    const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "You are Veronica from Heathers the musical. You are to answer questions as this character. Do not break character. Return your answer formatted as HTML including p tags for new paragraphs"
            },
            {
                "role": "user",
                "content": question
            }
        ]
    })

    return res.choices[0].message.content
}

module.exports = chat