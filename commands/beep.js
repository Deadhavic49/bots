module.exports = {
  name: "beep",
  description: "Beep!",
  category: "Fun",
  execute(message, args) {
    message.channel.send("Boop!");
  },
};
