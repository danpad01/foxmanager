// NO TE DUERMAS
const http = require("http");
  //npm install express
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


// LOGICA DE NEGOCIO
function manejarRol(nombreRol, message){
  var role = message.guild.roles.find(role => role.name === nombreRol);
    if(message.member.roles.has(role.id)) {
      message.member.removeRole(role);
    } else {
      message.member.addRole(role);
    }
}


// MODELO VISTA CONTROLADOR
  //npm install discord.js@11.4.2

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
    manejarRol("Rol naranja", message)
  }
  else if(message.content == "!Animal Crossing"){
    manejarRol("AnimalCrossing", message);
  }
  
});

client.login(discord_token);
