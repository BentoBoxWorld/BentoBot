const Embeds = require('../embed.js');
const axios = require('axios');
const { EmbedBuilder } = require('discord.js');

function formatLink(domain, path, id) {
	if (id === "") {
		return `[Read more](${domain}${path})`;
	} else {
		return `[Read more](${domain}${path}#${id})`;
	}
}

function filterContent(content) {
	const analyzedSubstring = content.substring(0, 128);
	if (analyzedSubstring.includes('.')) {
		const indexOfDot = analyzedSubstring.indexOf('.');
		return analyzedSubstring.substring(0, indexOfDot - 1) + ".";
	} else {
		return analyzedSubstring + "...";
	}
}

module.exports = {
	args: true,
	name: 'search',
	description: 'search the documentation',
	permission: 'EVERYONE',
	cooldown: 5,
	async execute(message, args) {
		const result = Array.isArray(args) ? args.join(' ') : args;

		if (result.length < 4) {
			return message.reply('your request is too short or too broad.');
		}

		try {
			const response = await axios.get('https://docs.bentobox.world/_/api/v2/search/', {
				params: {
					format: 'json',
					project: 'bentobox-world',
					q: result,
					version: 'latest'
				}
			});
			const importedJSON = response.data;
			const searchEmbed = new EmbedBuilder()
				.setTitle('Search results for: ' + result)
				.setDescription('These results were gathered from [docs.bentobox.world](https://docs.bentobox.world/)');
			for (let i = 0; i < importedJSON.count && i < 6; i++) {
				const res = importedJSON.results[i];
				searchEmbed.addFields({
					name: res.title,
					value: filterContent(res.blocks[0].content) + '\n' + formatLink(res.domain, res.path, res.blocks[0].id)
				});
			}
			if (importedJSON.count === 0) {
				searchEmbed.addFields({ name: "No results found", value: `Sorry, there were no results matching "${result}"` });
			}
			const CreatedEmbed = Embeds.EmbedGen(searchEmbed);
			message.channel.send({ embeds: [CreatedEmbed] });
		} catch (e) {
			message.reply('there was an error searching the documentation.');
		}
	}
};
