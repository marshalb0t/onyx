const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const { MessageButton } = require("discord-buttons")
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "links",
  aliases: ["link", "invite", "support", "link"],
  description: "links",
  usage: "links",
  run: async (client, message, args) => {
  
      let invite = new MessageButton().setStyle('url').setLabel('Invite Me').setURL('https://discord.com/api/oauth2/authorize?client_id=779007687245299724&permissions=8&scope=bot')
      let support = new MessageButton().setStyle('url').setLabel('Support Server').setURL('https://discord.gg/AP4DHe7HAC')
     
      const allbuttons = [invite, support]

    let mybuttonsmsg = await message.channel.send({
        embed: new MessageEmbed()
          .setColor(color)
          .setDescription('**Click on The buttons below to redirect**')
          .addField("Need Help?", 'Join To Our **Support Server**!')
          .addField("Use Me?", '**Invite me** now by [clicking here](https://discord.com/api/oauth2/authorize?client_id=779007687245299724&permissions=8&scope=bot) or click on the **button**'),
        buttons: allbuttons
      });
  }
}
