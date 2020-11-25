module.exports = {
  name: "sneeze",
  description: "Achoo!",
  aliases: ["achoo"],
  category: "Fun",
  execute(message, args) {
    const sneezes = [
      "***Achoo!***",
      "*chew!*",
      "Ah... Ah... **A_CHOO!_**",
      "_Ah..._***CHOOOOOOOOOOOOOOOOOOOO!***",
      "*Achoo!* Excuse me!",
    ];
    message.channel.send(
      sneezes[Math.floor(Math.random() * Math.floor(sneezes.length))]
    );
  },
};
