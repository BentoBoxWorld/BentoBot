const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'reset',
	description: 'how to completely wipe and reset BentoBox islands and worlds',
	permission: 'EVERYONE',
	aliases: ['wipe', 'fullreset'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('Full Reset / Wipe All Islands')
			.setDescription('⚠️ **This is irreversible. Back up everything first.**')
			.addFields(
				{
					name: 'Steps (flat-file / JSON database)',
					value: '1. **Stop the server**\n2. Delete the gamemode\'s world folders (e.g. `bskyblock_world`, `bskyblock_world_nether`, `bskyblock_world_the_end`)\n3. Delete `plugins/BentoBox/database/Island/` and `plugins/BentoBox/database/Players/` (or just the files prefixed with your gamemode name if running multiple modes)\n4. Restart — BentoBox regenerates everything fresh'
				},
				{
					name: 'SQL database',
					value: 'Same steps, but use SQL commands to drop the relevant Island and Players tables (or rows prefixed with your gamemode name) instead of deleting files.'
				},
				{
					name: 'Changing island distance at the same time?',
					value: 'Update `distance-between-islands` in the gamemode\'s `config.yml` **before** restarting in step 4. This is the only safe time to change it.'
				},
				{
					name: 'More info',
					value: '[FAQ: How do I completely reset BentoBox?](https://docs.bentobox.world/en/latest/FAQ/#how-do-i-completely-reset-bentobox-wipe-all-islands)'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
