import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import generateRandomNumber from './utils/generateRandomNumber';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private strength: number;
  private defense: number;
  private _dexterity: number;
  private energy: Energy;

  constructor(name: string) {
    this._dexterity = generateRandomNumber(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this.strength = generateRandomNumber(1, 10);
    this.defense = generateRandomNumber(1, 10);
    this.energy = {
      type_: this._archetype.energyType,
      amount: generateRandomNumber(1, 10),
    };
  }

  get lifePoints() {
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    throw new Error('Method not implemented.');
  }

  special?(enemy: Fighter): void {
    throw new Error('Method not implemented.');
  }

  levelUp(): void {
    throw new Error('Method not implemented.');
  }

  receiveDamage(amount: number): number {
    throw new Error('Method not implemented.');
  }
}

export default Character;
