const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { color } = require("../../config.json");
const axios = require("axios");

module.exports = {
  name: "boy",
  aliases: ["man"],
  description: "Gives Random boy Gif/PP",
  usage: "Gif",
  run: async (client, message, args) => {

        axios.get("https://api.roxza.me/v1/random?type=man")
            .then(res => {
                let embed = new Discord.MessageEmbed()
                    .setDescription(`**Boy/Man Gif**`)
                    .setColor(color)
                    .setImage(res.data.url)
                    .setFooter(`${message.author.tag}`, message.author.avatarURL)
                   message.channel.send(embed);
            })
    }
};
