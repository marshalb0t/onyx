const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const { MessageButton } = require("discord-buttons")
const { MessageActionRow } = require("discord-buttons")
const Color = "#303136";
const db = require("quick.db")
const language = "en"

module.exports = {
  name: "help",
   aliases: ["h"],
  run: async (client, message, args ) => {
    const prefix = db.get(`guild_${message.guild.id}_prefix`) || '.';
      //--------------------------------------S T A R T---------------------------------------
        const embed = new Discord.MessageEmbed()
        .setTitle(`My Features`) 
        .addField("❯ Who am i? What\'s my features?", `im ${client.user.username} a discord multi-purpose bot that does \`moderation\`, \`funny\` others \`gif, pictures\` and much more features..`)
        .addField("❯ Need Prefix?", `[ \`-\` ]`)
        .addField("❯ Need Help?", `[ \`-help\` ]`)
        .setColor(Color)        
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setFooter(`Requested By ${message.author.username}`)
        .setFooter('First Page' , client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        let public = ["avatar", "emojiinfo", "emojis", "github", "help", "links", "ping", "servericon", "serverinfo", "showemoji", "stats", "userinfo"]

        const embed1 = new Discord.MessageEmbed()
        .setTitle("❯ General Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands: "+`[${public.length}]`, `\`avatar, emojiinfo, emojis, github, help, links, ping, servericon, serverinfo, showemoji, stats, userinfo\``)
        .setColor(Color)
        .setFooter('Second Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
      
        let mod = ["addrole", "ban", "bans", "cinfo", "clear", "ctopic", "kick", "lock", "lockdown", "mute", "nick", "purge", "rmvrole", "slowmode", "unban", "unlock", unmute"]

        const embed2 = new Discord.MessageEmbed()
        .setTitle("❯ Moderation Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands: "+`[${mod.length}]`, `\`addrole ban, bans, cinfo, clear, ctopic, kick, lock, lockdown, mute, nick, purge, rmvrole, slowmode, unban, unlock, unmute\``)
        .setColor(Color)
        .setFooter('Third Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        let fun = ["ascii", "baka", "cuddle", "dance", "deepfry", "dicksize", "howgay", "hug", "joke", "pat", "rate"]

        const embed3 = new Discord.MessageEmbed()
        .setTitle("❯ Funny Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands: "+`[${fun.length}]`, `\`ascii, baka, cuddle, dance, deepfry, dicksize, howgay, hug, joke, pat, rate\``)
        .setColor(Color)
        .setFooter('4th Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        
        const embed4 = new Discord.MessageEmbed()
        .setTitle("❯ Gif Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands:", `\`boy\`, \`girl\`, \`anime\`, \`animal\`, \`couple\`, \`emoji\`, \`baby\``)
        .setColor(Color)
        .setFooter('5th Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
        
        const embed5 = new Discord.MessageEmbed()
        .setTitle("❯ Picture Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands:", `\`pboy\`, \`pgirl\`, \`panimal\`, \`pbaby\`, \`pcouple\`, \`pemoji\``)
        .setColor(Color)
        .setFooter('6th Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
        
        const embed6 = new Discord.MessageEmbed()
         .setTitle("❯ Text Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands:", `\`textkurdish, textenglish, textarabic, textpersian, textturkish\``)
        .setColor(Color)
        .setFooter('7th Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        const expired = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`❯ This Help Menu is expired!\n Retype:\`${prefix}help\` To Do Again!`)
        .setColor(Color)      
        .setTimestamp()
        
        let links = new Discord.MessageEmbed()          
       .setColor(Color)
       .setTitle("❯ Links")
       .addField("Invite Link:", `[Click Here](https://discord.com/api/oauth2/authorize?client_id=776824647080738828&permissions=8&scope=bot)`)
       .addField("Support Link:", `[Click Here](https://discord.gg/snow-team)`)
       .setFooter('Last Page' , client.user.displayAvatarURL({ dynamic: true}))
      .setTimestamp()
      .setColor(Color)
      
        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('General')
        .setEmoji('🌐')
        .setValue('option1')
        .setDescription('Use General Commands')

        let option2 = new MessageMenuOption()
        .setLabel('Moderation')
        .setEmoji('⚙️')
        .setValue('option2')
        .setDescription('Use Moderation Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Funny')
        .setEmoji('🐸')
        .setValue('option3')
        .setDescription('Use Funny Commands')

        let gif = new MessageMenuOption()
        .setLabel('Gif')
        .setEmoji('🌀')
        .setValue('gif')
        .setDescription('Gif Commands!')

        let pic = new MessageMenuOption()
        .setLabel('Picture')
        .setEmoji('🖼️')
        .setValue('pic')
        .setDescription('Picture Commands!')

        let home = new MessageMenuOption()
        .setLabel('Home')
        .setEmoji('🏠')
        .setValue('home')
        .setDescription('Return To Home')

        let text = new MessageMenuOption()
        .setLabel('Text')
        .setEmoji('🖋️')
        .setValue('text')
        .setDescription('Use Text Commands!')

        let link = new MessageMenuOption()
        .setLabel('Links!')
        .setEmoji("🔗")
        .setValue("link")
        .setDescription('Important Links')


    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Select Help Menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(home, option1, option2, option3, gif, pic, text, link)
       

        //-----------------------------OPTIONS----------------------

    const Sendmenu = await message.channel.send(embed, select);
    const filter = ( button ) => message.guild;
    let collector = Sendmenu.createMenuCollector(filter, { time : 180000 });
    collector.on("collect", (b, menu) => {
      if(b.clicker.id !== message.author.id) return b.reply.send(`:x: <@${b.clicker.id}> you can't use that!`, true)
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select, true)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select, true)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select, true)
        }

        if(b.values[0] == "gif") {
          Sendmenu.edit(embed4, select, true)
        }

        if(b.values[0] == "pic") {
          Sendmenu.edit(embed5, select, true)
        }

        if(b.values[0] == "text") {
          Sendmenu.edit(embed6, select)
        }
        if(b.values[0] == "home") {
          Sendmenu.edit(embed, select, true)
        }
        if(b.values[0] == "link") {
          Sendmenu.edit(links, select)
        }

        b.reply.defer();

    collector.on("end", (b) => {
        Sendmenu.edit(`<@${message.author.id}>`, expired)
    })
    })
 //------------------------EVENT-----------------------------   
    /*client.on('clickMenu', (menu) => {
      if (menu.message.id === selector) {
        if (menu.clicker.user.id === message.author.id) menuselection(menu);
        else menu.reply.send(`:x: You are not allowed to do that! Only: <@${cmduser.id}>`, true);
      }
    });*/
  }
}

