const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { MessageButton } = require('discord-buttons');
const {MessageActionRow} = require('discord-buttons');
const Color = "#303136";

module.exports = {
  name: "help",
  aliases: ["h", "HELP"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
    
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setAuthor(client.user.username)
    .setDescription(`Use **+help [command name]** For More Command Information! for example: **+help ban**`)
    .addField("General:", `\`avatar, stats, github, help, links, ping, roleinfo, serverinfo, userinfo\``)
    .addField("Moderation:", `\`addrole, ban, bans, channels, channelinfo, purge, hide, kick, lock, mute, rmvrole, role, roles, nick, slowmode, unban, unhide, unlock, unmute, vkick\``)
    .addField("Emote:", `\`‌add-emoji, add-these, emoji-info, emojis-list, emojistats, emojis, jumbo, remove-emoji, remove-these, rename-emoji\``)
    .addField("Funny:", `\`baka, clyde, cuddle, dance, deepfry, dicksize, hug, joke, pat, motivation\``)
    .addField("Photo:", `\`panimal, pbaby, pboy, pemoji, pgirl\``)
    .addField("Gif:", `\`boy, girl, anime, animal, baby, emoji\``)
    .addField("Text:", `\`textkurdish, textenglish, textarabic, textpersian, textturkish\``)
    .setFooter(`Requester: ${message.author.username}`)
    .setTimestamp();
      
    const support = new MessageButton()
    .setStyle('url')
    .setURL('https://discord.gg/AP4DHe7HAC')
    .setLabel('Support Server')

const button = new MessageButton()
    .setStyle('url')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=779007687245299724&permissions=8&scope=bot')
    .setLabel('Invite Me')
 
 
let row = new MessageActionRow();
row.addComponent(button);
row.addComponent(support);

if (!args.length) return message.channel.send({
  embed: embed,
  component: row
})

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setDescription(`Command Information For: **${cmd.name}**`)
      .addField("Name:", `${cmd.name || "None!"}`)
      .addField("Aliases:", cmd.aliases || "None!")
      .addField("Usage:", cmd.usage || "No Usage")
      .addField("Description:", cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
