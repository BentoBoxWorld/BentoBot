const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'size',
	description: 'explains how to increase a player\'s island protection range',
	permission: 'EVERYONE',
	aliases: ['expand', 'island-size', 'protection-range'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('Increasing Island Size / Protection Range')
			.setDescription('An island\'s protected area can be grown up to the `distance-between-islands` value. There are three mechanisms — pick **one**, as they are mutually exclusive on some gamemodes (especially Boxed).')
			.addFields(
				{
					name: '1. Admin command (instant)',
					value: '`/[admin_cmd] range set <player> <number>`\nApplies immediately. No relog required.'
				},
				{
					name: '2. Permission (applies on next login)',
					value: 'Grant `[gamemode].island.range.<number>` to the island owner.\nExample: `bskyblock.island.range.150`\nThe player must **relog** for the change to take effect. If the island changes owner, the range adjusts to the new owner\'s permission.'
				},
				{
					name: '3. Advancements — Boxed only',
					value: 'In Boxed, the box grows automatically as the owner unlocks vanilla advancements. To use commands or permissions in Boxed instead, set `ignore-advancements: true` in the Boxed `config.yml`.'
				},
				{
					name: 'Selling island upgrades',
					value: 'There\'s no built-in shop. Use the [Upgrades addon](https://docs.bentobox.world/en/latest/addons/Upgrades/) with Vault, or any shop plugin that grants the range permission on purchase.'
				},
				{
					name: 'More info',
					value: '[Island Protection docs](https://docs.bentobox.world/en/latest/BentoBox/Island-Protection,-Flags-&-Ranks/)'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
