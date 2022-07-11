const { MessageEmbed, Discord, Client } = require('discord.js')
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
  
 
      return channel.send(embed);
}
