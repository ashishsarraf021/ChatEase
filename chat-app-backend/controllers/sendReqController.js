const User = require('../models/User');

const sendReq = async (req, res) => {
    const senderEmail = req.user.email;
    const {reciverEmail} = req.body;
    if(senderEmail === reciverEmail){
        return res.status(400).json({error:'sender and reciver cannot be same'});
    }
    try {
        const sender = await User.findOne({email:senderEmail});
        const reciver = await User.findOne({email:reciverEmail});

        if(!sender||!reciver){
            return res.status(400).json({error:'sender or reciver does not exists'});
        }

        if(!sender.sent_requests.includes(reciverEmail)){
            sender.sent_requests.push(reciverEmail);
        }
        if(!reciver.requests.includes(senderEmail)){
            reciver.requests.push(senderEmail);
        }

        await sender.save();
        await reciver.save();

        return res.status(200).json({
            message:'request seant successfully',
            sender,
            reciver

        })
    
    } catch (error) {
        return res.status(500).json({error:'server error'});
    }
};

module.exports = {
  sendReq,
};
