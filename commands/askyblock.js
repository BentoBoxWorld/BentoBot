const Embeds = require('../embed.js');
module.exports = {
	name: 'askyblock',
	description: 'ASkyBlock is unsupported',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
			"title": "ASkyBlock",
			"description": "ASkyBlock (1.8 - 1.12.2) Is Now Unsupported, and Archived on github. https://github.com/tastybento/askyblock"
		});
		message.channel.send({ embed: CreatedEmbed })
	},
};