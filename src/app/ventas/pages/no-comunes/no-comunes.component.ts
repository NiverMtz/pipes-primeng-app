import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Marlen';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Juan', 'Lalo', 'Carlos'];
  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  cambiarPersona() {
    this.nombre = this.nombre === 'Marlen' ? 'Niver' : 'Marlen';
    this.genero = this.genero === 'femenino' ? 'masculino' : 'femenino';
  }

  eliminarCliente() {
    this.clientes.pop()
  }

  // KeyValue Pipe
  persona = {
    cDireccion: 'Texas, USA',
    bEdad: 22,
    aNombre: 'Miranda'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: true
    }
  ]

  // Async Pipe
  miObservable = interval(1000); // 0, 1, 2, ...

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () =>  {
      resolve('Tenemos data de promesa');
    }, 3500)
  });

}
