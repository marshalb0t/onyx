const ButtonPages = require('discord-button-pages');
const { MessageEmbed, Discord, Client } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { color } = require("../../config.json");

/**
 * 
 * @param {Client} client 
 * @param {Guild} guild 
 */


module.exports = (client, guild) => {
 
      let channel = client.channels.cache.get("994335071186194452");

      const embed = new MessageEmbed()
      .setTitle("Welcome To Onyx Bot Offical Server!")
      .setColor(color)     
      .addField("Hello:", `${member.user.tag}`)
      .addField("Welcome To:", `${member.guild.name}`)
      .addField("Rules:", `<#994650118584283228>`)
      .addField("Roles:", `<#994977903961985166>`)
  
    let invite = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite Me') 
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`);
      let support = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL(`https://discord.gg/snow-team`);

      return channel.send(embed,{
        button: [support,invite],
      });
}
