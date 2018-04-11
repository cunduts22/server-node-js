
const express = require('express')
const controller = require ('./controller.server')

const router = express.Router()

router.route('/users')
            .get(controller.getData)
            .post(controller.addData)

router.route('/members')
            .get(controller.getUserData)
            .post(controller.addUserData)

module.exports = router