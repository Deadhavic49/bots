const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "gif",
  description: "Send a gif based off of the supplied query.",
  usage: "<query>",
  category: "GIF",
  args: true,
  execute(message, args) {
    async function AsyncFunc(message, args) {
      message.channel.send(
        await globalFunctions.data.getGif(encodeURIComponent(args[0]), 10)
      );
    }
    AsyncFunc(message, args);
  },
};
