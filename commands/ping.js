module.exports = {
  name: "ping",
  description: "Display the bot's ping.",
  category: "Other",
  execute(message, args) {
    const { ws } = message.client;
    message.channel.send(`Ping: ${ws.ping} ms`);
  },
};
