const Embeds = require('../embed.js');
const { prefix } = require('../config.json');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'lists available commands or provides info about the specified command',
	permission: 'EVERYONE',
	aliases: ['commands'],
	usage: '[command]',
	cooldown: 3,
	execute(message, args) {
		const { commands } = message.client;
		if (!args.length) {
			const embed = new EmbedBuilder()
				.setTitle("List of available commands")
				.setDescription(commands.map(cmd => format_command(cmd)).join('\n'))
				.addFields({ name: `Type \`${prefix}help [command name]\` to get info about a specific command.`, value: "Thanks for using BentoBox!" });
			const CreatedEmbed = Embeds.EmbedGen(embed);
			return message.channel.send({ embeds: [CreatedEmbed] }).catch(console.error);
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply("this command does not exist.");
		}

		const aliasList = command.aliases && command.aliases.length
			? prefix + command.name + ', ' + command.aliases.map(a => prefix + a).join(', ')
			: prefix + command.name;

		const embed = new EmbedBuilder()
			.setTitle(prefix + command.name)
			.addFields(
				{ name: 'Description', value: command.description },
				{ name: 'Aliases', value: aliasList },
				{ name: 'Permission', value: command.permission.replace(/_/g, ' ') }
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	}
};

const format_command = (cmd) => {
	return `**${prefix}${cmd.name}${format_command_usage(cmd)}** • ${cmd.description}`;
};

const format_command_usage = (cmd) => {
	return typeof cmd.usage !== 'undefined' ? ' ' + cmd.usage : '';
};
