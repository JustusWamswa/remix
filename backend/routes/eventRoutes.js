const eventController = require('../controllers/eventController')
const express = require('express')
const requireAuthentication = require('../middleware/requireAuthentication')
const router = express.Router()

// auth middleware
router.use(requireAuthentication)

router.post('/createEvent', eventController.createEvent)
router.get('/getEvents', eventController.getEvents)
router.get('/getEvent/:id', eventController.getEvent)
router.put('/updateEvent', eventController.updateEvent)
router.delete('/deleteEvent', eventController.deleteEvent)


module.exports = router