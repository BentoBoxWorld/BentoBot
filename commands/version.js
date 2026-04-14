const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'version',
	description: 'shows BentoBox version compatibility and how to diagnose version issues',
	permission: 'EVERYONE',
	aliases: ['versions', 'compatibility'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('BentoBox Version Compatibility')
			.setDescription('BentoBox major versions track Minecraft versions. **You must keep BentoBox and your addons on a matching version.**')
			.addFields(
				{
					name: 'Version Matrix',
					value: '**BentoBox 3.x** → Minecraft **1.21.3+**\n**BentoBox 2.7** → Minecraft **1.21.1**\n**BentoBox 2.6** → Minecraft **1.20.6**'
				},
				{
					name: 'Getting a compatible set',
					value: 'Download a matched pack from [download.bentobox.world](https://download.bentobox.world) — it always contains a compatible BentoBox + addon set.'
				},
				{
					name: 'Diagnosing problems',
					value: 'Run `/bentobox version` in-game or in the console — it shows BentoBox, every loaded addon, and the server build all in one place.'
				},
				{
					name: '"Internal error" when creating an island?',
					value: 'Almost always a version mismatch. Check that your BentoBox major version matches your Minecraft version, then check addon versions too.'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
