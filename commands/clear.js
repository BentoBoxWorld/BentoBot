const Embeds = require('../embed.js');
module.exports = {
	name: 'clear',
	description: 'clear up to 99 messages.',
	guildOnly: true,
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			const CreatedEmbed = Embeds.EmbedGen({
				"title": "that doesn\'t seem to be a valid number.",
			});
			return message.channel.send({ embed: CreatedEmbed });
		} else if (amount <= 1 || amount > 100) {
			const CreatedEmbed = Embeds.EmbedGen({
				"title": "you need to input a number between 1 and 99.",
			});
			return message.channel.send({ embed: CreatedEmbed });
		} //else if (message.guild === null) {
			//const CreatedEmbed = Embeds.EmbedGen({
				//"title": "This Command does not work in DM\'s.",
			//});
			//return message.channel.send({ embed: CreatedEmbed });
        //}
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			const CreatedEmbed = Embeds.EmbedGen({
				"title": "there was an error trying to clear messages in this channel!",
			});
			return message.channel.send({ embed: CreatedEmbed });
		});
	},
};