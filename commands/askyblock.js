const Embeds = require('../embed.js');
module.exports = {
	name: 'askyblock',
	description: 'displays information about ASkyBlock',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
			"title": "ASkyBlock",
			"description": "ASkyBlock (1.8 - 1.12.2) is unsupported. Its source code can still be found on [GitHub](https://github.com/tastybento/askyblock)."
		});
		message.channel.send({ embed: CreatedEmbed })
	},
};
