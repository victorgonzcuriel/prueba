import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'doc-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input()
  tarea: TareaModel;
  @Input()
  index: number;
  @Output()
  changeTarea: EventEmitter<number>;
  @Output()
  deleteTarea: EventEmitter<number>;
  constructor() {
    this.changeTarea = new EventEmitter<number>();
    this.deleteTarea = new EventEmitter<number>();
  }

  ngOnInit() {
    this.tarea = {...this.tarea};
  }

  sendChangeTarea() {
    this.changeTarea.next(this.index);
  }

  sendDeleteTarea() {
    this.deleteTarea.emit(this.index);
  }

}
