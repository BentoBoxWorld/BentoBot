
const Embeds = require('../embed.js');

module.exports = {
	name: 'range',
	description: 'displays information about [range]',
	permission: 'EVERYONE',
	cooldown: 2,
	execute(message) {
    const CreatedEmbed = Embeds.EmbedGen({
			"title": "[range]",
			"description": `All new islands starts with default protection range that is defined in [gamemode] config protection-range.
        Island protection area can be increased with command:
        **/[admin_cmd] range set|add <player> <number>**
        Or with permission:
        **[gamemode].island.range.<number>**
        Command works instantly, permission requires player to relog the server.
        The max available value is defined by distance-between-islands from [gamemode] config. However, that value cannot be increased without full reset of all islands.`
		});
		message.channel.send({ embed: CreatedEmbed })
	},
};
