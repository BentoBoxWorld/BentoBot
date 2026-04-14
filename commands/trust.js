const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'trust',
	description: 'explains how to let someone build on your island without joining your team',
	permission: 'EVERYONE',
	aliases: ['coop', 'helper'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('Letting Someone Help Without Joining Your Team')
			.setDescription('Use **Trust** or **Coop** — both give island access without the player joining your team and losing their own island.')
			.addFields(
				{
					name: '🤝 Trust (permanent)',
					value: '`/island team trust <player>`\nPersists across logouts. Use this for long-term helpers.\nRevoke with `/island team untrust <player>`.'
				},
				{
					name: '🔗 Coop (temporary)',
					value: '`/island team coop <player>`\nEnds automatically when the inviter logs off. Use this for one-off help sessions.\nRevoke with `/island team uncoop <player>`.'
				},
				{
					name: 'What they can do',
					value: 'Trusted and Coop players can break/place blocks and interact by default. You can fine-tune exactly which actions each rank is allowed in the island **Settings → Protection** menu.'
				},
				{
					name: '⚠️ Joining as a Team Member is different',
					value: 'If a player accepts a *team invite* (`/island team invite`), they **lose their own island permanently**. Only do this if they truly want to move onto your island.'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
