import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public alterEgo: string = "Spider-man"
  public nombre: string = "peter parker";
  public edad: number = 17;

  get capitalizedName(): string {
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  changeHero(): void {
    this.alterEgo = "Iron-man";
    this.nombre = "tony stark";
  }

  changeAge(): void {
    this.edad = 45;
  }

}
