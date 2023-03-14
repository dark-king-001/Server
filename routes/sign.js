var express  = require('express');
let router = express.Router();

const sign_controller = require("../controllers/sign")

router.get('/signin',sign_controller.sign_in)
router.get('/signup',sign_controller.sign_up)

module.exports = router