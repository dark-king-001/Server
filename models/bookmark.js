var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
/**
 * Bookmark Schema
 */
var bookmarkSchema = new Schema({
  createdBy: {
      type: String,
      unique: [true, "email already exists in database!"],
      lowercase: true,
      trim: true,
      required: [true, "email not provided"],
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: '{VALUE} is not a valid email!'
      }
  },
  groupname: {
      type: String,
      required: [true, "bookmark without a group is not valid"]
  },
  name: {
      type: String,
  },
  link: {
      type: String,
      required: [true, "Bookmark without a link is not valid"]
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);