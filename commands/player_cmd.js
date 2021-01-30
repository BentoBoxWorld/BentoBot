const Embeds = require('../embed.js');

module.exports = {
	name: 'player_cmd',
	description: 'displays information about [player_cmd]',
	permission: 'EVERYONE',
	cooldown: 2,
	execute(message) {
    const CreatedEmbed = Embeds.EmbedGen({
			"title": "[player_cmd]",
			"description": `Each gamemode has its own **top-level command** for players.
      They can be edited in the gamemode's config.

      The default ones are the following:

      **BSkyBlock**: /island • /is
      **AcidIsland**: /ai
      **SkyGrid**: /skygrid • /sg
      **CaveBlock**: /cave • /cb
      **AOneBlock**: /oneblock • /ob`
		});
		message.channel.send({ embed: CreatedEmbed })
	},
};
