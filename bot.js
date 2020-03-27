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
function manejarRol(message, nombreRol){
  var role = message.guild.roles.find(role => role.name === nombreRol);
    if(message.member.roles.has(role.id)) {
      message.member.removeRole(role);
    } else {
      message.member.addRole(role);
    }
}


function imprimirAyuda(message){
  var ayuda = "```Comandos:\n//help            - Lista de comandos disponibles \n" +
              "//leagueoflegends - Añade/Elimina al usuario a la comunidad de League of Legends\n" +
              "//animalcrossing  - Añade/Elimina al usuario a la comunidad de Animal Crossing\n" +
              "//callofduty      - Añade/Elimina al usuario a la comunidad de Call of Duty\n" +
              "//apex            - Añade/Elimina al usuario a la comunidad de Apex\n" +
              "//minecraft       - Añade/Elimina al usuario a la comunidad de Minecraft\n" +
              "//blackdesert     - Añade/Elimina al usuario a la comunidad de Black Desert\n" +
              "//kurtzpel        - Añade/Elimina al usuario a la comunidad de Kurtzpel\n" +
              "Bot creado por El Pato Cuak#4773```";
      
  message.channel.send(ayuda);
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

  if (message.content.toLowerCase() == "//leagueoflegends") {
    manejarRol(message, "League of Legends");
  }
  else if(message.content.toLowerCase() == "//animalcrossing"){
    manejarRol(message, "Animal Crossing");
  }
  else if (message.content.toLowerCase() == "//callofduty") {
    manejarRol(message, "Call of Duty");
  }
  else if (message.content.toLowerCase() == "//apex") {
    manejarRol(message, "Apex");
  }
  else if (message.content.toLowerCase() == "//minecraft") {
    manejarRol(message, "Minecraft");
  }
  else if (message.content.toLowerCase() == "//blackdesert") {
    manejarRol(message, "Black Desert");
  }
  else if (message.content.toLowerCase() == "//kurtzpel") {
    manejarRol(message, "Kurtzpel");
  }
  else if (message.content.toLowerCase() == "//help") {
    imprimirAyuda(message);
  }
  
});

client.login(discord_token);
