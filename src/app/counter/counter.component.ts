import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    Contador: {{counter}}

    <button (click)="sumarContador()">+1</button>
    <button (click)="restarContador()">-1</button>
    <br><br>
    <button (click)="reiniciar()">Reset</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  sumarContador(): void {
    this.counter++;
  }

  restarContador(): void {
    this.counter--;
  }

  reiniciar(): void {
    this.counter = 10;
  }

}
