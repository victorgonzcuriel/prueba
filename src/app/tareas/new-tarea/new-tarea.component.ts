import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'doc-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrls: ['./new-tarea.component.css']
})
export class NewTareaComponent implements OnInit {

  newTarea: TareaModel;
  @Output()
  addTarea: EventEmitter<TareaModel>;
  constructor() {
    // Los eventos se deben inicializar en el constructor. En el init es demasiado tarde.
    this.addTarea = new EventEmitter<TareaModel>();
  }

  ngOnInit() {
    this.newTarea = new TareaModel();
  }

  sendAddTarea() {
    // Tambien se puede hacer emitter.next
    this.addTarea.emit(this.newTarea);
    this.newTarea = new TareaModel();
  }

}
