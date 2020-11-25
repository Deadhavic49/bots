const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "exactimage",
  description: "Send a specific image of choice.",
  aliases: ["exactsearch", "esearch", "eimage"],
  usage: "<query>",
  category: "Image",
  args: true,
  execute(message, args) {
    globalFunctions.data.getImage(message, args.slice(0).join(" "));
  },
};
