const User = require('../models/User');
const { use } = require('../routes/userRoutes');

const acceptReq = async(req,res)=>{
    const userEmail = req.user.email;
    const {senderEmail} = req.body;

    if(userEmail === senderEmail){
        return res.status(400).json({error:'user and sender cannot be same'});
    }

    try {
        const user = await User.findOne({email:userEmail});
        const sender = await User.findOne({email:senderEmail});

        if(!user||!sender){
            return res.status(400).json({error:'user or sender does not eists'});
        }

        if(user.requests.includes(senderEmail) && sender.sent_requests.includes(userEmail)){
            user.requests.pop(senderEmail);
            user.friends.push(senderEmail);
            sender.sent_requests.pop(userEmail);
            sender.friends.push(userEmaill);
        }

        else{
            return res.status(400).json({error:'sender didnt send the req.'})
        }

        await user.save();
        await sender.save();

        return res.status(200).json({
            message:'reqst accepted successfully',
            user,
        })

    } catch (error) {
        return res.status(500).json({error:'server Error'});
    }
};

module.exports={
    acceptReq,
};