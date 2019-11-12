import { Component, OnInit } from '@angular/core';
import { MaestrosIf, AlumnoModel } from 'src/app/models/alumno.model';
import { CURSOS } from 'src/app/models/cursos.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'doc-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {

  cursos: Array<MaestrosIf>;
  turnos: Array<MaestrosIf>;
  // NgForm más reactivo
  formCurso: FormGroup;
  alumno: AlumnoModel;

  // Se declara el servicio en el constructor. Al ser un injectable (servicio), Angular lo instancia directamente
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cursos = CURSOS;
    this.turnos = CURSOS;
    // Se instancia con un formBuilder (servicio). Es una factoria para los objetos FormGroup
    // En los arrays se ponen los valores por defecto y los validadores
    this.formCurso = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', []],
      passwd: ['', []],
      email: ['', []],
      nacim: ['', []],
      coment: ['', []],
      isOk: ['', []],
      turno: ['', []],
      curso: ['', []]
    });

    console.log(this.formCurso);
  }

  onSubmit() {
    // Ligo el valor del formulario al objeto que quiero;
    this.alumno = this.formCurso.value;
    console.log(this.alumno);
  }
}
