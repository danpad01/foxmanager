// NO TE DUERMAS
const http = require("http");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//NO TE DUERMAS END

const Discord = require("discord.js");
const client = new Discord.Client();
const discord_token = process.env.TOKEN;

client.on("ready", () => {
  console.log("Connected!");
});

client.on("message", message => {
  if (message.content == "ping"){
    message.reply("pong");
  } 
  else if (message.content == "!naranja") {
    //ROL NARANJA ID: 692737252954079283
    var naranja = "692737252954079283";
    var usuario = message.member;

  }
});

client.login(discord_token);
