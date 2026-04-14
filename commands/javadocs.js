const Embeds = require('../embed.js');
module.exports = {
	name: 'javadocs',
	description: 'provides a link to the javadocs',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
				"title": "Javadocs",
				"description": "Our Javadocs are available at [ci.codemc.io](https://ci.codemc.io/job/BentoBoxWorld/job/BentoBox/BentoBox_20JavaDocs/)."
		});
		message.channel.send({ embeds: [CreatedEmbed] })
	}
};
