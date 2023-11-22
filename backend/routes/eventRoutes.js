const eventController = require('../controllers/eventController')
const express = require('express')
const router = express.Router()

router.post('/createEvent', eventController.createEvent)
router.get('/getEvents', eventController.getEvents)
router.get('/getEvent/:id', eventController.getEvent)
router.put('/updateEvent', eventController.updateEvent)
router.delete('/deleteEvent', eventController.deleteEvent)


module.exports = router