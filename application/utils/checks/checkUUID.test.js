import { test as suite } from 'tap';
import { strict as assert } from 'node:assert';
import { checkUUID } from './checkUUID.js';

const testData = {
  validUUID: {
    input: '550e8400-e29b-41d4-a716-446655440000',
    expected: true,
  },
  noHyphens: {
    input: '550e8400e29b41d4a716446655440000',
    expected: false,
  },
  invalidChars: {
    input: '550e8400-e29b-41d4-a716-44665544zzzz',
    expected: false,
  },
  wrongVersion: {
    input: '550e8400-e29b-61d4-a716-446655440000',
    expected: false,
  },
};

suite('isUUID function:', async ({ test }) => {
  for (const [name, { input, expected }] of Object.entries(testData)) {
    test(name, async () => {
      const result = checkUUID(input);
      assert.equal(result, expected);
    });
  }
});
