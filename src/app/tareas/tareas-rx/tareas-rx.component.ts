import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { Observable } from 'rxjs';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'doc-tareas-rx',
  templateUrl: './tareas-rx.component.html',
  styleUrls: ['./tareas-rx.component.css']
})
export class TareasRxComponent implements OnInit {

  tareas: Array<TareaModel>;

  constructor(public tareasService: TareasService) { }

  ngOnInit() {
    this.tareas = [];
    this.tareasService.subscribeTarea().subscribe( response => {
      this.tareas = response;
      console.log(response)
    });
  }

  private resetTareas() {}

}
