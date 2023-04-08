import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'alejandra';  
  nombreUpper: string = 'ALEJANDRA';  
  nombreCompleto: string = 'aleJAndra MojICA';

  fecha: Date = new Date();
}
