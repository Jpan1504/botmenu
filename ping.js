const { SlashCommandBuilder} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Your Bot ping!'),
  
	async execute(interaction) {
    await interaction.deferReply({ephemeral: true})
		await interaction.editReply({content:`Pong! Your client ping is ${interaction.client.ws.ping}ms`, ephemeral: true});
	},
};