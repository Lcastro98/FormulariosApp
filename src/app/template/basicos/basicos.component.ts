import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return  this.miFormulario?.form.controls['producto']?.invalid &&
            this.miFormulario?.form.controls['producto']?.touched;
  }

  precioValido(): boolean {
    return  this.miFormulario?.form.controls['precio']?.value < 0 &&
            this.miFormulario?.form.controls['precio']?.touched;
  }

  guardar() {
    console.log(this.miFormulario.value);
  }
}
