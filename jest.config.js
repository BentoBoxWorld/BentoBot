module.exports = {
  moduleNameMapper: {
    '^\\.[\\/]config\\.json$': '<rootDir>/__tests__/__mocks__/config.json',
    '^\\.\\.[\\/]config\\.json$': '<rootDir>/__tests__/__mocks__/config.json',
  },
  testEnvironment: 'node',
};
