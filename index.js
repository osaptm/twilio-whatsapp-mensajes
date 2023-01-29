
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')(accountSid, authToken);


app.use( cors() );
app.use( express.json() );

app.post('/twilio',(req, res)=>{
    const response = new twilio.twiml.MessagingResponse();
    console.log( "Holaaaaaaaaa", response.toString() )
    response.message('Gracias por enviarnos un mensaje');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(response.toString());
});

app.post('/status-twilio',(req, res)=>{
    console.log( req.body )
    res.json('OK');
});

app.listen(process.env.PORT)
console.log('Puerto = '+process.env.PORT)