const { default: axios } = require('axios')
const express = require('express')
const ApiKey = require('../models/ApiKey')
const SearchQuery = require('../models/SearchQuery')
const Router = express.Router()

Router.get('/', async (req, res) => {
    
    try {

        const { q } = req.query

        const bookResponse = await SearchQuery.findOne({ searchquery: q })
        if(bookResponse){
            res.send(bookResponse)
        } else {
            const api = await ApiKey.find({})
                if(api){
                    const { apikey } = api[0]
                    const googleBookResponse = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}&key=${apikey}`)
                    if(googleBookResponse.data.items){
                        const result = googleBookResponse.data.items.map(a => {
                        const { title, subtitle, authors, description, categories, publisher, publishedDate, previewLink, imageLinks } = a.volumeInfo
                            return { id: a.id, title, subtitle, authors, description: description && description.slice(0,139), categories, publisher, publishedDate, previewLink, imageLinks}
                        })


                        const searchQuery = new SearchQuery({
                            searchquery: q,
                            response: result
                        })

                        await searchQuery.save()
                        res.send(searchQuery)
                    }else{
                        res.status(400).json({ msg: "No data found!!"})
                    }
                } else {
                    res.status(400).json({ msg: "api key not found"})
                }
        }
    } catch (error) {
        console.error('error', error.response.data)
        res.status(500).json({ msg: "Server Error!! "})
    }
    
})

module.exports = Router

