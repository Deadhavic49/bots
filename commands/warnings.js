module.exports = {
  name: "warnings",
  description: "Check a member's warnings.",
  usage: "<member>",
  category: "Moderation",
  args: true,
  guildOnly: true,
  execute(message, args, db) {
    if (!message.mentions.users.first())
      return message.channel.send("Please mention a member.");
    let warnings;
    db.collection("guilds")
      .doc(message.guild.id)
      .collection("members")
      .doc(message.mentions.users.first().id)
      .get()
      .then((q) => {
        if (q.exists) {
          warnings = q.data().warnings;
        } else {
          warnings = 0;
        }
      })
      .then(() => {
        message.channel.send(
          `${
            message.mentions.users.first().tag
          } has been warned **${warnings}** time(s).`
        );
      });
  },
};
