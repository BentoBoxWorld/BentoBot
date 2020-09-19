const Embeds = require('../embed.js');
const { prefix } = require('../config.json');
var request = require('request');
const Discord = require('discord.js');

function formatLink(domain, path, id) {
	if (id === "") {
		return `[Read more](${domain}${path})`;
	} else {
		return `[Read more](${domain}${path}#${id})`;
	}
}

// Gets the result's content and
//		if there are sentences, only show the first one
//		if there are no sentences... i don't know what to do yet
function filterContent(content) {
	const analyzedSubstring = content.substring(0, 128);
	if (analyzedSubstring.includes('.')) {
		const indexOfDot = analyzedSubstring.indexOf('.');
		return analyzedSubstring.substring(0, indexOfDot-1) + ".";
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
	execute(message, args) {
		var result;
		if (args instanceof Array) {
			result = args.join(' ');
		}
		else {
			result = args
		}

		if (result.length < 4) {
			return message.reply('your request is too short or too broad.');
		}
		// Show that it is typing
		message.channel.startTyping();

		// Request the data
		request('https://docs.bentobox.world/_/api/v2/search/?format=json&project=bentobox-world&q=' + result + '&version=latest', function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var importedJSON = JSON.parse(body);
				const searchEmbed = new Discord.MessageEmbed()
				searchEmbed.setTitle('Search results for: ' + result)
				searchEmbed.setDescription('These results were gathered from [https://docs.bentobox.world/](docs.bentobox.world)')
				for (i = 0; i < importedJSON.count && i < 6 ; i++) {
					var res = importedJSON.results[i];
					searchEmbed.addField(res.title, filterContent(res.blocks[0].content) + '\n' + formatLink(res.domain, res.path, res.blocks[0].id));
				}
				if (importedJSON.count === 0) {
					searchEmbed.addField("No results found", 'Sorry, there were no results matching "' + result + '"');
				}
				const CreatedEmbed = Embeds.EmbedGen(searchEmbed);
				message.channel.send({ embed: CreatedEmbed });

				// Stop "typing"
				message.channel.stopTyping(true);
			}
		})
	}
};
