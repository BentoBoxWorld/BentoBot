const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'challenges',
	description: 'information about the Challenges addon and how to get started',
	permission: 'EVERYONE',
	aliases: ['challenge', 'quests'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('Challenges Addon')
			.setDescription('The Challenges addon adds quests and tasks to BentoBox gamemodes. [Documentation →](https://docs.bentobox.world/en/latest/addons/Challenges/)')
			.addFields(
				{
					name: 'The menu is empty after installing — how do I get challenges?',
					value: 'The default challenge sets are bundled but not loaded automatically. Open `/[admin_cmd] challenges`, click **Library**, pick a challenge set (e.g. "default" for BSkyBlock), then type `confirm` in chat when prompted.'
				},
				{
					name: 'Challenge types',
					value: '**Inventory** — requires items in inventory\n**Island** — requires blocks/entities on the island\n**Other** — kill mobs, craft items, etc.\n**Statistic** — track vanilla stats like distance walked'
				},
				{
					name: 'Repeatable challenges',
					value: 'Challenges can be set as repeatable with a cooldown or max-attempts limit. Rewards can run commands using `[SUDO]` (as console) or `[player]` (as player).'
				},
				{
					name: '⚠️ Cross-world limitation',
					value: 'Challenges are bound to the gamemode world they were created in. They cannot be shared across gamemodes or used in the overworld without a separate quest plugin.'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
