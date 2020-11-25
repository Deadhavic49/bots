module.exports = {
  name: "prefix",
  description: "Display or edit the guild prefix",
  usage: "[prefix]",
  category: "Moderation",
  permission: "MANAGE_GUILD",
  guildOnly: true,
  execute(message, args, db) {
    let prefix = ".";
    db.collection("guilds")
      .doc(message.guild.id)
      .get()
      .then((q) => {
        if (q.exists) {
          prefix = q.data().prefix;
        }
      })
      .then(() => {
        if (args.length === 0)
          return message.channel.send(`This server's prefix is \`${prefix}\`.`);

        db.collection("guilds")
          .doc(message.guild.id)
          .get()
          .then((q) => {
            if (q.exists) {
              db.collection("guilds").doc(message.guild.id).update({
                prefix: args[0],
              });
            } else {
              db.collection("guilds").doc(message.guild.id).set({
                guildID: message.guild.id,
                prefix: args[0],
              });
            }
          })
          .then(() => {
            message.channel.send(
              `This server's prefix has been set to \`${args[0]}\`.`
            );
          });
      });
  },
};
