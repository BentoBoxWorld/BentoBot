const Embeds = require('../embed.js');
const aliases = require('../aliases.js')
const discord = require('discord.js');

module.exports = {
	name: 'ci',
	description: 'provides links to the CI',
	permission: 'EVERYONE',
	cooldown: 5,
	execute(message, args) {
    const embed = new discord.MessageEmbed();
    embed.setTitle("CI development builds");
		embed.setDescription("You can find the latest development builds on [ci.bentobox.world](https://ci.bentobox.world).\n\n:warning: Development builds are less thoroughly tested than the official releases. Use them knowingly.");

    if (args.length == 1) {
      let project = aliases.find_project_for_alias(args[0]);
      if (!project) {
	      let project = args[0];
      };
      embed.addFields(
			  { name: `${project} development builds`, value: `:arrow_forward: [Click here for ${project}'s development builds](https://ci.codemc.io/job/BentoBoxWorld/job/${project}). :arrow_backward:` }
		  );
    }
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embed: CreatedEmbed })
	},
};
