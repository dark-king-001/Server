var express  = require('express');
let router = express.Router();

const sign_controller = require("../controllers/getProfile")

router.get('/getID',sign_controller.getID)
router.get('/getemail',sign_controller.getEmail)
router.get('/getusername',sign_controller.getUsername)
router.get('/getaccesstoken',sign_controller.getAccessToken)
router.get('/getloggedin',sign_controller.getLoggedin)

module.exports = router