const Embeds = require('../embed.js');
module.exports = {
	name: 'rules',
	description: 'The Bentobox Rules',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
			"title": "Rules",
			"description": "Please Check <#739935590128156702>"
		});
		message.channel.send({ embed: CreatedEmbed })
	},
};