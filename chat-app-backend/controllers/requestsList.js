const User = require('../models/User');

const reqList = async (req, res) => {
    const userEmail = req.user.email;

    try {
        const user = await User.findOne({email:userEmail});

        if(!user){
            return res.status(400).json({error:'user does not exists'});
        }

       const reqs = user.requests;


        return res.status(200).json({
            message:'request list',
            reqs

        })
    
    } catch (error) {
        return res.status(500).json({error:'server error'});
    }
};

module.exports = {
  reqList
};
