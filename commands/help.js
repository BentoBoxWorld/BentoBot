const Embeds = require('../embed.js');
const { prefix } = require('../config.json');
const discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'lists available commands or provides info about the specified command',
    permission: 'EVERYONE',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 3,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;
        if (!args.length) {
            const embed = new discord.MessageEmbed()
            embed.setTitle("List of available commands");
            embed.setDescription(commands.map(cmd => "**".concat(prefix.concat(cmd.name.concat("** • " + cmd.description)))));
            embed.addFields(
                { name: `Type \`${prefix}help [command name]\` to get info about a specific command!`, value: 'Contact <@547890787682222081> for support' }
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
            return message.reply("this command does not exist.");
        }

        const embed = new discord.MessageEmbed()
        embed.setTitle(prefix.concat(command.name));
        embed.addFields(
            { name: `Description`, value: `${command.description}` },
            { name: `Permission`, value: `${command.permission.replace('_', ' ')}` },
            { name: `For support`, value: `Contact <@547890787682222081>` }
        )
        const CreatedEmbed = Embeds.EmbedGen(embed);

        message.channel.send({ embed: CreatedEmbed });
    }
};

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}