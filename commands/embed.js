const Embeds = require('../embed.js');

module.exports = {
	name: 'embed',
	description: 'embed a message',
	permission: 'MANAGE_CHANNELS',
	execute(message, args) {
		const sayMessage = args.join(" ");
		message.delete().catch(() => {});
		const CreatedEmbed = Embeds.EmbedGen({
			"description": sayMessage
		});
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
