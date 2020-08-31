const Embeds = require('../embed.js');
const { prefix } = require('../config.json');
var request = require('request');
const Discord = require('discord.js');
module.exports = {
	name: 'search',
	description: 'search the documentation.',
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
		return message.reply('That Is Too Short / Too Common');
		}
		
		request('https://docs.bentobox.world/_/api/v2/search/?format=json&project=bentobox-world&q=' + result + '&version=latest', function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var importedJSON = JSON.parse(body);
	 const searchEmbed = new Discord.MessageEmbed()
	 searchEmbed.setTitle('Search Results For ' + result)
	 searchEmbed.setDescription('from https://docs.bentobox.world/')
	 for (i = 0; i < importedJSON.count && i < 6 ; i++) {
		searchEmbed.addField(importedJSON.results[i].title, importedJSON.results[i].domain + importedJSON.results[i].path + "#" + importedJSON.results[i].blocks[0].id + '\n' + importedJSON.results[i].blocks[0].content.substring(0,120) + '...');
	 }
	 if (importedJSON.count === 0) {
		searchEmbed.addField("No Results Found", 'Sorry, There were no matching results to "' + result + '"');
	 }
	 const CreatedEmbed = Embeds.EmbedGen(searchEmbed);
	 message.channel.send({ embed: CreatedEmbed })
	 
		}
	})
	}
};