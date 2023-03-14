const Bookmark = require("../models/bookmark");

let save_Bookmark = (req, res) => {
  const bookmark = new Bookmark({
    createdBy: req.body.username,
    groupname: req.body.groupname,
    name: req.body.name,
    link: req.body.link,
  });

  bookmark.save((err, user) => {
    if (err) {
      res.status(500)
        .send({
          message: err
        });
      return;
    } else {
      res.status(200).send("bookmark saved successfully")
    }
  });
};
let load_Bookmark = (req, res) => {
    Bookmark.find({
      createdBy: req.body.email
    })
    .exec((err, bookmark) => {
      if (err) {
        res.status(500)
          .send({
            message: err
          });
        return;
      }
      if (!bookmark) {
        return res.status(404)
          .send({
            message: "bookmark Not found."
          });
      }
      //responding to client request with bookmark list
      res.status(200)
        .send(bookmark)
    });
};

module.exports = {save_Bookmark, load_Bookmark}