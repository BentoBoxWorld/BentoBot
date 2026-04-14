const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'distance',
	description: 'explains island distance configuration and the mid-game change restriction',
	permission: 'EVERYONE',
	aliases: ['island-distance', 'spacing'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('Island Distance')
			.setDescription('`distance-between-islands` is set in each gamemode\'s `config.yml`. The default is **400**, meaning islands start 800 blocks apart and protection can grow up to 400 blocks in radius.')
			.addFields(
				{
					name: '⚠️ Cannot be changed mid-game',
					value: 'Once players have created islands, this value is locked. Attempting to change it causes BentoBox to refuse to start:\n```\nCRITICAL ERROR: Island distance mismatch!\n```'
				},
				{
					name: 'To change it on a fresh server',
					value: '1. Stop the server\n2. Change the value in `config.yml`\n3. Delete the world folders and `plugins/BentoBox/database/Island/` files for that gamemode\n4. Restart'
				},
				{
					name: 'Hiding neighbouring islands',
					value: 'To prevent players seeing each other\'s islands:\n`distance ≥ max_protection_range + (view-distance × 16) / 2`\nExample with range 50 and 11-chunk view distance: distance must be ≥ **138**.'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
