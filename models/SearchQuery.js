const mongoose = require('mongoose')

const QuerySchema = mongoose.Schema({
    searchquery: {
        type: String,
        required: true
    },
    response: mongoose.Schema.Types.Mixed,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('searchquery', QuerySchema)