const { REST, Routes } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('node:fs');

dotenv.config({ path: './.env' });

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.BETATOKEN);

(async () => {
	try {
		console.log(`${commands.length} 個のアプリケーションコマンドを登録します。`);

		const data = await rest.put(
			Routes.applicationGuildCommands(process.env.BETACLIENTID, process.env.GUILDID),
			{ body: commands },
		);

		console.log(`${data.length} 個のアプリケーションコマンドを登録しました。`);
	} catch (error) {
		console.error(error);
	}
})();