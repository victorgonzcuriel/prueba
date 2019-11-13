import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { LIBROS } from 'src/app/models/libros.data';
import { LibrosMockService } from 'src/app/services/libros-mock.service';

@Component({
  selector: 'doc-libros-mock',
  templateUrl: './libros-mock.component.html',
  styleUrls: ['./libros-mock.component.css']
})
export class LibrosMockComponent implements OnInit {

  clave: FormControl;
  libros: Array<LibroModel>;
  constructor(private librosService: LibrosMockService) { }

  ngOnInit() {
    this.clave = new FormControl();
    this.libros = [];
  }

  buscar() {
    if (this.clave.value) {
      console.log(this.clave.value);
      this.libros = LIBROS;
      this.clave.setValue('');
    }
  }

  buscarServidor() {
    if (this.clave.value) {
    this.libros = this.librosService.getLibros(this.clave.value);
    }
    this.clave.setValue('');
  }

  borrar() {
    this.libros = [];
    this.clave.setValue('');
  }

}
