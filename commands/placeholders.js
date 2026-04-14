const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'placeholders',
	description: 'displays info about placeholders and how to verify them',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle("Placeholders")
			.setDescription("BentoBox placeholders require [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) and a chat/tab/scoreboard plugin that supports it. [Full placeholder list →](https://docs.bentobox.world/en/latest/BentoBox/Placeholders/)")
			.addFields(
				{
					name: "Verifying a placeholder works",
					value: "Run `/papi parse me %bentobox_island_name%` in-game. If it returns a value, the placeholder itself is fine — the issue is in your chat/tab/scoreboard plugin's config."
				},
				{
					name: "Placeholders by gamemode",
					value: "[AcidIsland](https://docs.bentobox.world/en/latest/gamemodes/AcidIsland/Placeholders/) • [AOneBlock](https://docs.bentobox.world/en/latest/gamemodes/AOneBlock/Placeholders/) • [BSkyBlock](https://docs.bentobox.world/en/latest/gamemodes/BSkyBlock/Placeholders/) • [CaveBlock](https://docs.bentobox.world/en/latest/gamemodes/CaveBlock/Placeholders/) • [SkyGrid](https://docs.bentobox.world/en/latest/gamemodes/SkyGrid/Placeholders/)"
				},
				{
					name: "Level placeholder returning empty?",
					value: "1. Level addon must be installed and enabled\n2. The player must have run `/[player_cmd] level` at least once\n3. Test: `/papi parse me %Level_<gamemode>_island_level%`"
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
