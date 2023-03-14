var express  = require('express');
let router = express.Router();

const bookmark_controller = require("../controllers/bookmark")

router.get('/bookmark', bookmark_controller.load_Bookmark)
router.post('/bookmark',bookmark_controller.save_Bookmark)

module.exports = router