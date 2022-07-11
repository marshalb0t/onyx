const { RichEmbed, Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "emojis",
  aliases: ["emojilist"],
  description: "server emojis",
  usage: "-emojis",
  run: async (client, message, args) => {

    try {
        let notAnimated = [];
        let animated = [];
        message.guild.emojis.cache.forEach(async emoji => {
          if (emoji.animated) animated.push(emoji.toString());
          else notAnimated.push(emoji.toString());
        });
        if (!animated[0]) animated = ['None'];
        if (!notAnimated[0]) notAnimated = ['None'];
        message.channel.send(`**Animated:** ${animated.join(' | ')}\n\n**Normal:** ${notAnimated.join(' | ')}`)
      } catch (err) {
        message.channel.send('Their was an error!\n' + err).catch();
      }

}
}
