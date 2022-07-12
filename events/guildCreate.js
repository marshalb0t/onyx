const { MessageEmbed, Discord, Client } = require('discord.js')
const Color = "#303136";
/**
 * 
 * @param {Client} client 
 * @param {Guild} guild 
 */


module.exports = (client, guild) => {     

 const channel = client.channels.cache.get("994933719263608922");
 const embed = new MessageEmbed()
       .setColor(Color)
       .setTitle("Joined to a new Server!!")
       .setThumbnail(guild.iconURL())
       .addField(
         "Guild:",
         `i just joined to here: **${guild.name}**.\n\nMembrs: **${guild.memberCount}**`,
         true
       )
       .addField(
         "Owner:",
         `${guild.owner.user.tag} / ${guild.ownerID}`,
         true
       )
       .addField(
         "Servers",
         `[${client.guilds.cache.size}]`,
         true
       )
       .setTimestamp() // moment().format('LLL'),
       .setFooter(`nice`);
    channel.send(embed);

}
