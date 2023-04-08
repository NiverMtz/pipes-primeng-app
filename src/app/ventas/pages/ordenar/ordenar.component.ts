import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = false;

  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Mujer Maravilla',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.naranja
    },
  ]

  cambiarCasing() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor: string ) {
    this.ordenarPor = valor;
  }

}
