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
 
      const embed = new MessageEmbed()
      .setTitle("Thanks for inviting me!")
      .setColor(Color)     
      .addField("• Who am i? What\'s my features?", `im ${client.user.username} a discord multi-purpose bot that does \`moderation\`, \`funny\` others \`gif, pictures\` and much more features..`)
      .addField("• Need Prefix?", `[ \`-\` ]`)
      .addField("• Need Help?", `[ \`-help\` ]`)
  
    let invite = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite Me') 
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`);
      let support = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL(`https://discord.gg/snow-team`);

      return guild.owner.send(embed,{
        button: [support,invite],
      });

 let channel = client.channels.cache.get("994335174005366785");

 const joinEmbed = new MessageEmbed()
       .setColor(client.color)
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
    channel.send(joinEmbed);

}
