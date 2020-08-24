const Embeds = require('../embed.js');
module.exports = {
	name: 'docs',
	description: 'provides a link to the documentation',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
				"title": "Documentation",
				"description": "Our documentation is available at [docs.bentobox.world](https://docs.bentobox.world)."
		});
		message.channel.send({ embed: CreatedEmbed })
	}
};