const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "fox",
  description: "Send an image of a fox.",
  category: "Image",
  execute(message, args) {
    globalFunctions.data.getImage(message, "fox", true);
  },
};
