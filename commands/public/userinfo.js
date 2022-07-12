
const moment = require("moment");
const Discord = require("discord.js");
const language = "en"
const db = require("quick.db")
const { lineReply } = require("discord-reply");
const { color } = require("../../config.json");

module.exports = {
    name: "userinfo",
    aliases: ["user"],
    cooldown: 5,
    description: "show user info",
  run: async (client, message) => {
     
       var lang = await db.fetch(`lang_${message.guild.id}`);
                        if (lang == null) lang = language;


const args = message.content.split(' ');
    let avt = `${message.author.avatarURL()}`;
    let id1 = `https://images-ext-1.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif`
const mention = message.mentions.users.first() || message.author;
            let embed = new Discord.MessageEmbed() 
.addField('**Joined Discord :**', `__${moment(mention.createdTimestamp).format('YYYY/MM/DD HH:mm')}__`)
.addField('**Joined Server :**', `__${moment(mention.joinedTimestamp).format('YYYY/MM/DD HH:mm')}__`)
.setColor(color)
.setThumbnail(`${mention.avatarURL()}` , ({format : "png" , dynamic : true , size : "1024"}))
.setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
.setFooter(`${message.author.tag}`, `${message.author.avatarURL({dynamic:true})}`)
message.lineReplyNoMention(embed);
}}
