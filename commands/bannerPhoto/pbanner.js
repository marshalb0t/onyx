const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { color } = require("../../config.json");
const pbanner = require("../../JSON/pb.json")

module.exports = {
  name: "Pbanner",
  aliases: ["pbanner", "rbanner", "bannerp"],
  description: "Show BannerPhoto",
  usage: "BannerPhoto",
  run: async (client, message, args) => {
   
    let pb = pbanner.pb[Math.floor((Math.random() * pbanner.pb.length))];
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Random Photo Banner")
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(pb);

    message.channel.send(embed);

   
  }
};
