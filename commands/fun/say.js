const Discord = require("discord.js");

module.exports = {
  name: "say",
  aliases: ["msg"],
  description: "say a messagr",
  usage: "say",
  run: async (client, message, args) => {

   const args = args.join(" ")
   if (!args) return message.reply("Provide a message!")

  message.channel.send(args);

  }
};
