
const Discord = require("discord.js");
const db = require("quick.db")
const language = "en"
module.exports = {
    name: "commands",
    description: "close all ticket in server",
    cooldown: 5,
    run: async (client, message, args) => {
 


  const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
  .addField("🌐 Public Commands", `\`avatar\`, \`corona\`, \`help\`, \`short\`, \`translate\`, \`user\`, \`ping\`, \`server\`, \`bot\`, \`ravatar\``)
  .addField("🛠️ Moderation Commands", `\`addemoji\`, \`ban\`, \`clear\`, \`embed\`, \`hide\`, \`kick\`, \`lock\`, \`mute\`, \`role\`, \`unhide\`, \`unlock\`, \`unmute\`, \`vkick\`, \`moveroles\`, \`transferroles\`, \`roles\``) 
  .addField("😅 Fun Commands", `\`aki\`, \`emoji\`, \`fakebot\`, \`hug\`, \`kill\`, \`kiss\`, \`slap\`, \`trash\`, \`wanted\`, \`love\``)
  .addField("💰 Economy Commands", `\`profile\`, \`coins\`, \`daily\`, \`rep\`, \`pay\`, \`title\`, \`background\`, \`background-remove\``)
  .setColor('9e1c36');
    
        message.channel.send(embed)
       
    }


}
