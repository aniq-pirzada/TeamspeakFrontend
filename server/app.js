const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv');
const { TeamSpeak, QueryProtocol } = require("ts3-nodejs-library")

dotenv.config();

//create a new connection
const teamspeak = new TeamSpeak({
    host: process.env.host,
    serverport: 8510,
    username: process.env.username,
    password: process.env.password,
    nickname: process.env.nickname
})

teamspeak.on("textmessage", ev => {
    console.log(`${ev.invoker.nickname} just send the message "${ev.msg}"`)
})

  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})