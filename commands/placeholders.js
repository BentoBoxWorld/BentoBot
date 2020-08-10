const Embeds = require('../embed.js');
module.exports = {
	name: 'placeholders',
	description: 'Bentobox Placeholders',
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
			"title": "BentoBox Placeholders",
			"description": "Bentobox does not use `-`\'s in its placeholders. Please check https://bentobox-world.readthedocs.io/en/latest/BentoBox/Placeholders/ for each gamemodes placeholders"
		});
		message.channel.send({ embed: CreatedEmbed })
	},
};