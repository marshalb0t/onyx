const { Client, Guild, MessageEmbed } = require("discord.js")

/**
 * 
 * @param {Client} client 
 * @param {Guild} guild 
 */


module.exports = (client, guild) => {
 
   const owner = new MessageEmbed()
      .setColor(client.color)
      .setTitle("Hello, I'm Run Beta!")
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .addField(
        "Information",
        `i just joined to your server **${guild.name}**.\n\nHere is some information about myself:\n\nMy Prefix:\`.help\`\nCommands: Moderation, misc, info, fun, utility`,
        true
      )
      .addField(
        "Invite me",
        "Add Me To Your Server By [click here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)",
        true
      )
      .addField(
        "Elop Bot",
        "Use me and enjoy!",
        true
      )
      .setTimestamp() // moment().format('LLL'),
      .setFooter(`Enjoy`);
   guild.owner.send(owner);

 let channel = client.channels.cache.get("994335174005366785");

 const joinEmbed = new MessageEmbed()
       .setColor(client.color)
       .setTitle("New Adding Me!!")
       .setThumbnail(guild.iconURL())
       .addField(
         "Information",
         `i just joined to here **${guild.name}**.\n\nThere is **${guild.memberCount}** members`,
         true
       )
       .addField(
         "Owner",
         `${guild.owner.user.tag} / ${guild.ownerID}`,
         true
       )
       .addField(
         "Servers",
         `[${client.guilds.cache.size}]`,
         true
       )
       .setTimestamp() // moment().format('LLL'),
       .setFooter(`Bzhe la xom`);
    channel.send(joinEmbed);

}
