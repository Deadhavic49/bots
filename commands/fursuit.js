const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "fursuit",
  description: "Send an image of a fursuit.",
  category: "Image",
  execute(message, args) {
    globalFunctions.data.getImage(message, "fursuit", true);
  },
};
