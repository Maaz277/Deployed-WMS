const mongoose = require('mongoose')

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: String,
    depot: Number
})

module.exports = mongoose.model('Info',schema)