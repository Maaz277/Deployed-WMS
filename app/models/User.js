const mongoose = require('mongoose')

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Id: String,
    password: String
})

module.exports = mongoose.model('User',schema)