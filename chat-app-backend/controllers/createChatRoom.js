const Message = require('../models/Message');

const createChatRoom = async (req, res) => {

    const userEmail = req.user.email;
    const {senderEmail} = req.body;

    const roomName1 = `${userEmail}-${senderEmail}`;
    const roomName2 = `${senderEmail}-${userEmail}`;

    const existingRoom1 = await Message.findOne({roomName:roomName1});
    const existingRoom2 = await Message.findOne({roomName:roomName2});

  try {

    if(body && existingRoom1.length === 0 && existingRoom2.length === 0){
      const messageRoom = new Message({
        roomName : roomName1,
        members :[userEmail,senderEmail],
        messages: [
          {
            message:"Foster genuine interactions and build enduring relationships with Chatease.",
            sender:"Chatease-info"
          }
        ],
      });
      await messageRoom.save();
      return res.status(201).message(
        {message:'reqst accepted successfully',
        messageRoom
        }
      )
    }
    else{
      return res.status(201).message(
        {
          message:'Message room already created',
        }
      )
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createChatRoom,
};
