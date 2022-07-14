const Discord = module.require("discord.js");
const { color } = require("../../config.json");

module.exports = {
    name: "report",
    description: "Report a bug",
    run: async(client, message, args) => {

        const reportchannel = client.channels.cache.get("994650675004850297")
        const report = args.join(" ");
        if (!report) {
            return message.channel.send("Enter the Description of the bug you encountered!");
        }
        message.channel.send(`${message.author}, Your Report has been Successfully Submitted. Our Mod Team will reply to you as soon as possible`)
        const embed = new Discord.MessageEmbed()
        .setTitle("New Bug Report")
        .addField("Report:", `${report}`)
        .addField("Reporter:", `${message.author.tag}`)
        .setFooter(`User ID: ${message.author.id}`)
        .setColor(color);

        reportchannel.send(embed);
    }, catch (error) {
        const errorlogs = client.channels.cache.get("747750993583669258");
        message.channel.send("Looks Like an Error has Ocurred. The Error has been reported to the Report Section!")
        errorlogs.send("Error on Report Command \nError: \n"+error)
    }
}
