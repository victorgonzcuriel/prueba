import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'doc-tareas-plus',
  templateUrl: './tareas-plus.component.html',
  styleUrls: ['./tareas-plus.component.css']
})
export class TareasPlusComponent implements OnInit {
  tareas: Array<TareaModel>;

  constructor() {
   }

  ngOnInit() {
    this.tareas = new Array<TareaModel>();
  }

  // El tipo es del modelo que le digamos en el emitter.
  addTarea(newTarea: TareaModel) {
    this.tareas.push(newTarea);
    console.log(this.tareas);
  }

  changeTarea(index: number) {
    this.tareas[index].isCompleted = !this.tareas[index].isCompleted;
  }

  deleteTarea(index: number) {
    this.tareas.splice(index, 1);
  }

}
