const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'level',
	description: 'information about the Level addon and common questions',
	permission: 'EVERYONE',
	aliases: ['islandlevel', 'toplevel'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('Level Addon')
			.setDescription('The Level addon calculates island scores based on block values and provides a leaderboard. [Documentation →](https://docs.bentobox.world/en/latest/addons/Level/)')
			.addFields(
				{
					name: 'Why is my level not updating in real-time?',
					value: 'Level is **only recalculated** when a player runs `/[player_cmd] level`. Continuous tracking would be too expensive. Enable `calculate-level-on-login: true` in the Level config to recalc on every login instead.'
				},
				{
					name: 'Key player commands',
					value: '`/[player_cmd] level` — recalculate and show your island level\n`/[player_cmd] top` — show the leaderboard\n`/[player_cmd] value [material]` — check how many points a block is worth'
				},
				{
					name: 'Custom / modded blocks not counting?',
					value: 'Only blocks listed in `plugins/BentoBox/addons/Level/blockconfig.yml` are counted. Add custom block IDs there with the point value you want.'
				},
				{
					name: '⚠️ Level + Boxed',
					value: 'The Level addon is **not recommended for Boxed** — terrain-filled worlds make the score reflect the chunks rather than the player\'s work. Use it with void-style gamemodes (BSkyBlock, AOneBlock, AcidIsland, etc.).'
				},
				{
					name: 'Placeholder not returning a value?',
					value: '1. Check the addon is installed and enabled (`/bentobox version`)\n2. The player must run `/[player_cmd] level` at least once\n3. Test with `/papi parse me %Level_<gamemode>_island_level%`'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
