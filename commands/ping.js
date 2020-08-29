const Embeds = require('../embed.js');
module.exports = {
	name: 'ping',
	description: 'Please do not ping support.',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
			"title": "Avoid tagging developers",
			"description": "Please refrain from tagging online developers or contributors. Your messages will be answered as soon as possible, just wait."
		});
		message.channel.send({ embed: CreatedEmbed })
	},
};
