const Embeds = require('../embed.js');
const aliases = require('../aliases.js');
const discord = require('discord.js');

module.exports = {
	name: 'blueprint',
	description: 'provides info on Bentobox Blueprints',
	permission: 'EVERYONE',
	cooldown: 8,
	execute() {
    const embed = new discord.MessageEmbed();
    embed.setTitle("BentoBox Blueprints");
		embed.setDescription("You can find the full blueprint docs at [docs.bentobox.world/en/latest/BentoBox/Blueprints/](https://docs.bentobox.world/en/latest/BentoBox/Blueprints/).\n:**Info:**\n Blueprints are like WorldEdit schematics but are not compatible. Blueprints are optimized for BentoBox addons and do not require any other plugin or library to use.");
    }
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embed: CreatedEmbed });
    }
};
