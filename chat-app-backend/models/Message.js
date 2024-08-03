const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: true,
  },
  members: {
    type: Array,
    required: true,
  },
  messages: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('Message', messageSchema);
