const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    graduationYear: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    profilePicture: {
        type: String,
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User