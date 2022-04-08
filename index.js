const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
const Discord = require('discord.js');
const client = new Discord.Client();
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const answers = ['Yes', 'No', 'Ho Ho Ho', 'Ugh']
client.once('ready', () => {
   console.log('Ready!');
});
client.on('message', message => {
   let msg = message.content.toLowerCase();
   if (msg.startsWith('ben')) {
     message.channel.send(answers[getRndInteger(0, 3)])
   }
});

client.login(process.env.token);
