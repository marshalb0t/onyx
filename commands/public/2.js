const { MessageEmbed, Message, Client } = require("discord.js");
const {
  MessageActionRow,
  MessageButton,
  MessageMenu,
  MessageMenuOption,
} = require("discord-buttons");
const { readdirSync } = require("fs");
const prefix = "+";
let color = "#303136";

module.exports = {
  name: "2",
  aliases: ["22"],
  description: "Shows all available bot commands.",
  category: "information",
  /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String} args 
     * @returns 
     */
  run: async (client, message, args) => {
    const emo = {
      protection: "❌",
      photo: "✅",
      gif: "❌",
      public: "✅",
      moderation: "❌",
      invites: "✅",
      emote: "❌",
      owner: "✅",
      text: "❌"
    };

    if (!args[0]) {
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("🤖 ❯ MoE Bot Help Menu")
    .addField("📃 ❯ Information:", `**I\'m a multi-purpose discord bot that does** \`music\`, \`moderation\` **and other** \`games\` **and useful things.**\n**Do** \`-help <command>\` **for extended information on a command.**`)
    .addField("🏷️ ❯ Prefix:", `**My Prefix Is** [\`-\`] **| Or Join To Our Server**`)
    .addField("👤 ❯ Builder:", `‌\`@Sakran ᵈᶠ#8671\`**, Client Owner**`)
        .setTimestamp();

      let data = client.categories.map((cat) => {
        return {
          label: `${cat[0].toUpperCase() + cat.slice(1)}`,
          value: cat,
          emoji: emo[cat],
          description: `❯ Click to View ${cat} Commands`,
        };
      });

      let menu = new MessageMenu()
        .setID("help-menu")
        .setPlaceholder(`👆 ❯ Click to See My Category`)
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(data);
      let raw = new MessageActionRow().addComponents(menu);
      let btn = new MessageButton()
        .setID("home")
        .setLabel(`Home`)
        .setStyle("red")
        .setEmoji("🏘️");

      let btn2 = new MessageButton()
        .setStyle("url")
        .setLabel(`Invite Moe`)
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=779058251311874088&permissions=8&scope=bot`);

      let bt3 = new MessageButton()
        .setStyle("url")
        .setLabel(`Support Server`)
        .setURL(`https://discord.gg/onyx-bot`);
      let btnarr = [btn2, bt3, btn];
      let msg = await message.channel.send({
        embed: embed,
        buttons: btnarr,
        components: raw,
      });
      client.on("clickButton", async (button) => {
        if (button.id === "home") {
          await button.reply.defer().catch((e) => {});
          msg.edit(embed).catch((e) => {});
        }
      });
      client.on("clickMenu", async (menu) => {
        if (menu.id === "help-menu") {
          await menu.reply.defer().catch((e) => {});
          if (menu.clicker.user.id === message.author.id) {
            let [directory] = menu.values;

            let aa = new MessageEmbed()
              .setColor(color)
              .setTitle(`**${directory}** ❯ Category`)
              .setDescription(
                `${client.commands
                  .filter((cmd) => cmd.category === directory)
                  .map((cmd) => {
                    return [`\`${cmd.name}\``].join(" ");
                  })
                  .join(", ")}`
              )
              .setFooter(
                Test Bot`,
                message.author.displayAvatarURL({ dynamic: true })
              );

            msg.edit(aa);
          }
        }
      });
    } else {
      let cots = [];
      let catts = [];

      readdirSync("./commands/").forEach((dir) => {
        if (dir.toLowerCase() !== args[0].toLowerCase()) return;
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          let des = client.commands.get(name).description;

          let obj = {
            cname: `\`${name}\``,
            des,
          };

          return obj;
        });

        let dota = new Object();

        cmds.map((co) => {
          dota = {
            name: `${cmds.length === 0 ? "In progress." : co.cname}`,
            value: co.des ? co.des : "No Description",
            inline: true,
          };
          catts.push(dota);
        });

        cots.push(dir.toLowerCase());
      });

      // console.log(cots);

      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (cots.includes(args[0].toLowerCase())) {
        const combed = new MessageEmbed()
          .setTitle(
            `__${
              args[0].charAt(0).toUpperCase() + args[0].slice(1)
            } Commands!__`
          )
          .setDescription(
            `Use \`+help\` followed by a command name to get more information on a command.\nFor example: \`+help ping\`.\n\n`
          )
          .addFields(catts)
          .setColor(color)
          .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
          .setColor(color)

        return message.channel.send(combed);
      }

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(
            `Invalid command! Use \`+help\` for all of my commands!`
          )
          .setColor(color);
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField(
          "Command:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "Aliases:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "Usage:",
          command.usage
            ? `\`+${command.name} ${command.usage}\``
            : `\+${command.name}\``
        )
        .addField(
          "Command Description:",
          command.description
            ? command.description
            : "No description for this command."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({
            dynamic: true,
          })
        )
        .setTimestamp()
        .setColor(color);
      return message.channel.send(embed, {
        allowedMentions: { repliedUser: false },
      });
    }
  },
};
