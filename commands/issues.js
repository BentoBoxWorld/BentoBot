const Embeds = require('../embed.js');
const aliases = require('../aliases.js')

module.exports = {
	name: 'issues',
	description: 'sends a link to report an issue',
	permission: 'EVERYONE',
  usage: '<repo>',
	cooldown: 5,
	execute(message, args) {
    if (args.length == 1) {
      let project = aliases.find_project_for_alias(args[0]);
      const CreatedEmbed = Embeds.EmbedGen({
  			"title": `${project} issue tracker`,
  			"description": `This is where we keep track of feature requests and bug reports for ${project}.

        [File an issue](https://github.com/BentoBoxWorld/${project}/issues/new/choose) • [Open the issue tracker](https://github.com/BentoBoxWorld/${project}/issues)`
  		});
  		message.channel.send({ embed: CreatedEmbed })
    }
	},
};
