const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Ping!!"),
  async execute(interaction) {
    await interaction.reply(`Pong!\n${interaction.client.ws.ping}ms`);
  },
};
