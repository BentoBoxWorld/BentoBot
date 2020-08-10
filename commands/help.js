const Embeds = require('../embed.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args, discord) {
        const data = [];
        const { commands } = message.client;
        if (!args.length) {
            //you'll need refrence to this somehow, like const {MessageEmbed} = require("discord.js")    
            const embed = new discord.MessageEmbed()
            embed.setTitle("Here's a list of all my commands:");
            embed.setDescription(commands.map(cmd => prefix.concat(capitalize(cmd.name))).join("\n"));
            embed.addFields(
                { name: `You can send \`${prefix}help [command name]\` to get info on a specific command!`, value: '\u200b' }
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
        embed.setTitle("Command Info:");
        embed.setDescription(prefix.concat(command.name));
        embed.addFields(
            { name: `**Name:**`, value: `${ command.name }` },
            { name: `**Description:**`, value: `${ command.description }` },
            { name: `**Cooldown:**`, value: `${ command.cooldown || 3 }` }
        )
        const CreatedEmbed = Embeds.EmbedGen(embed);

        message.channel.send({ embed: CreatedEmbed });
    }
};

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}