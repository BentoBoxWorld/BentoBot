module.exports = {
	name: 'say',
	description: 'say a message',
	execute(message, args) {
		const sayMessage = args.join(" ");
		message.delete();
		message.channel.send(sayMessage)
	},
};