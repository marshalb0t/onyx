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
       .setTitle("Joined A new Server!!")
       .setThumbnail(guild.iconURL())
       .addField(
         "Guild:",
         `i just joined to here **${guild.name}**.\n\nThere is **${guild.memberCount}** members`,
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
       .setFooter(`Cool`);
    channel.send(leaveEmbed);


       const embed = new MessageEmbed()
      .setTitle("sad😐!")
      .setColor(Color)     
      .addField("I have been kicked fromyour server:", `${guild.name}`)
      .addField("I am so sad for this!", `Get me back n there by [clicking here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)`)
      .addField("Join To My Server:", `[click here](https://discord.gg/onyx-bot)`)
  
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
