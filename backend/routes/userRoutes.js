const userController = require('../controllers/userController')
const express = require('express')
const router = express.Router()

router.post('/createUser', userController.createUser)
router.get('/getUsers', userController.getUsers)
router.get('/getUser/:id', userController.getUser)
router.put('/updateUser', userController.updateUser)
router.delete('/deleteUser', userController.deleteUser)


module.exports = router