
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

//matar taskkill /F /IM node.exe

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse; 

app.use( cors() );
app.use( express.json() );

app.post('/twilio',(req, res)=>{

    const twiml = new MessagingResponse();

    if (req.body.NumMedia > 0) {
      // Message with media
      const mediaUrl = twilio.uri(req.body.MediaUrl0);
      const mediaType = req.body.MediaContentType0;  
      twiml.message(
        `Media received. Type: ${mediaType}. Download it from ${mediaUrl}`
      );
    } else {
      // Text message
      const text = req.body.Body;
      console.log(text,">>>>>>>>>>>>>>>>>")
      twiml.message(`You said: ${text}`);
    }
  
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());

});

app.post('/status-twilio',(req, res)=>{
    console.log( req.body )
    res.json('OK');
});

app.listen(process.env.PORT)
console.log('Puerto = '+process.env.PORT)