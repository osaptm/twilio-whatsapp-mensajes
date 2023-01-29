const express = require('express');
require('dotenv').config();
const app = express();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.post('twilio',(req, res)=>{
    const twilio = new client.twiml.MessagingResponse();
    console.log( req.body, twilio )
    client.message('Gracias por enviarnos un mensaje');
    res.json('OK');
});

app.post('status-twilio',(req, res)=>{
    console.log( req.body )
    res.json('OK');
});

app.listen(process.env.PORT)
console.log('Puerto = '+process.env.PORT)