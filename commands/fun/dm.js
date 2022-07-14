const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: "dm",
  category: "admin",
  aliases: ["dm"],
  cooldown: 10,
  usage: "dm <@User/@Role> <MESSAGE>",
  description: "Allows you to DM a USER or every USER of a ROLE",
  run: async (client, message, args) => {
    try {
      if (message.member.hasPermission("ADMINSTRATOR")) {
        const user = message.mentions.members.first();
        if (!user) {
          return message.channel.send({
            embed: {
              color: 16734039,
              description: "You must mention member to send DM! message!",
            },
          });
        }
        const arguments = args.slice(1).join(" ");
        if (!arguments) {
          return message.channel.send({
            embed: {
              color: 16734039,
              description: `You must enter text to send DM!`,
            },
          });
        }
        if (user.user.bot == false) {
          user.send(arguments)
          return message.channel.send({
            embed: {
              color: 4779354,
              description: `Message successfully send to <@` + user.user.id + ">",
            },
          });
        } else {
          return message.channel.send({
            embed: {
              color: 16734039,
              description: `Sorry! I cant send DM messages to bots!`,
            },
          });
        }
      } else {
        return message.channel.send({
          embed: {
            color: 16734039,
            description: "You don't have premission to use the command! Required premission: `MANAGE_MESSAGES`",
          },
        });
      }
    } catch (err) {
      console.log(err);
      console.log(`${message}`)
      return message.channel.send({
        embed: {
          color: 16734039,
          description: `Cant send this dm! Maybe user blocked their dm!`,

        },
      });
    }
  }
}
