const Embeds = require('../embed.js');

module.exports = {
	name: 'admin_cmd',
	description: 'displays information about [admin_cmd]',
	permission: 'EVERYONE',
	cooldown: 2,
	execute(message) {
    const CreatedEmbed = Embeds.EmbedGen({
			"title": "[admin_cmd]",
			"description": `Each gamemode has its own **top-level command** for admins.
      They can be edited in the gamemode's config.

      The default ones are the following:

      **BSkyBlock**: /bsbadmin • /bsb
      **AcidIsland**: /acid
      **SkyGrid**: /sgadmin • /sga
      **CaveBlock**: /cbadmin • /cba
      **AOneBlock**: /oneblockadmin • /obadmin • /oba`
		});
		message.channel.send({ embed: CreatedEmbed })
	},
};
