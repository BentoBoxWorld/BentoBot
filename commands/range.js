const Embeds = require('../embed.js');

module.exports = {
	name: 'range',
	description: 'displays information about island protection ranges',
	permission: 'EVERYONE',
	cooldown: 2,
	execute(message) {
		const CreatedEmbed = Embeds.EmbedGen({
			"title": "Island Protection Range",
			"description": `Every island has a protection range that defines how far from the island centre the owner can build and block visitors. The range can grow up to the gamemode's \`distance-between-islands\` value.

**Expanding a player's range:**
• **Admin command (instant):** \`/[admin_cmd] range set <player> <number>\`
• **Permission (applies on relog):** \`[gamemode].island.range.<number>\` granted to the island owner
• **Boxed only:** range grows automatically with vanilla advancements (or use \`ignore-advancements: true\` to switch to commands/permissions)

**Note:** the protection range can never exceed \`distance-between-islands\`, and that setting itself cannot be changed after islands have been created.

[More info →](https://docs.bentobox.world/en/latest/BentoBox/Island-Protection,-Flags-&-Ranks/)`
		});
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
