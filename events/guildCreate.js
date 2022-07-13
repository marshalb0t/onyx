const { MessageEmbed, Discord, Client } = require('discord.js')
const { color } = require("../../config.json");

/**
 * 
 * @param {Client} client 
 * @param {Guild} guild 
 */


module.exports = (client, guild) => {     

 const channel = client.channels.cache.get("994933719263608922");

 const embed = new MessageEmbed()
       .setColor(color)
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

       const embed1 = new MessageEmbed()
      .setTitle("Thanks for inviting me!")
      .setColor(color)     
      .addField("• Who am i? What\'s my features?", `im ${client.user.username} a discord multi-purpose bot that does \`moderation\`, \`funny\` others \`gif, pictures\` and much more features..`)
      .addField("• Need Prefix?", `[ \`+\` ]`)
      .addField("• Need Help?", `[ \`+help\` ]`)

    let invite = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite Me') 
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=779007687245299724&permissions=8&scope=bot`);
      let support = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL(`https://discord.gg/AP4DHe7HAC`);

      return guild.owner.send(embed1,{
        button: [support,invite],
      });

}
