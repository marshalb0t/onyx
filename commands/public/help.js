const Discord = require("discord.js");
const db = require("quick.db")
const language = "en"
module.exports = {
    name: "help",
    description: "show help commands",
    cooldown: 5,
    run: async (client, message, args) => {
 


  const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
    .addField("General:", `\`avatar, stats, github, help, links, ping, roleinfo, serverinfo, userinfo\``)
    .addField("Moderation:", `\`addrole, ban, bans, channels, channelinfo, purge, hide, kick, lock, mute, rmvrole, role, roles, nick, slowmode, unban, unhide, unlock, unmute, vkick\``)
    .addField("Emote:", `\`‌add-emoji, add-these, emoji-info, emojis-list, emojistats, emojis, jumbo, remove-emoji, remove-these, rename-emoji\``)
    .addField("Funny:", `\`baka, clyde, cuddle, dance, deepfry, dicksize, hug, joke, pat, motivation\``)
    .addField("Photo:", `\`panimal, pbaby, pboy, pemoji, pgirl\``)
    .addField("Gif:", `\`boy, girl, anime, animal, baby, emoji\``)
    .addField("Text:", `\`textkurdish, textenglish, textarabic, textpersian, textturkish\``)
  .setColor('#303136');
    
        message.channel.send(embed)
       
    }


}
