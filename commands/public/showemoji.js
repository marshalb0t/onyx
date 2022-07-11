const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "showemoji",
  aliases: ["se"],
  description: "converting server emoji by button or download it to png/gif",
  category: "utility",
  useage: "",
  run: async (client, message, args) => {


    const emoji = args[0];
    if (!emoji) return message.lineReplyNoMention(`Please Give Me A Emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;

      const emote = new MessageEmbed()
        .setTitle("Emoji Converter")
        .setColor(color)
        .addField('Link:', `[Click Me](${Link})`)
        .setImage(Link);

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Download Emoji')
      .setURL(Link);

      return message.channel.send(emote,{
        button: [button1],
      });

    } else {
      let CheckEmoji = (emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.lineReplyNoMention(`Please Give Me A Valid Emoji!`);
      message.lineReplyNoMention(
        `You Can Use Normal Emoji Without Adding In Server!`
      );
    }    
  }
};
