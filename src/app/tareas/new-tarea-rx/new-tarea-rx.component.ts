import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TareaModel } from 'src/app/models/tarea.model';
import { Observable } from 'rxjs';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'doc-new-tarea-rx',
  templateUrl: './new-tarea-rx.component.html',
  styleUrls: ['./new-tarea-rx.component.css']
})
export class NewTareaRxComponent implements OnInit {

  fcTarea: FormControl;
  aTareas: Array<TareaModel>;
  aTareas$: Observable<Array<TareaModel>> ;

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
    this.fcTarea = new FormControl();
    this.aTareas = new Array<TareaModel>();
    this.aTareas$ = this.tareasService.subscribe();
  }

  private sendAddTarea() {
    if (this.fcTarea.value) {
      this.tareasService.addTarea(this.fcTarea.value);
      this.fcTarea.setValue(new TareaModel());
    }
  }

}
