const express = require('express');
require('dotenv')();
const app = express();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.post('twilio',(req, res)=>{
    const twilio = new twilio.twiml.MessagingResponse();
    console.log( twilio )
    twiml.message('Gracias por enviarnos un mensaje');
    res.json('OK');
});

app.listen(process.env.PORT)
console.log('Puerto = '+process.env.PORT)