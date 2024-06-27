
const express = require('express')
const { ListOfStudent, register, signin, dashboard, verified, sendMailer} = require('../controllers/user.controller')
const router = express.Router()

router.get('/', ListOfStudent)
// router.get('/register', register)
router.post('/register', register)
router.get('/register', register)
// router.get('/login', signin)
router.post('/login', signin)
router.get('/dashboard', dashboard)
router.get('/verifyUser', verified)
router.get('/sendMailer', sendMailer)

module.exports = router