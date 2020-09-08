module.exports = {
	name: "restart",
	description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
	permission: 'ADMINISTRATOR',
	args: true,
	async (message, args, client) => {
  await message.reply("Bot is restarting");
  await Promise.all(client.commands.map(cmd =>
    client.unloadCommand(cmd)
  ));
  process.exit(0);
};
};