const { REST, Routes } = require('discord.js');
const { token, ClientID } = require('./config.json');
const rest = new REST({ version: '10' }).setToken(token);
rest.put(Routes.applicationCommands(ClientID), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);