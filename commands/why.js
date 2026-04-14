const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'why',
	description: 'explains the /[admin] why diagnostic command for debugging protection issues',
	permission: 'EVERYONE',
	aliases: ['debug', 'diagnose'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('Debugging with /[admin_cmd] why')
			.setDescription('The `why` command is **the fastest way to debug** "I can\'t break/place/interact" reports. Run it before asking for help.')
			.addFields(
				{
					name: 'Usage',
					value: '`/[admin_cmd] why <player>`\ne.g. `/bsbadmin why Steve` or `/obadmin why Steve`'
				},
				{
					name: 'What it tells you',
					value: 'It shows exactly which BentoBox protection flag (if any) is blocking the player\'s last action — the flag name, the island it belongs to, and what rank is required to perform that action.'
				},
				{
					name: 'Other useful diagnostics',
					value: '`/bentobox version` — check all addon versions and server build\n`/papi parse me <placeholder>` — verify a placeholder resolves correctly'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
