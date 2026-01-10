import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// Decorador de tipo servicio
@Injectable({
  providedIn: 'root' // Esta propiedad convierte el servicio en un singleton en toda la aplicación, no hay necesidad de colocarlo en los providers
})
export class DbzService {

  public characters: Character[] = [
    {
      name: "Krillin",
      power: 3000
    },
    {
      name: "Goku",
      power: 9500
    },
    {
      name: "Vegeta",
      power: 8200
    },
    {
      name: "Bulma",
      power: 10
    },
  ];

  getNewCharacter(character: Character): void {
    console.log(character);

    this.characters.push(character);

  }

  getCharacterDeletedPosition(index: number): void {

    this.characters.splice(index, 1);

  }

  constructor() { }

}
