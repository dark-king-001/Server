var express  = require('express');
let router = express.Router();

const profile_controller = require("../controllers/profile")

router.post('/profile',profile_controller.setProfile)
router.get('/profile',profile_controller.getProfile)

module.exports = router