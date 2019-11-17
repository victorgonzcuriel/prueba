import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'doc-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {

  url: string;
  clave: FormControl;
  libros: Array<LibroModel>;
  response$: Observable<any>;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.url = environment.urlLibros;
    this.clave = new FormControl();
    this.libros = [];
  }

  buscar() {
    if (!this.clave.value) {
      return;
    }

    this.http.get(this.url + this.clave.value).toPromise()
    .then( (response: any) => {
      this.clave.setValue('');
      console.log(response.items);
      if (response.items) {
           this.libros = response.items.map(
          (item) => {
            return {autores: item.volumeInfo.authors ,
                    titulo: item.volumeInfo.title };
          }
        );
      }
     });
  }

  buscarRx() {
    if (!this.clave.value) {
      return;
    }
    this.http.get(this.url + this.clave.value)
    .subscribe((response: any) => {
        this.clave.setValue('');
        console.log(response.items);
        if (response.items) {
          this.libros = response.items.map(
        (item) => {
          return {autores: item.volumeInfo.authors ,
                  titulo: item.volumeInfo.title };
            }
          );
        }
      }
    );
  }

  borrar(){
    this.libros = [];
  }

}
