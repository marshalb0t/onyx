const { Client, Message, MessageEmbed } = ('discord.js');
const ms = require('ms');
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "slowmode",
  aliases: ["sm"],
  description: "slowmode for channel",
  usage: "slowmode",
  run: async (client, message, args) => {
        if (!message.member.permissions.has('MANAGE_CHANNELS')) return;
        if (!args[0]) {
            message.channel.setRateLimitPerUser(0);
            return message.channel.send(`The slowmode on ${message.channel} has been removed.`)
        }

        const raw = args[0];
        const milliseconds = ms(raw);

        if (isNaN(milliseconds)) return message.reply('This is not a valid time!');
        if (milliseconds < 1000) return message.reply('The minimum slow mode is 1 second.');


        message.channel.setRateLimitPerUser(milliseconds / 1000);
        try {
            const slowmodeApplied = new MessageEmbed()
                .setDescription(`The slowmode has been set to ${ms(milliseconds, { long: true })}.`)
                .setColor(color)
        }

        catch (error) {
            const embed = new MessageEmbed()
                .setDescription(`An error had occured:\n \`\`\`${error}\`\`\``)
                .setColor(color)
            return message.channel.send(embed)
        };

    }
}
