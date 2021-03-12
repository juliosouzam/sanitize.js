import { sanitize } from '../src';

test('should test example', () => {
  const word = sanitize(`if you're Australian, then i'm not Brazillian`);
  
  expect(word).toBe('if youre Australian then im not Brazillian');
});
