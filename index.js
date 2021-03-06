const fs = require('fs');
const Discord = require('discord.js');
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
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Booting Up...', { type: 'PLAYING' });
	setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
		client.user.setActivity(activities_list[index]);
	}, 60000);
});

client.on('message', async message => {
	if (message.attachments) {
    for (const attachment of message.attachments.values()) {
      let contentType = mimeType.lookup(attachment.url);
      if (!contentTypes.some(type => contentType === type)) continue;
      
      try {
        let content = await axios.get(attachment.url);
        let response = await axios.post(`${haste}/documents`, content.data, {
          headers: {'Content-Type': contentType}
        });
        await message.channel.send(`Here Is Your Uploaded Paste! ${haste}/${response.data.key}`);
      } catch (e) {
        await message.channel.send(`Your file could not be automatically uploaded to haste, Sorry! Try use ${haste} to share files.`)
      }
	}};
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
	if (message.guild && command.permission !== 'EVERYONE' && !message.member.hasPermission(command.permission)) {
    let reply = `You don't have permission for that, ${message.author}!`;
    return message.channel.send(reply);
  }
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			message.delete();
			return message.author.send(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
   				.catch(() => message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`));
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
