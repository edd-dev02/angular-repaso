import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Contador';
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
