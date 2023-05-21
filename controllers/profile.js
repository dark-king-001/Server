var Profile = require("../models/profile");

let setProfile = (req, res) => {
  const profile = new Profile({
    fullName: req.body.username,
    email: req.body.email,
    aboutMe: req.body.aboutMe,
    status: req.body.status
  });

  profile.save((err, user) => {
    if (err) {
      res.status(500)
        .send({
          message: err
        });
      return;
    } else {
      console.log(`${user.email} profile data saved`)
      return res.status(200).json({message : "success"})
    }
  });
};

let getProfile = (req, res) => {
  Profile.findOne({
      email: req.query.email
    })
    .exec((err, user) => {
      if (err) {
        res.status(500)
          .send({
            message: err
          });
        return;
      }
      if (!user) {
        return res.status(404)
          .send({
            message: "User Not found."
          });
      }
      const shipment = {user}
      console.log(`${user} signed in`)
      return res.status(200).json(shipment)
    });
};

module.exports = {setProfile, getProfile}