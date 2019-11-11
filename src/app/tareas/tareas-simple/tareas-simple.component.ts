import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'doc-tareas-simple',
  templateUrl: './tareas-simple.component.html',
  styleUrls: ['./tareas-simple.component.css']
})
export class TareasSimpleComponent implements OnInit {
  tareas: Array<TareaModel>;
  tarea: TareaModel;
  storeName: string;
  constructor() { }

  ngOnInit() {
    this.storeName = 'TareasSimple';
    // LocalStorage es el storage del navegador
    this.tareas = JSON.parse(localStorage.getItem(this.storeName)) || [];
    this.tarea = new TareaModel();
    this.setStore();
  }

  addTarea() {
    this.tareas.push(this.tarea);
    this.tarea = new TareaModel();
    this.setStore();
  }
  private setStore() {
    localStorage.setItem(this.storeName, JSON.stringify(this.tareas));
  }

  deleteTarea(item: TareaModel){
    const index = this.tareas.indexOf(item);
    this.tareas.splice(index, 1);
    this.setStore();
  }

  changeTarea(){
    this.setStore();
  }

}
