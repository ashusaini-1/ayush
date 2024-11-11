const express=require('express');
const {sendEmail} = require('./nodemailer');

const router=express.Router();

router.route("/send-query").post(sendEmail)

module.exports=router;