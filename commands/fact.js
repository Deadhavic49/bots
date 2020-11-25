const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "fact",
  category: "Fun",
  description: "Get a random fact!",
  async execute(message, args) {
    const { text } = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    ).then((response) => response.json());
    const Embed = new MessageEmbed()
      .setTitle("Random Useless Facts")
      .setURL("https://uselessfacts.jsph.pl/")
      .setColor("BLUE")
      .setDescription(text)
      .setFooter("Not associated with RoboLiam.");
    message.channel.send(Embed);
  },
};
