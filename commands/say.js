const { prefix } = require("../config.json");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "say",
  category: "Fun",
  description: "Make me say whatever you say!",
  aliases: ["letyouknow", "lyk"],
  args: true,
  execute(message, args) {
    let actionMsg = "says";
    if (
      message.content.slice(prefix.length).replace(/ .*/, "").toLowerCase() ==
        "letyouknow" ||
      message.content.slice(prefix.length).replace(/ .*/, "").toLowerCase() ==
        "lyk"
    )
      actionMsg = "wants to let you know";

    const msgArgs = args.slice(0).join(" ");

    const Embed = new MessageEmbed()
      .setAuthor(
        `${message.author.tag} ${actionMsg},`,
        message.author.avatarURL()
      )
      .setTitle(`"${msgArgs}"`)
      .setFooter("Not associated with RoboLiam.")
      .setColor("RED");
    let mentions = false;
    message.mentions.roles.tap((coll) => {
      if (coll.size > 0) mentions = true;
    });
    if (msgArgs.includes("@everyone") || msgArgs.includes("@here") || mentions)
      return message.reply("Hey, don't try being sneaky and pinging people!");
    message.channel
      .send(Embed)
      .then(() => message.delete())
      .catch(console.error);
  },
};
