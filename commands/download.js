const Embeds = require('../embed.js');
module.exports = {
	name: 'download',
	description: 'provides a download link',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
				"title": "Download",
				"description": "Our Downloads Page is avaliable at [download.bentobox.world](https://download.bentobox.world). \n **Warning:** You may have to refresh the page once, for it to load"
		});
		message.channel.send({ embed: CreatedEmbed })
	}
};