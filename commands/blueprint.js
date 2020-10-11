const Embeds = require('../embed.js');
const aliases = require('../aliases.js');
const discord = require('discord.js');

module.exports = {
	name: 'blueprint',
	description: 'provides info about Blueprints',
	permission: 'EVERYONE',
	cooldown: 8,
	execute(message) {
    const embed = new discord.MessageEmbed();
    embed.setTitle("Blueprints");
		embed.setDescription("**Info:**\nBlueprints are similar to WorldEdit schematics but are not compatible. They are an in-house format optimized for BentoBox addons and they do not require any other plugin or library.\n\nWant more details? Check out the [documentation](https://docs.bentobox.world/en/latest/BentoBox/Blueprints/).");
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embed: CreatedEmbed });
  }
};
