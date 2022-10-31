import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;
 
  get errores(): any {
    return this.miFormulario?.controls['terminos']?.errors;
  }
  
  persona = {
    genero: 'F',
    notificaciones: true
  }

  terminosYCondiciones = false;
}
