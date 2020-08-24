const Embeds = require('../embed.js');
const discord = require('discord.js');

module.exports = {
	name: 'placeholders',
	description: 'displays info about placeholders',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message) {
		const embed = new discord.MessageEmbed()
		embed.setTitle("Placeholders");
		embed.setDescription("Learn more about [placeholders](https://docs.bentobox.world/en/latest/BentoBox/Placeholders/) in our documentation.");
		embed.addFields(
			{ name: "Looking for placeholders?", value: "[AcidIsland](https://docs.bentobox.world/en/latest/gamemodes/AcidIsland/Placeholders/) • [AOneBlock](https://docs.bentobox.world/en/latest/gamemodes/AOneBlock/Placeholders/) • [BSkyBlock](https://docs.bentobox.world/en/latest/gamemodes/BSkyBlock/Placeholders/) • [CaveBlock](https://docs.bentobox.world/en/latest/gamemodes/CaveBlock/Placeholders/) • [SkyGrid](https://docs.bentobox.world/en/latest/gamemodes/SkyGrid/Placeholders/)" }
		);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embed: CreatedEmbed })
	},
};