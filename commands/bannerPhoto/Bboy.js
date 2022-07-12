const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "Bboy",
  aliases: ["bboy", "bannerBoy", "bBoy"],
  description: "Show BannerPhoto",
  usage: "BannerPhoto",
  run: async (client, message, args) => {
   
    let replies = [""]
    let result = Math.floor((Math.random() * replies.length));
    
    let photoembed = new Discord.MessageEmbed()

    .setTitle("Boy Banner Photo")
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.lineReplyNoMention(photoembed);

   
  }
};
