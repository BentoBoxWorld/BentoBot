const addembed = require('../commands/addembed');

function makeMessage() {
  return {
    channel: { send: jest.fn().mockResolvedValue(undefined) }
  };
}

test('rejects a path traversal attempt with ../  ', async () => {
  const message = makeMessage();
  await addembed.execute(message, ['../../config']);
  expect(message.channel.send).toHaveBeenCalledWith('Invalid embed name.');
});

test('reports ENOENT for a non-existent embed (no traversal)', async () => {
  const message = makeMessage();
  await new Promise(resolve => {
    message.channel.send.mockImplementation(() => { resolve(); return Promise.resolve(); });
    addembed.execute(message, ['nonexistent']);
  });
  expect(message.channel.send).toHaveBeenCalledWith('`nonexistent` does not exist.');
});
