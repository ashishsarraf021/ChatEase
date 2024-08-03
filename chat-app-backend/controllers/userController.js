const User = require('../models/User');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const createUser = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken:token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const {name,email,picture} = payload;

    let user = await User.findOne({email});

    if(!user){
      user = new User({
        name,
        email,
        image:picture,
        friends:[],
        requests:[],
        sent_requests:[],
      });
      await user.save();
    }


    return res.status(200).json({
      message:'user authenticated successfully',
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }

 
};

module.exports = {
  createUser,
};
