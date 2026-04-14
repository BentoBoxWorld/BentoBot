const fs = require('fs');
const path = require('path');

const commandsDir = path.join(__dirname, '../commands');
const commandFiles = fs.readdirSync(commandsDir).filter(f => f.endsWith('.js'));

describe('every command module', () => {
  commandFiles.forEach(file => {
    const name = file.replace('.js', '');
    test(`${name} has required properties`, () => {
      const cmd = require(path.join(commandsDir, file));
      expect(typeof cmd.name).toBe('string');
      expect(cmd.name.length).toBeGreaterThan(0);
      expect(typeof cmd.description).toBe('string');
      expect(typeof cmd.permission).toBe('string');
      expect(typeof cmd.execute).toBe('function');
    });
  });
});
