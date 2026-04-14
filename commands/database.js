const Embeds = require('../embed.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'database',
	description: 'database requirements, minimum versions, and migration guide',
	permission: 'EVERYONE',
	aliases: ['db', 'storage'],
	cooldown: 5,
	execute(message) {
		const embed = new EmbedBuilder()
			.setTitle('Database & Storage')
			.setDescription('BentoBox defaults to flat-file JSON, which requires no setup. For production servers, MySQL or MariaDB is recommended. [Migration guide →](https://docs.bentobox.world/en/latest/BentoBox/Database-transition/)')
			.addFields(
				{
					name: 'Minimum supported versions',
					value: '**MySQL** 5.7+\n**MariaDB** 10.2.3+\n**MongoDB** 3.6+\n**SQLite** 3.28+\n**PostgreSQL** latest recommended'
				},
				{
					name: '⚠️ MariaDB vs MySQL — it matters',
					value: 'Set `database: MARIADB` in BentoBox `config.yml` if you use MariaDB, and `MYSQL` for MySQL. The drivers differ — mixing them causes connection errors at startup.'
				},
				{
					name: 'Migrating from JSON to MySQL/MariaDB',
					value: '1. Stop the server\n2. Change the database type in `config.yml`\n3. Enable `database-transition: true`\n4. Start the server — BentoBox copies all records across\n5. Disable `database-transition` and restart'
				},
				{
					name: 'World folder is huge — how to shrink it',
					value: '• Set `keep-previous-island-on-reset: false` so resets delete instead of abandon\n• Run `/[admin_cmd] purge` to remove inactive islands, then `/[admin_cmd] purge regions`\n• **Always back up before purging**'
				}
			);
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embeds: [CreatedEmbed] });
	},
};
