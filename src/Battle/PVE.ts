import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(protected player: Fighter, protected monsters: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    this.monsters.forEach((monster: SimpleFighter) => {
      if (this.player.lifePoints > -1) {
        while (monster.lifePoints > -1 && this.player.lifePoints > -1) {
          monster.attack(this.player);
          this.player.attack(monster);
        }
      }
    });
    return super.fight();
  }
}

export default PVE;
