
const ButtonPages = require('discord-button-pages');
const { MessageEmbed, Discord, Client } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
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
    
        let inv = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite Me') 
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
     
      let sup = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL(`https://discord.gg/dreex`);


      return message.channel.send(embed,{
        button: [sup,inv],
      });
       
    }


}
