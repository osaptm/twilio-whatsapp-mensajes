const express = require('express');
require('dotenv')();
const app = express();
app.post('twilio',(req, res)=>{
    const twilio = new twilio.twiml.MessagingResponse();
    console.log( twilio )
    twiml.message('Gracias por enviarnos un mensaje');
    res.json('OK');
});
app.listen(process.env.PORT)