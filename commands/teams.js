const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'teams',
	description: 'explains island team ranks: Visitor, Coop, Trust, Member, Sub-Owner, Owner',
	permission: 'EVERYONE',
	aliases: ['ranks', 'rank', 'team'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('Island Team Ranks')
			.setDescription('BentoBox islands have seven ranks. Exact permissions for each rank are configured per-island in the Settings GUI.')
			.addFields(
				{
					name: '👑 Owner',
					value: 'The island creator. One per island. Full control over all settings and team management.'
				},
				{
					name: '⭐ Sub-Owner',
					value: 'Promoted from Member. Nearly identical permissions to Owner. Use `/island team promote <player>`.'
				},
				{
					name: '🧑 Member',
					value: 'Default rank for players who join a team. Accepts via `/island team accept`. **Warning:** joining a team deletes the player\'s own island.'
				},
				{
					name: '🤝 Trusted',
					value: 'A non-member with **permanent** island access. Use `/island team trust <player>`. Survives logout. Revoke with `/island team untrust <player>`.'
				},
				{
					name: '🔗 Coop',
					value: 'A non-member with **temporary** island access. Use `/island team coop <player>`. Access ends when the inviter logs off. Revoke with `/island team uncoop <player>`.'
				},
				{
					name: '👁️ Visitor',
					value: 'Any player who walks onto an island. Default: cannot break, place, or interact with most blocks.'
				},
				{
					name: '🚫 Banned',
					value: 'Banned by a team member. Cannot enter the island. Use `/island team ban <player>`.'
				},
				{
					name: 'More info',
					value: '[Teams documentation](https://docs.bentobox.world/en/latest/BentoBox/About/Teams/)'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
