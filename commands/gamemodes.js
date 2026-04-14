const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'gamemodes',
	description: 'compares all official BentoBox gamemodes',
	permission: 'EVERYONE',
	aliases: ['gamemode', 'modes', 'compare'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('BentoBox Gamemodes')
			.setDescription('All eight official gamemodes can run simultaneously on the same server. [Full comparison →](https://docs.bentobox.world/en/latest/gamemodes/Comparison/)')
			.addFields(
				{
					name: '🏝️ BSkyBlock',
					value: 'Classic skyblock. Most popular, largest community, safest choice. Medium difficulty.'
				},
				{
					name: '🪄 AOneBlock',
					value: 'One magical block that never runs out, with 11 progression phases. Approachable and engaging. Medium difficulty.'
				},
				{
					name: '⚗️ AcidIsland',
					value: 'Skyblock with a dangerous acid ocean — falling in hurts. For players who find BSkyBlock too easy. Medium–Hard.'
				},
				{
					name: '⛏️ CaveBlock',
					value: 'Players start in solid stone and carve outward instead of building up. Underground mining theme. Medium difficulty.'
				},
				{
					name: '🌐 SkyGrid',
					value: 'Resources scattered across a grid of single blocks. Unforgiving and skill-demanding. Hard — not recommended as the only mode for new players.'
				},
				{
					name: '📦 Boxed',
					value: 'Normal terrain, but the player is confined to a box that grows as they unlock vanilla advancements. Easy–Medium.'
				},
				{
					name: '🌊 Poseidon',
					value: 'Entirely underwater world. Visually distinct. Great as a secondary option. Medium difficulty.'
				},
				{
					name: '🌀 StrangerRealms',
					value: 'Overworld + a dangerous "Upside Down" mirror dimension. For experienced players. Medium–Hard.'
				},
				{
					name: 'Running multiple gamemodes',
					value: 'Each gamemode runs in its own worlds with its own database. Install [InvSwitcher](https://docs.bentobox.world/en/latest/addons/InvSwitcher/) to keep inventories separate across worlds.'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
