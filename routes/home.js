var express  = require('express');
let router = express.Router();

const home_controller = require("../controllers/home")

router.get ('/home',home_controller.getResponse)
router.post('/home',home_controller.postResponse)

module.exports = router