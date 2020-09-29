require('dotenv').config();
const userSchem = require("./database/schemas/user-schem");
const mongoose = require("mongoose");
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const client = new Client();



(async () => {
  
  const mongoPath = `mongodb+srv://marcocesar:lUspcWd5Vup7Rv5u@cluster0.wxd8d.mongodb.net/database?retryWrites=true&w=majority`
  mongoose.connect(mongoPath, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
  })
  console.log("database conection successly correct")
  

  client.commands = new Map();
  client.events = new Map();
  client.prefix = process.env.DISCORD_BOT_PREFIX;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();

