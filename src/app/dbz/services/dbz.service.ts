import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

// Decorador de tipo servicio
@Injectable({
  providedIn: 'root' // Esta propiedad convierte el servicio en un singleton en toda la aplicación, no hay necesidad de colocarlo en los providers
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 3000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 8200
    },
    {
      id: uuid(),
      name: "Bulma",
      power: 10
    },
  ];

  getNewCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(character);

  }

  /*
  getCharacterDeletedPosition(index: number): void {
    this.characters.splice(index, 1);
  }
  */

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }

}
