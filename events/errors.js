const { MessageEmbed } = require('discord.js');

module.exports = (client, message) => {     

    console.error()
    const errorch = '994335174005366785'
    const channel = client.channels.cache.get(errorch);
    const errormsg = new MessageEmbed()
    .setTitle('an error occured')
    .setDescription(`**${error}**`)
    channel.send(errormsg)
}
