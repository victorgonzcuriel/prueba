import { Injectable } from '@angular/core';
import { LibroModel } from '../models/libro.model';
import { LIBROS } from '../models/libros.data';

@Injectable({
  providedIn: 'root'
})
export class LibrosMockService {

  libros: Array<LibroModel>;
  constructor() { }

  getLibros(clave: string): Array<LibroModel> {
    if (clave) {
      this.libros = LIBROS;
    } else {
      this.libros = [];
    }
    return this.libros;
  }

  getLibrosAsync(clave: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const n = Math.random();
        if (n < 0.5) {
          this.libros = LIBROS;
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });
  }
}
