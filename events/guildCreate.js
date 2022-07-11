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

 const channel = guild.channels.cache.find(c => c.type === "text" && c.permissionsFor(guild.me).has("CREATE_INSTANT_INVITE"));
let inv;
if(channel) { const invite = await channel.createInvite({temporary: false, maxAge: '0', maxUses: '0', unique: false, reason: 'FOR SECURITY REASONS!'}).catch(error => console.log(error))
if(invite) { inv = invite.code;
}
}

    let chat = new Discord.MessageEmbed()
    .setColor(Color)
    .setURL(inv ? `https://discord.gg/${inv}` : null)
    .setThumbnail(guild.iconURL({dynamic: true}))
    .setFooter(`I Am In ${client.guilds.cache.size} Servers Now !`)
    .setTitle(`Joined A Server !`)
    .setDescription(`**Server Name**: ${guild.name}\n**Server ID**: ${guild.id}\n**Members**: ${guild.memberCount}\n**Owner**: ${guild.owner}\n**Owner ID**: ${guild.ownerID}`)
    .setTimestamp();
    client.channels.cache.get('994335071186194452').send(chat)
}
