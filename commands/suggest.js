const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "suggest",
  aliases: ["suggestion"],
  category: "Other",
  description: "Make a suggestion!",
  usage: "<suggestion>",
  args: true,
  execute(message, args) {
    if (args.slice(0).join(" ").length < 15)
      return message.reply(
        "Your suggestion is too short! To reduce fake suggestions, please provide a detailed explanation of your suggestion."
      );
    const Embed = new MessageEmbed()
      .setTitle("💡 Suggestion")
      .setColor("YELLOW")
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setDescription(args.slice(0).join(" "))
      .setTimestamp();
    message.client.guilds.cache
      .get("695793419993481246")
      .channels.cache.get("696438613285797958")
      .send(Embed)
      .then((suggestedMsg) => {
        message.reply(
          `✅ Your suggestion has been sent!${
            message.client.guilds.cache
              .get("695793419993481246")
              .members.cache.get(message.author.id)
              ? ` You can find it here: https://discord.com/channels/695793419993481246/696438613285797958/${suggestedMsg.id}`
              : ""
          }`
        );
      })
      .catch((err) => {
        console.error(err);
        message.reply(
          "❌ Your suggestion failed to send, sorry! Try again soon."
        );
      });
  },
};
