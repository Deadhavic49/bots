const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "image",
  description: "Send an image of choice.",
  aliases: ["search"],
  usage: "<query>",
  category: "Image",
  args: true,
  execute(message, args) {
    globalFunctions.data.getImage(message, args.slice(0).join(" "), true);
  },
};
