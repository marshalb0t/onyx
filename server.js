const mongoose = require("mongoose");
const url = require("url");
const path = require("path");
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const Strategy = require("passport-discord").Strategy;
const ejs = require("ejs");
var fs = require("fs")
const bodyParser = require("body-parser");
const config = require("./config.json")
const app = express();
const MemoryStore = require("memorystore")(session);
const Discord = require("discord.js");
const client = new Discord.Client();
const disbut = require('discord-buttons')
disbut(client)
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const { Database } = require("quickmongo");
const db = require("quick.db")
const db1 = new Database(config.database);
const listener = app.listen(process.env.PORT, () => { console.log("Your app is listening on port " + listener.address().port); });
db1.on("ready", () => { console.log("quickmongo Database connected!") });
mongoose.connect(config.database2 ,{ useNewUrlParser: true, useUnifiedTopology: true });



client.commands = new Discord.Collection();
const Categories = ["moderation", "public", "owner", "fun", "gif", "text", "emote", "photo", "bannerPhoto"];

Categories.forEach(async function(Category, message) {
fs.readdir(`./commands/${Category}`, (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${Category}/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command | Category : ${Category} | Command : ${commandName}`);
    client.commands.set(commandName, props);
  })
});
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("994933719263608922");
  let embed = new MessageEmbed().setColor("#116d56")
  .setThumbnail(guild.iconURL({ dynamic: true }) ? guild.iconURL({ dynamic: true }) : `https://guild-default-icon.herokuapp.com/${encodeURIComponent(guild.nameAcronym)}`)
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle(`added to server`)
  .addField("**Server Name**", `${guild.name}`)
  .addField("**Server Owner**", `${guild.owner}`)
  .addField("**Server Id**", `${guild.id}`)
  .addField("**Member Count**", `${guild.memberCount}`)
  .addField("**Verification Level**", `${guild.verificationLevel}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("994933747612925963");
  let embed = new MessageEmbed()
  .setColor("#116d56")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `❌ Left Server`)
  .addField(" **Server Name**", `${guild.name}`)
  .addField(" **Server Owner**", `${guild.owner}`)
  .addField(" **Server Id**", `${guild.id}`)
  .addField(" **Member Count**", `${guild.memberCount}`)
  .addField(" **Verification Level**", `${guild.verificationLevel}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});


client.login(config.TOKEN);
