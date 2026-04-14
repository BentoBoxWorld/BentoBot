const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'install',
	description: 'how to install BentoBox and its addons',
	permission: 'EVERYONE',
	aliases: ['setup', 'getstarted'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('Installing BentoBox')
			.setDescription('The easiest way to get started is to download a **pack** — a pre-matched bundle of BentoBox and addons.\n\n[**→ download.bentobox.world**](https://download.bentobox.world)')
			.addFields(
				{
					name: 'Step-by-step guide',
					value: '[Full installation tutorial](https://docs.bentobox.world/en/latest/BentoBox/Install-Bentobox/)'
				},
				{
					name: 'First things to check after installing',
					value: '• Run `/bentobox version` — all addons should appear as **Enabled**\n• Test island creation as a non-op player\n• Set `distance-between-islands` **before** any players join — it cannot be changed later'
				},
				{
					name: 'Recommended addons before going live',
					value: '[Warps](https://docs.bentobox.world/en/latest/addons/Warps/) • [Level](https://docs.bentobox.world/en/latest/addons/Level/) • [Challenges](https://docs.bentobox.world/en/latest/addons/Challenges/) • [InvSwitcher](https://docs.bentobox.world/en/latest/addons/InvSwitcher/) (if running multiple gamemodes)'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
