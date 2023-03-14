var express  = require('express');
let router = express.Router();

const openai_controller = require("../controllers/openai")

router.get('/openai',openai_controller.getResponse)
router.post('/openai',openai_controller.postResponse)

module.exports = router