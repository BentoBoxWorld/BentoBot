const Embeds = require('../embed.js');
const discord = require('discord.js');

module.exports = {
	name: 'about',
	description: 'displays information about BentoBot',
	permission: 'EVERYONE',
	cooldown: 2,
	execute(message) {
		const embed = new discord.MessageEmbed()
		embed.setTitle("BentoBot");
		embed.setDescription("BentoBot is your automated companion for everything BentoBoxWorld here.");
		embed.addFields(
            { name: `Authors`, value: `<@547890787682222081> • <@188951050634395649>` }
        );
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embed: CreatedEmbed })
	}
};
