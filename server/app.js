const express = require('express')
const app = express()
const router = express.Router();
const path = require('path');
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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));

app.get('*', function (req, res, next) {
  res.render('index');
})


app.listen(port, () => console.log(`App listening on ${port}!`));