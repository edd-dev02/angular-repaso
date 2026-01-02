import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    CounterComponent, // Podemos utilizar el componente en cualquier parte del módulo
  ],
  exports: [
    CounterComponent, // Se puede implementar el componente en otros módulos
  ]
})
export class CounterModule {

}
