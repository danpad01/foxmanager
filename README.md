# Discord.js Bot
Bot de discord programado en javascript, ejecutable en Node desde una maquina local o en la nube.
Bot preparado para ser hosteado en Glitch de manera directa.
Utiliza los modulos discord.js y express.

# Discord.js
Se ha utilizado la versión 11.4.2 dado que la actual (12.0.2) daba problemas en Glitch
```npm install discord.js@11.4.2```

# Express
Dado que Glitch duerme el bot cada cierto tiempo si no recibe peticiones, el bot se hace un ping cada cierto tiempo fijo con el modulo express para que esté funcionando 24/7.
  
# Glitch
El Token de conexion con el bot se encuentra en un fichero externo al repositorio. Para ser hosteado en local el token debe ser introducido en la variable ```discord_token```.

