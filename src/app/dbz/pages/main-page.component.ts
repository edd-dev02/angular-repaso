import { Component, } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

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

}
