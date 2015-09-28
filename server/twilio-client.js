// Twilio Credentials

'use strict'
var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_AUTH;

if(!accountSid) throw new Error('TWILIO_SID env not found')
if(!authToken) throw new Error('TWILIO_AUTH env not found')

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);
module.exports.send = function(to, message, callback){
client.messages.create({
	from: "+16184778674",
  to: to,
  body: message
}, callback)
}
