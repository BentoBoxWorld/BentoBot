const Embeds = require('../embed.js');
const fs = require('fs');
module.exports = {
	name: 'createembed',
	description: 'Add a premade Embed',
	permission: 'MANAGE_CHANNELS',
	cooldown: 5,
	async execute(message, args) {
		fs.stat(`./embeds/${args[0]}.json`, function (err, stat) {
			if (err == null) {
				const theembed = require(`../embeds/${args[0]}.json`);
				const CreatedEmbed = Embeds.EmbedGen(theembed);
				message.channel.send({ embed: CreatedEmbed });
			} else if (err.code === 'ENOENT') {
				console.log(err)
				message.channel.send("`./embeds/" + args[0] + ".json` Does Not Exist.");
			} else {
				console.log(err.code);
			}
		});
		},
};