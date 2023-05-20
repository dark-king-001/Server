var express  = require('express');
let router = express.Router();

const auth_controller = require("../controllers/authentication")
const verifyToken = require('../middleware/authJWT')

router.post('/login',auth_controller.login)
router.post('/register',auth_controller.register)
router.get("/hiddencontent", verifyToken, function (req, res) {
  if (!user) {
    res.status(403)
      .send({
        message: "Invalid JWT token"
      });
  }
  if (req.user == "admin") {
    res.status(200)
      .send({
        message: "Congratulations! but there is no hidden content"
      });
  } else {
    res.status(403)
      .send({
        message: "Unauthorised access"
      });
  }
});

module.exports = router