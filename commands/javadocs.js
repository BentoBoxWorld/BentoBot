const Embeds = require('../embed.js');
module.exports = {
	name: 'javadocs',
	description: 'provides a link to the javadocs',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
				"title": "Javadocs",
				"description": "Our Javadocs our availa at [ci.codemc.io/job/BentoBoxWorld/job/BentoBox/ws/target/apidocs/index.html](https://ci.codemc.io/job/BentoBoxWorld/job/BentoBox/ws/target/apidocs/index.html). \n **Warning:** You may have to refresh the page once, for it to load"
		});
		message.channel.send({ embed: CreatedEmbed })
	}
};