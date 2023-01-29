
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

//matar taskkill /F /IM node.exe

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')(accountSid, authToken);


app.use( cors() );
app.use( express.json() );

app.post('/twilio',(req, res)=>{
    console.log( "Holaaaaaaaaa", req.body )
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end();
});

app.post('/status-twilio',(req, res)=>{
    console.log( req.body )
    res.json('OK');
});

app.listen(process.env.PORT)
console.log('Puerto = '+process.env.PORT)