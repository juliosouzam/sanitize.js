import { sanitize } from '../src';

test('if a string was sanitized, removed all special characters', () => {
  const word = sanitize(`if you're Australian, then i'm not Brazillian`);

  expect(word).toBe('if youre Australian then im not Brazillian');
});
