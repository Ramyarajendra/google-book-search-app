const mongoose = require('mongoose')

const ApikeySchema = mongoose.Schema({
    apikey: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('apikeys', ApikeySchema)