const { prefix } = require("../config.json");
const { version } = require("../package.json");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  description: "List all of the commands or info about a specific command.",
  aliases: ["commands", "cmds"],
  usage: "[cmd]",
  execute(message, args) {
    const { commands } = message.client;

    if (!args.length) {
      const Embed = new MessageEmbed()
        .setTitle("Help")
        .setDescription("Here's a list of all the commands:")
        .addFields([
          {
            name: "Moderation",
            value: `\`${
              commands
                .filter((cmd) => cmd.category == "Moderation")
                .map((cmd) => cmd.name)
                .join("`\n`") || "No commands found"
            }\``,
          },
          {
            name: "Fun",
            value: `\`${
              commands
                .filter((cmd) => cmd.category == "Fun")
                .map((cmd) => cmd.name)
                .join("`\n`") || "No commands found"
            }\``,
          },
          {
            name: "Image",
            value: `\`${
              commands
                .filter((cmd) => cmd.category == "Image")
                .map((cmd) => cmd.name)
                .join("`\n`") || "No commands found"
            }\``,
          },
          {
            name: "GIF",
            value: `\`${
              commands
                .filter((cmd) => cmd.category == "GIF")
                .map((cmd) => cmd.name)
                .join("`\n`") || "No commands found"
            }\``,
          },
          {
            name: "Other",
            value: `\`${
              commands
                .filter((cmd) => cmd.category == "Other")
                .map((cmd) => cmd.name)
                .join("`\n`") || "No commands found"
            }\``,
          },
        ])
        .setFooter(
          `You can send ${prefix}help [cmd] to get info on a specific command! | v${version}`
        );

      return message.author
        .send(Embed)
        .then(() => {
          if (message.channel.type === "dm") return;
          message.channel.send("✅ Check your DMs for the commands!");
        })
        .catch((error) => {
          console.error(
            `Could not send help DM to ${message.author.tag}.\n`,
            error
          );
          message.channel.send(
            "❌ It seems like I can't DM you! Do you have DMs disabled?"
          );
        });
    }

    const name = args[0].toLowerCase();
    const command =
      commands.get(name) ||
      commands.find((c) => c.aliases && c.aliases.includes(name));

    if (!command) {
      return message.reply("That's not a valid command!");
    }

    const Embed = new MessageEmbed().setTitle(command.name);

    if (command.aliases) Embed.addField("Aliases", command.aliases.join(", "));
    if (command.category) Embed.addField("Category", command.category);
    if (command.description) Embed.addField("Description", command.description);
    if (command.usage)
      Embed.addField("Usage", `\`${prefix}${command.name} ${command.usage}\``);

    message.channel.send(Embed);
  },
};
