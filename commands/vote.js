const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "vote",
  description: "Vote for the bot on top.gg!",
  category: "Other",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("Vote for RoboLiam on top.gg")
      .setDescription(
        "[Click here to vote for RoboLiam on top.gg!](https://top.gg/bot/694637394300895273/vote)"
      )
      .setThumbnail("https://top.gg/images/dblnew.png")
      .setColor(0x7289da);
    message.channel.send(Embed);
  },
};
