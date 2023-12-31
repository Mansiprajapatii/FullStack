const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    default: null,
    required: true,
  },

  middlename: {
    type: String,
    default: null,
  },

  lastname: {
    type: String,
    default: null,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    unique: true,
    required: true,
  },

  token: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
 