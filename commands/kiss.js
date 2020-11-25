const { MessageEmbed } = require("discord.js");
const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "kiss",
  description: "Kiss the requested user.",
  usage: "<user>",
  category: "GIF",
  args: true,
  execute(message, args) {
    if (!message.mentions.users.first())
      return message.channel.send("Please mention a user.");

    async function AsyncFunc(message) {
      if (message.mentions.users.first() == message.author) {
        message.reply("You kissed yourself. Wait, you can't!");
      } else {
        const Embed = new MessageEmbed()
          .setTitle(
            `${message.author.tag} kissed ${
              message.mentions.users.first().tag
            }.`
          )
          .setImage(await globalFunctions.data.getGif("anime+kiss", 25));

        message.channel.send(Embed);
      }
    }
    AsyncFunc(message);
  },
};
