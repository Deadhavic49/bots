const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "cat",
  description: "Send an image of a cat.",
  category: "Image",
  execute(message, args) {
    globalFunctions.data.getImage(message, "cat", true);
  },
};
