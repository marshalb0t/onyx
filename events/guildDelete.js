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
      .setTitle("😐")
      .setColor(Color)     
      .setDescription(`**I have been kicked from your server:**\n \`${guild.name}\`\n\n**I am so sad for this!**\n\`invite me again to ${guild.name}\` **by** [clicking here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)\n\n**If You need any help or quesstions:**\n\`Join To My Server:\` by [click here](https://discord.gg/onyx-bot)`)
  
    let invite = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite Me') 
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`);
      let support = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL(`https://discord.gg/onyx-bot`);

      return guild.owner.send(embed,{
        button: [support,invite],
      });

}
