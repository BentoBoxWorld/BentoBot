const Embeds = require('../embed.js');
module.exports = {
	name: 'docs',
	description: 'The BentoBox Docs',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
				"title": "The Bentobox Docs:",
				"description": "https://docs.bentobox.world"
		});
		message.channel.send({ embed: CreatedEmbed })
	},
};