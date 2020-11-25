const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "shibe",
  description: "Send an image of a shibe.",
  aliases: ["dog"],
  category: "Image",
  execute(message, args) {
    globalFunctions.data.getImage(message, "shibe", true);
  },
};
