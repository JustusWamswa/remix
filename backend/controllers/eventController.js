const Event = require('../models/eventModel')

// create an event
const createEvent = async (req, res) => {
    try {
        const event = await Event.create({ ...req.body })
        res.status(200).json(event)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

// get events 
const getEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('creator_user').sort({ updatedAt: -1 })
        res.status(200).json(events)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)

    }
}

// get single event
const getEvent = async (req, res) => {

    const { id } = req.params
    
    if (!id) {
        console.log("Error: Provide event id")
        return res.status(400).json({ error: "Provide event id" })
    }
    try {
        const event = await Event.findById(id).populate('creator_user')
        res.status(200).json(event)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)

    }
}

// update event
const updateEvent = async (req, res) => {
    const { id } = req.body
    if (!id) {
        console.log("Error: Provide event id")
        return res.status(400).json({ error: "Provide event id" })
    }

    try {
        const event = await Event.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(event)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

// delete event
const deleteEvent = async (req, res) => {
    const { id } = req.body
    if (!id) {
        console.log("Error: Provide event id")
        return res.status(400).json({ error: "Provide event id" })
    }
    try {
        const event = await Event.findByIdAndDelete(id)
        res.status(200).json(event)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = { createEvent, getEvent, getEvents, updateEvent, deleteEvent }