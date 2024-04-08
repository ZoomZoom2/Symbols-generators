import Team from '../app';

test('должна перебирать объект', () => {
  const char1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const char2 = {
    name: 'Маг',
    type: 'Magic',
    health: 40,
    level: 3,
    attack: 50,
    defence: 5,
  };

  const myTeam = new Team();
  myTeam.addAll(char1, char2);

  function getChar(obj) {
    let value;
    for (const item of obj) {
      value = item;
    }
    return value;
  }

  expect(getChar(myTeam)).toEqual(char2);

  // Ошибка при повторном добавлении игрока
  const myTeam3 = new Team();
  myTeam3.add(char1);
  expect(() => myTeam3.add(char1)).toThrow('Вы не можете добавить персонажа дважды');
});
