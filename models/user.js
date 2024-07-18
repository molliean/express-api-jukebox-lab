const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    hashedPassword: String
})

userSchema.set('toJSON', {
    transform: (doc, returnedObject) => {
        delete returnedObject.hashedPassword
    }
})

module.exports = mongoose.model('User', userSchema)