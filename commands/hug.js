const { MessageEmbed } = require("discord.js");
const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "hug",
  description: "Hug the requested user.",
  usage: "<user>",
  category: "GIF",
  args: true,
  execute(message, args) {
    if (!message.mentions.users.first())
      return message.channel.send("Please mention a user.");

    async function AsyncFunc(message) {
      if (message.mentions.users.first() == message.author) {
        message.reply("You hugged yourself. Wait, you can't!");
      } else {
        const Embed = new MessageEmbed()
          .setTitle(
            `${message.author.tag} hugged ${
              message.mentions.users.first().tag
            }.`
          )
          .setImage(await globalFunctions.data.getGif("anime+hug", 50));

        message.channel.send(Embed);
      }
    }
    AsyncFunc(message);
  },
};
