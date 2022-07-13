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


client.on('guildCreate', guild => {
  const owner = guild.owner;
   const botownerid = "800309113363759124";
   const botownerid2 = "741813534559698964";

   //const botownerfix = client.users.fetch(botownerid);
   const botowner = client.users.cache.get(botownerid);
   const botowner2 = client.users.cache.get(botownerid2);
   if(!botowner) console.log("Cannot find bot owner, f!");
   if(!owner) return console.log("Cannot fetch guild owner!");

    const join = new MessageEmbed()
    .setThumbnail(guild.iconURL({ dynamic: true }) || null)
    .setTitle(`Hi, Thanks For Inviting Onyx In ${guild.name}`)
    .setDescription("We've Looked Around And Found That We Don't Quite Have All The Permissions We Need To Function Properly Though. To Fix This So You Can Properly Use The Bot, A Link's Been Generated Which Will Give All The Relevent Permissions To The Bot\n\n" + `[**Fix Premissions**](https://discord.com/api/oauth2/authorize?client_id=882311254423765012&permissions=8&scope=bot)`)
    .setFooter("Thanks For Using Me!")
    .setColor("#303136")
    .setTimestamp();

    const ownerembed = new MessageEmbed()
    .setTitle(`Joined A New Server | ${guild.name}`)
    .setDescription(` **${guild.name}** | (\`${guild.id}\`)`)
    .setThumbnail(guild.iconURL({ dynamic: true }) || null)
    .addField("Server Owner", `${guild.owner.user.username} | ${guild.owner}`)
    .addField("Membercount", `${guild.memberCount}`)
    .addField("Server Bot Is In", `${client.guilds.cache.size}`)
    .addField("Get Bot Out Of There -", `\`\`\`+leaveserver ${guild.id}\`\`\``)
    .setFooter("Thanks For Using Me!")
    .setColor("#303136")
    .setTimestamp()
  try {
  botowner.send(ownerembed);
  botowner2.send(ownerembed)
  owner.send(join);
  } catch(err) {
    return;
  }
})

client.login(config.TOKEN);
