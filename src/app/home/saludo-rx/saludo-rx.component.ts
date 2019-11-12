import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'doc-saludo-rx',
  templateUrl: './saludo-rx.component.html',
  styleUrls: ['./saludo-rx.component.css']
})
export class SaludoRxComponent implements OnInit {

  nombre: FormControl;
  apellido: FormControl;
  msg: string;
  constructor() { }

  ngOnInit() {
    // Otra forma de instanciar controles, pero sueltos (sin builder)
    this.nombre = new FormControl();
    this.apellido = new FormControl();
  }

  onClickBorrar() {

  }

}
