const Discord = require("discord.js");

module.exports = {
  name: "banner",
   aliases: ["sbanner"],
  run: async (client, message, args) => {

    const banner = message.guild?.bannerURL({ dynamic: true, size: 4096 });

    if (!banner) return message.reply("This guild have not set any icon yet.");

    const embed = new Discord.MessageEmbed()
      .setDescription(`[Click here to download.](${banner})`)
      .setImage(`${banner}`);
      .setColor("RANDOM")
    return message.channel.send(embed);
  }
};
