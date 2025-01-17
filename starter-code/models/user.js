const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = Schema({
  username: String,
  email:    String,
  password: String,
  profileImg: String,
  profileImgPath: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
