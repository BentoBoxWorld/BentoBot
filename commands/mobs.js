const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'mobs',
	description: 'troubleshooting mob and entity spawning issues on islands',
	permission: 'EVERYONE',
	aliases: ['spawning', 'mob-spawning', 'entities'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('Mob Spawning Issues')
			.addFields(
				{
					name: 'Fish / dolphins / squid only spawn near bedrock (y ≈ −63)',
					value: 'This is a **Mojang flat-world bug** in Minecraft 1.21.2+. Aquatic mobs only spawn near the bottom of flat worlds. Newly created worlds on recent BentoBox versions include a workaround. Existing worlds need manual NBT editing of `level.dat` — there is no in-game fix.'
				},
				{
					name: 'No mobs spawning at all',
					value: '1. Stand on the island as an op and watch the console — BentoBox logs which plugin (if any) cancelled the spawn\n2. If nothing is printed, Minecraft never attempted the spawn — check `spawn-limits` and gamerules in `bukkit.yml`\n3. Check the gamemode\'s `config.yml` `world.spawn-limits` section\n4. If visitors can\'t be attacked by hostiles, check the **Visitor protection** flag in island settings'
				},
				{
					name: 'Useful diagnostic',
					value: 'Run `/[admin_cmd] why <player>` to see exactly which flag or plugin is blocking a player\'s interaction or spawn.'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
