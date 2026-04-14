const { EmbedBuilder } = require('discord.js');

exports.EmbedGen = function(recembed) {
	let builder;
	if (recembed instanceof EmbedBuilder) {
		builder = recembed;
	} else {
		builder = new EmbedBuilder();
		if (recembed.title) builder.setTitle(recembed.title);
		if (recembed.description) builder.setDescription(recembed.description);
		if (recembed.fields && recembed.fields.length > 0) builder.addFields(recembed.fields);
	}
	builder
		.setColor(16096256)
		.setFooter({
			iconURL: 'https://cdn.discordapp.com/avatars/744954751598329858/f765dbdaa43f6eb047b9e1bf4eb37f04.png',
			text: 'BentoBot by BentoBoxWorld'
		})
		.setTimestamp();
	return builder;
};
