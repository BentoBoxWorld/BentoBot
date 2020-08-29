const Embeds = require('../embed.js');
const { prefix } = require('../config.json');
const discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'lists available commands or provides info about the specified command',
    permission: 'EVERYONE',
    aliases: ['commands'],
    usage: '[command]',
    cooldown: 3,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;
        if (!args.length) {
            const embed = new discord.MessageEmbed()
            embed.setTitle("List of available commands");
            embed.setDescription(commands.map(cmd => format_command(cmd)));
            embed.addFields(
                { name: `Type \`${prefix}help [command name]\` to get info about a specific command.`, value: "Thanks for using BentoBox!"}
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

        const all_aliases = prefix + command.name + ", " + prefix + command.aliases.join(", " + prefix);

        const embed = new discord.MessageEmbed()
        embed.setTitle(prefix.concat(command.name));
        embed.addFields(
            { name: 'Description', value: `${command.description}` },
            { name: 'Aliases', value: `${all_aliases}` },
            { name: 'Permission', value: `${command.permission.replace('_', ' ')}` }
        )
        const CreatedEmbed = Embeds.EmbedGen(embed);

        message.channel.send({ embed: CreatedEmbed });
    }
};

const format_command = (cmd) => {
  return `**${prefix}${cmd.name}${format_command_usage(cmd)}** • ${cmd.description}`
}

const format_command_usage = (cmd) => {
  if (typeof cmd.usage !== 'undefined') {
    return ' ' + cmd.usage;
  } else {
    return '';
  }
}
