import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  miFormulario0: FormGroup = new FormGroup ({
    'nombre': new FormControl('RTX 4080ti'),
    'precio': new FormControl(1500),
    'existencias': new FormControl(0)
  })

  miFormulario: FormGroup = this.fb.group({
    nombre: ['RTX 4080ti'],
    precio: [1500],
   existencias: [5]
  })

  constructor(private fb: FormBuilder) { }

}
