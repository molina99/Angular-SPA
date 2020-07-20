const express = require('express')
let api = express.Router()

const userControl = require('../controls/user.control')

api.post('/login', userControl.loginUser)
api.post('/postUser', userControl.postUser)
api.get('/getUsers', userControl.getUsers)
api.delete('/deleteUser/:id', userControl.deleteOne)

module.exports = api
