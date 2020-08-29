const Embeds = require('../embed.js');
module.exports = {
	name: 'spigot',
	description: "provides a link to BentoBox's SpigotMC page",
	permission: 'EVERYONE',
  aliases: ['spigotmc'],
	cooldown: 5,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
			"title": "SpigotMC",
			"description": "BentoBox is available on [SpigotMC](https://www.spigotmc.org/resources/bentobox-bskyblock-acidisland-skygrid-caveblock-aoneblock.73261/)."
		});
		message.channel.send({ embed: CreatedEmbed })
	},
};
