const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "Bgirl",
  aliases: ["bgirl", "bannerGirl", "bGirl"],
  description: "Show BannerPhoto",
  usage: "BannerPhoto",
  run: async (client, message, args) => {
   
    let replies = [""]
    let result = Math.floor((Math.random() * replies.length));
    
    let photoembed = new Discord.MessageEmbed()

    .setTitle("Girl Banner Photo")
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.lineReplyNoMention(photoembed);

   
  }
};
