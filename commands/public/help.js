
const Discord = require("discord.js");
const db = require("quick.db")
const language = "en"
module.exports = {
    name: "help",
    description: "close all ticket in server",
    cooldown: 5,
    run: async (client, message, args) => {
 


  const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
  .addField("🌐 Public Commands", `\`avatar\`, \`help\`, \`user\`, \`ping\`, \`server\`, \`bot\`, \`ravatar\``)
  .addField("🛠️ Moderation Commands", `\`addemoji\`, \`ban\`, \`clear\`, \`embed\`, \`hide\`, \`kick\`, \`lock\`, \`mute\`, \`role\`, \`unhide\`, \`unlock\`, \`unmute\`, \`vkick\`, \`moveroles\`, \`transferroles\`, \`roles\``) 
  .addField("😅 Fun Commands", `\`clyde\``)
  .setColor('9e1c36');
    
        message.channel.send(embed)
       
    }


}
