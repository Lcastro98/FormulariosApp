import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Lorena',
    favoritos: [
      { id: 1, nombre: 'Halo' },
      { id: 2, nombre: 'Gears of war' }
    ]
  }

  guardar(){
    console.log('Formulario Posteado');
  }

}
