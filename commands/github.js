const Embeds = require('../embed.js');
module.exports = {
	name: 'github',
	description: 'Bentobox Github',
	permission: 'EVERYONE',
	aliases: ['gh'],
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
			"title": "BentoBox Github",
			"description": "The Bentobox Github is located at https://bentobox.world"
		});
		message.channel.send({ embed: CreatedEmbed })
	},
};
