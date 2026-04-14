const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'about',
	description: 'displays information about BentoBot',
	permission: 'EVERYONE',
	cooldown: 2,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle("BentoBot")
			.setDescription("BentoBot is your automated companion for everything BentoBoxWorld here.")
			.addFields({ name: 'Authors', value: '<@547890787682222081> • <@188951050634395649>' });
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	}
};
