const { find_project_for_alias } = require('../aliases.js');

test('resolves "acid" to "AcidIsland"', () => {
  expect(find_project_for_alias('acid')).toBe('AcidIsland');
});

test('resolves "bbox" to "BentoBox"', () => {
  expect(find_project_for_alias('bbox')).toBe('BentoBox');
});

test('returns the original string for an unknown alias', () => {
  expect(find_project_for_alias('UnknownProject')).toBe('UnknownProject');
});

test('lookup is case-insensitive', () => {
  expect(find_project_for_alias('ACID')).toBe('AcidIsland');
  expect(find_project_for_alias('BBox')).toBe('BentoBox');
});
