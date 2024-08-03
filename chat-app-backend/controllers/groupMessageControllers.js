const Message = require('../models/Message');

const createMessageRoom = async (req, res) => {
  const { roomName, members } = req.body;

  try {
    const messageRoom = new Message({
      roomName,
      members,
      messages: [],
    });

    await messageRoom.save();
    res.status(201).json(messageRoom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createMessageRoom,
};
