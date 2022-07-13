const { Client, Guild, MessageEmbed } = require("discord.js")

/**
 * 
 * @param {Client} client 
 * @param {Guild} guild 
 */


module.exports = (client, guild) => {

 let channel = client.channels.cache.get("994933747612925963");

 const leftEmbed = new MessageEmbed()
       .setColor("RANDOM")
       .setTitle("Kicked From New Server!!")
       .setThumbnail(guild.iconURL())
       .addField(
         "Guild:",
         `i just kicked from here **${guild.name}**.\n\nGuild Members: [**${guild.memberCount}**]`,
         true
       )
       .addField(
         "Owner:",
         `${guild.owner}`,
         true
       )
       .addField(
         "Servers:",
         `[${client.guilds.cache.size}]`,
         true
       )
       .setTimestamp() // moment().format('LLL'),
       .setFooter(`e bobo`);
    channel.send(leftEmbed);

}
