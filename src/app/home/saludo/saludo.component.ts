import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string;
  msg: string;

  constructor() { }

  ngOnInit() {
    this.nombre = 'Amigo';
    this.msg = 'Aqui va tu nombre';
  }

    // Onclick de un boton (borrar)
    onClickBorrar(ev){
      console.dir(ev);
      this.nombre = '';
    }
}
