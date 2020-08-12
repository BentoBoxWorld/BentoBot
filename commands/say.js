module.exports = {
	name: 'say',
	description: 'say a message',
	permission: 'EVERYONE',
	permission: 'MANAGE_CHANNELS',
	execute(message, args) {
		const sayMessage = args.join(" ");
		message.delete();
		message.channel.send(sayMessage)
	},
};