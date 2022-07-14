const Discord = require("discord.js");

module.exports = async (message, client) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;

  // mentioned bot
  if (message.content ===`<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
    return message.channel.send(
      `My prefix is \`+\`\n\nTo get a list of commands, type \`+help\``
    );
  }
};
