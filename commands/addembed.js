const Embeds = require('../embed.js');
const fs = require('fs');
const path = require('path');

module.exports = {
	name: 'createembed',
	description: 'Add a premade Embed',
	permission: 'MANAGE_CHANNELS',
	cooldown: 5,
	async execute(message, args) {
		const embedsDir = path.resolve('./embeds');
		const target = path.resolve(path.join('./embeds', args[0] + '.json'));
		if (!target.startsWith(embedsDir + path.sep)) {
			return message.channel.send('Invalid embed name.');
		}
		fs.stat(target, function(err) {
			if (err == null) {
				const theembed = require(target);
				const CreatedEmbed = Embeds.EmbedGen(theembed);
				message.channel.send({ embeds: [CreatedEmbed] });
			} else if (err.code === 'ENOENT') {
				message.channel.send(`\`${args[0]}\` does not exist.`);
			} else {
				console.log(err.code);
			}
		});
	},
};
