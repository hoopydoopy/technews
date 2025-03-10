const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

app.get('/api/news', async (req, res) =>{
    try {
        const response = await axios.get( 'https://content.guardianapis.com/search' , {
            params: {
                'q': 'OpenAI',
                'tag': 'technology/technology',
                'api-key': process.env.GUARDIAN_API_KEY,
                'show-feilds': 'headline,thumbnail',
                'page-size': 10,
            }
        })

        res.json(response.data)
    } catch (error) {
        console.error('Error fetching news: ', error)
        res.status(500).json({ error: 'Failed to fetch news'})
    }
})
app.get('/', (req, res) => {
    res.send('Backend running')
})

app.listen(port, () => {
    console.log('Server is running')
})