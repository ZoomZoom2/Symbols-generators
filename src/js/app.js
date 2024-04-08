export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Вы не можете добавить персонажа дважды');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
  }

  * [Symbol.iterator]() {
    const members = Array.from(this.members);
    for (const member of members) {
      yield member;
    }
  }
}
