const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("招待リンクを作成します！"),
  async execute(interaction) {
    const invite = await interaction.channel.createInvite({
      maxAge: 604800,
      reason: `招待リンク作成者: ${interaction.user.tag}`,
    });
    await interaction.reply({
      content: `招待リンクを作成しました！\n${invite.url}`,
      ephemeral: true,
    });
  },
};
