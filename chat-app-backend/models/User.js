const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageKey: {
    type: String,
  },
  bio: {
    type: String,
  },
  friends: {
    type: Array,
    required: true,
  },
  requests: {
    type: Array,
    required: true,
  },
  sent_requests: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
