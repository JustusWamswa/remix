const User = require('../models/userModel')
const bcrypt = require('bcrypt');

const saltRounds = 10;


// create a user
const createUser = async (req, res) => {
    const { password, email } = req.body

    // check if a user with the provided email already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        console.log("Error: The email provided has already been taken")
        res.status(400).json({ error: "The email provided has already been taken" })
        return
    }
    // Hash the user's password
    bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
            console.error('Password hashing error:', err);
            return res.status(500).json(err);
        }

        // Create a new user with hashed password
        try {
            const user = await User.create({ ...req.body, password: hash })
            res.status(200).json(user)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }

    });
}

// read users information
const getUsers = async (req, res) => {
    try {
        const users = await User.find().sort({updatedAt: -1})
        res.status(200).json(users)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)

    }
}

// read single user information
const getUser = async (req, res) => {
    const { id } = req.params
    if (!id) {
        console.log("Error: Provide user's id")
        return res.status(400).json({ error: "Provide user's id" })
    }
    try {
        const user = await User.findById(id)
        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)

    }
}

// update user information
const updateUser = async (req, res) => {
    const { id, password } = req.body
    if (!id) {
        console.log("Error: Provide user's id")
        return res.status(400).json({ error: "Provide user's id" })
    }

    // Hash the user's password if it is being updated
    if (password) {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                console.error('Password hashing error:', err);
                return res.status(500).json(err);
            }

            // update user with hashed password
            try {
                const user = await User.findByIdAndUpdate(id, { ...req.body, password: hash }, { new: true })
                res.status(200).json(user)
        
            } catch (error) {
                console.log(error)
                res.status(500).json(error)
            }

        });

        return
    }

    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

// delete user
const deleteUser = async (req, res) => {
    const { id } = req.body
    if (!id) {
        console.log("Error: Provide user's id")
        return res.status(400).json({ error: "Provide user's id" })
    }
    try {
        const user = await User.findByIdAndDelete(id)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = { createUser, getUsers, getUser, updateUser, deleteUser }