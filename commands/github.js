const Embeds = require('../embed.js');
const discord = require('discord.js');
const aliases = require('../aliases.js')

module.exports = {
	name: 'github',
	description: 'provides links to a GitHub repository',
	permission: 'EVERYONE',
	usage: '<repo>',
	aliases: ['gh', 'repository', 'repo'],
	cooldown: 5,
	execute(message, args) {
		if (args.length == 1) {
      let project = aliases.find_project_for_alias(args[0]);
			const embed = new discord.MessageEmbed()
			embed.setTitle(`${project} GitHub repository`);
			embed.setDescription(`[Click here to go to the ${project} repository](https://github.com/BentoBoxWorld/${project}).`);
			embed.addFields(
				{ name: "Additional links", value: "[Issue tracker](https://github.com/BentoBoxWorld/${project}/issues) • [Releases](https://github.com/BentoBoxWorld/${project}/releases) • [Contributors](https://github.com/BentoBoxWorld/${project}/graphs/contributors)" }
			);
			const CreatedEmbed = Embeds.EmbedGen(embed);
		  message.channel.send({ embed: CreatedEmbed })
		}
	},
};
