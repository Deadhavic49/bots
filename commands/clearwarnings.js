module.exports = {
  name: "clearwarnings",
  description: "Clear the warnings of a member.",
  aliases: [
    "clearwarn",
    "removewarnings",
    "removewarn",
    "nowarnings",
    "nowarn",
  ],
  permission: "KICK_MEMBERS",
  usage: "<member>",
  category: "Moderation",
  args: true,
  guildOnly: true,
  execute(message, args, db) {
    if (!message.mentions.users.first())
      return message.channel.send("Please mention a member.");
    const member = message.mentions.users.first();
    db.collection("guilds")
      .doc(message.guild.id)
      .collection("members")
      .doc(member.id)
      .get()
      .then((q) => {
        if (q.exists) {
          if (!q.data().warnings == 0)
            return db
              .collection("guilds")
              .doc(message.guild.id)
              .collection("members")
              .doc(member.id)
              .update({
                warnings: 0,
              })
              .then(() => {
                message.channel.send(
                  `${member.tag}'s warnings have been cleared.`
                );
              });
        }
        message.channel.send(`${member.tag} has no warnings.`);
      });
  },
};
