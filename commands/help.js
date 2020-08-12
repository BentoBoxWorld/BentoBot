const Embeds = require('../embed.js');
const { prefix } = require('../config.json');
const discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    permission: 'EVERYONE',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;
        if (!args.length) {
            const embed = new discord.MessageEmbed()
            embed.setTitle("Here's a list of all my commands:");
            embed.setDescription(commands.map(cmd => "**".concat(prefix.concat(cmd.name.concat("**\n" + cmd.description)))));
            embed.addFields(
                { name: `You can send \`${prefix}help [command name]\` to get info on a specific command!`, value: 'Contact <@547890787682222081> for support' }
            )
            const CreatedEmbed = Embeds.EmbedGen(embed);
            return message.channel.send({ embed: CreatedEmbed })
                .then(() => {
                })
                .catch(error => {
                    console.error(error);
                });
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        const embed = new discord.MessageEmbed()
        embed.setTitle("**Command:**");
        embed.setDescription(prefix.concat(command.name));
        embed.addFields(
            { name: `**Description:**`, value: `${command.description}` },
            { name: `**Permission:**`, value: `${command.permission.replace('_', ' ')}` },
            { name: `**For Support**`, value: `Contact <@547890787682222081>` }
        )
        const CreatedEmbed = Embeds.EmbedGen(embed);

        message.channel.send({ embed: CreatedEmbed });
    }
};

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}