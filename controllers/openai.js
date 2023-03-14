const axios = require("axios")

let datafetch = async (text,temperature = 0.7,max_tokens = 64) => {
    let api_key = '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'
    return await axios.post(
        'https://api.openai.com/v1/completions',
        {
            'model': 'text-davinci-003',
            'prompt': text,
            'temperature': temperature,
            'max_tokens': max_tokens
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + api_key
            }
        }
    )
    .then(
        res => {
            return res.data.choices[0].text
        }
    )
}

let getResponse = (req,res,next) => {
    res.send("<h>no page available</h>")
    res.end()
}
let postResponse = (req,res,next) => {
    datafetch(text = req.body.text)
    .then(response => {
        res.send(response)
    })
    .catch(err => console.log('an error occured ' + err))
}

module.exports = {getResponse, postResponse}