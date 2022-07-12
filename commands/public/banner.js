const { MessageEmbed, Discord } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "banner",
  aliases: ["bar"],
  description: "banner",
  usage: "banner",
  run: async (client, message, args) => {
    const target = message.mentions.users.first() || message.member;

    axios.get(`https://discord.com/api/users/${target.id}`, {
      headers: {
        Authorization: "Bot " + client.TOKEN,
      }
    }).then(res => {
      if (res.data.banner) {
        if (res.data.banner.startsWith("a_")) {
          const embed1 = new Discord.MessageEmbed()
          .setTitle(target.user.tag)
          .setDescription(`[Click if not installed](https://cdn.discordapp.com/banners/${target.id}/${res.data.banner}.gif?size=4096)`)
          .setImage(`https://cdn.discordapp.com/banners/${target.id}/${res.data.banner}.gif?size=4096`)
          .setColor("RANDOM")
          message.channel.send(embed1);
        }
        else {
          const embed2 = new Discord.MessageEmbed()
          .setTitle(target.user.tag)
          .setDescription(`[Click if not installed](https://cdn.discordapp.com/banners/${target.id}/${res.data.banner}.png?size=4096)`)
          .setImage(`https://cdn.discordapp.com/banners/${target.id}/${res.data.banner}.png?size=4096`)
          .setColor("RANDOM")
          message.channel.send(embed2);
        }
       } else {
        const embed0 = new Discord.MessageEmbed()
        .setDescription("User Doesn't Have Banners")
        .setColor("RANDOM")
        message.channel.send(embed0);
        
      }
    })
  }
}
