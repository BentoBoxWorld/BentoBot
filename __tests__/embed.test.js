const { EmbedBuilder } = require('discord.js');
const { EmbedGen } = require('../embed.js');

test('returns an EmbedBuilder when given a plain object', () => {
  const result = EmbedGen({ title: 'Test', description: 'Hello' });
  expect(result).toBeInstanceOf(EmbedBuilder);
});

test('sets title and description from plain object', () => {
  const result = EmbedGen({ title: 'My Title', description: 'My Desc' });
  const data = result.toJSON();
  expect(data.title).toBe('My Title');
  expect(data.description).toBe('My Desc');
});

test('sets color, footer, and timestamp on plain object', () => {
  const result = EmbedGen({ title: 'Test' });
  const data = result.toJSON();
  expect(data.color).toBe(16096256);
  expect(data.footer.text).toBe('BentoBot by BentoBoxWorld');
  expect(data.timestamp).toBeDefined();
});

test('sets color, footer, and timestamp on an existing EmbedBuilder', () => {
  const embed = new EmbedBuilder().setTitle('Builder');
  const result = EmbedGen(embed);
  expect(result).toBe(embed);
  const data = result.toJSON();
  expect(data.color).toBe(16096256);
  expect(data.footer.text).toBe('BentoBot by BentoBoxWorld');
});

test('handles plain object with fields', () => {
  const result = EmbedGen({
    title: 'Rules',
    fields: [{ name: '#1', value: 'Be nice.' }]
  });
  const data = result.toJSON();
  expect(data.fields).toHaveLength(1);
  expect(data.fields[0].name).toBe('#1');
});
