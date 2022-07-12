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
        .addField("❯ Commands:", `[ \`${client.commands.size}\` ] `)
        .addField("❯ Category:", `[ \`7\` ]`)
        .addField("❯ Need Prefix?", `[ \`-\` ]`)
        .addField("❯ Need Commads?", `[ \`Select A Categoru!\` ]`)
        .setColor(Color)        
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setFooter(`Requested By ${message.author.username}`)
        .setFooter('First Page' , client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        let public = ["avatar", "bot", "github", "help", "links", "ping", "roleinfo", "serverinfo", "userinfo"]
        const embed1 = new Discord.MessageEmbed()
        .setTitle("❯ General Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands: "+`[${public.length}]`, `\`avatar, stats, github, help, links, ping, roleinfo, serverinfo, userinfo\``)
        .setColor(Color)
        .setFooter('Second Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
      
        let mods = ["addrole", "ban", "bans", "channels", "channelinfo", "purge", "hide", "kick", "lock", "mute", "rmvrole", "role", "roles", "nick", "slowmode", "unban", "unhide", "unlock", "unmute", "vkick"]
        const embed2 = new Discord.MessageEmbed()
        .setTitle("❯ Moderation Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands: "+`[${mods.length}]`, `\`addrole, ban, bans, channels, channelinfo, purge, hide, kick, lock, mute, rmvrole, role, roles, nick, slowmode, unban, unhide, unlock, unmute, vkick\``)
        .setColor(Color)
        .setFooter('Third Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        let funs = ["baka", "clyde", "cuddle", "dance", "deepfry", "dicksize", "hug", "joke", "pat"]

        const embed3 = new Discord.MessageEmbed()
        .setTitle("❯ Funny Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands: "+`[${funs.length}]`, `\`baka, clyde, cuddle, dance, deepfry, dicksize, hug, joke, pat\``)
        .setColor(Color)
        .setFooter('4th Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

       let gifs = ["boy", "anime", "girl", "couple", "emoji", "baby"]
        const embed4 = new Discord.MessageEmbed()
        .setTitle("❯ Gif Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands: "+`[${gifs.length}]`, `\`boy\`, \`girl\`, \`anime\`, \`animal\`, \`couple\`, \`emoji\`, \`baby\``)
        .setColor(Color)
        .setFooter('5th Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
        
        let pics = ["pboy", "pgirl", "panimal", "pbaby", "pemoji"]

        const embed5 = new Discord.MessageEmbed()
        .setTitle("❯ Picture Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands: "+`[${pics.length}]`, `\`pboy\`, \`pgirl\`, \`panimal\`, \`pbaby\`, \`pemoji\``)
        .setColor(Color)
        .setFooter('6th Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
      
       let txt = ["textkurdish", "textarabic", "textenglish"]
  
        const embed6 = new Discord.MessageEmbed()
         .setTitle("❯ Text Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands: "+`[${txt.length}]`, `\`textkurdish, textenglish, textarabic, textpersian, textturkish\``)
        .setColor(Color)
        .setFooter('7th Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        let emo = ["add-emoji", "add-these", "emojiinfo", "emojis-list", "emojistats", "emojis", "jumbo", "remove-emoji", "remove-these", "rename-emoji"]

        const embed7 = new Discord.MessageEmbed()
        .setTitle("❯ Emote Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands: "+`[${emo.length}]`, `\`‌add-emoji, add-these, emoji-info, emojis-list, emojistats, emojis, jumbo, remove-emoji, remove-these, rename-emoji\``)
        .setColor(Color)
        .setFooter('8th Page', client.user.displayAvatarURL({ dynamic: true}))
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

        let emote = new MessageMenuOption()
        .setLabel('Emote')
        .setEmoji('🎈')
        .setValue('emote')
        .setDescription('Use Emote Commands!')

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
        .addOptions(home, option1, option2, option3, gif, pic, text, emote, link)
      
        //-----------------------------OPTIONS----------------------

    const Sendmenu = await message.channel.send(embed, select);
    const filter = ( button ) => message.guild;
    let collector = Sendmenu.createMenuCollector(filter, { time : 150000 });
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

        if(b.values[0] == "emote") {
          Sendmenu.edit(embed7, select)
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

