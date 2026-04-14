module.exports = {
	name: 'say',
	description: 'say a message',
	permission: 'MANAGE_CHANNELS',
	execute(message, args) {
		const sayMessage = args.join(" ");
		message.delete().catch(() => {});
		message.channel.send(sayMessage);
	},
};
