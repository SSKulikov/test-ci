import statusCharacter from '../game';

test('game 100', () => {
  const obj = { name: 'маг', health: 100 };
  expect(statusCharacter(obj)).toBe('healthy');
});

test('game 35', () => {
  const obj = { name: 'маг', health: 35 };
  expect(statusCharacter(obj)).toBe('wounded');
});

test('game 14', () => {
  const obj = { name: 'маг', health: 14 };
  expect(statusCharacter(obj)).toBe('critical');
});
