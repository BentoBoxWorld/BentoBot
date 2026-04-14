const fs = require('fs');
const { Client, Collection, GatewayIntentBits, Partials, PermissionFlagsBits, ActivityType, ChannelType } = require('discord.js');
const { prefix, token } = require('./config.json');
const activities_list = [
	"BSkyBlock",
	"AcidIsland",
	"AOneBlock",
	"CaveBlock",
	"SkyGrid",
	"Boxed"
];
const mimeType = require('mime-types');
const axios = require('axios');
const contentTypes = ['application/json', 'text/plain', 'text/yaml'];
const haste = 'https://paste.md-5.net';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent,
	],
	partials: [Partials.Channel],
});

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Collection();

const permMap = {
	ADMINISTRATOR: PermissionFlagsBits.Administrator,
	MANAGE_CHANNELS: PermissionFlagsBits.ManageChannels,
};

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Booting Up...', { type: ActivityType.Playing });
	setInterval(() => {
		const index = Math.floor(Math.random() * activities_list.length);
		client.user.setActivity(activities_list[index], { type: ActivityType.Playing });
	}, 60000);
});

client.on('messageCreate', async message => {
	if (message.attachments && message.attachments.size > 0) {
		for (const attachment of message.attachments.values()) {
			let contentType = mimeType.lookup(attachment.url);
			if (!contentTypes.some(type => contentType === type)) continue;

			try {
				let content = await axios.get(attachment.url);
				let response = await axios.post(`${haste}/documents`, content.data, {
					headers: { 'Content-Type': contentType }
				});
				await message.channel.send(`Here Is Your Uploaded Paste! ${haste}/${response.data.key}`);
			} catch (e) {
				await message.channel.send(`Your file could not be automatically uploaded to haste, Sorry! Try use ${haste} to share files.`);
			}
		}
	}

	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === ChannelType.DM) {
		return message.reply("I can't execute that command inside DMs!");
	}
	if (message.guild && command.permission !== 'EVERYONE' && !message.member.permissions.has(permMap[command.permission])) {
		return message.channel.send(`You don't have permission for that, ${message.author}!`);
	}
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			const warning = `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`;
			return message.author.send(warning)
				.catch(() => message.reply(warning));
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);
