import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'doc-tareas-plus',
  templateUrl: './tareas-plus.component.html',
  styleUrls: ['./tareas-plus.component.css']
})
// Ejemplo de uso de un servicio
export class TareasPlusComponent implements OnInit {
  tareas: Array<TareaModel>;
  storeName: string;

  constructor(private storageService: StorageService) {
   }

  ngOnInit() {
    this.storeName = 'TareasPlus';
    this.tareas = this.storageService.get(this.storeName);
  }

  // El tipo es del modelo que le digamos en el emitter.
  addTarea(newTarea: TareaModel) {
    this.tareas.push(newTarea);
    console.log(this.tareas);
    this.refreshStorage();
  }

  changeTarea(index: number) {
    this.tareas[index].isCompleted = !this.tareas[index].isCompleted;
    this.refreshStorage();
  }

  deleteTarea(index: number) {
    this.tareas.splice(index, 1);
    this.refreshStorage();
  }

  resetTareas(){
    this.storageService.remove(this.storeName);
    this.tareas = this.storageService.get(this.storeName);
  }

  private refreshStorage() {
    this.storageService.set(this.storeName, this.tareas);
  }

}
