const ButtonPages = require('discord-button-pages');
const { MessageEmbed, Discord, Client } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const Color = "#303136";
/**
 * 
 * @param {Client} client 
 * @param {Guild} guild 
 */


module.exports = (client, guild) => {     

 const channel = client.channels.cache.get("994335071186194452");

 const leaveEmbed = new MessageEmbed()
       .setColor(Color)
       .setTitle("Leaved from new Server!!")
       .setThumbnail(guild.iconURL())
       .addField(
         "Guild:",
         `i just kicked from here **${guild.name}**.\n\nThere was **${guild.memberCount}** members`,
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
       .setFooter(`f**k off`);
    channel.send(leaveEmbed);


       const embed = new MessageEmbed()
      .setTitle("WHY!!")
      .setColor(Color)     
      .addField("Kicked From:", `\`${guild.name}\``)
      .addField("Invite Me:", `To ${guild.name} [With Clicking Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)`
      .addField("Support Server:", `**Join To My Server:** [With Clicking Here](https://discord.gg/onyx-bot)`)
  
    let invite = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite Me') 
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`);
      let support = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL(`https://discord.gg/onyx-bot`);

      return guild.owner.send(`i send this message to you cause you\'re the guild owner!`,{
        button: [support,invite],
        embeds: embed
      });

}
