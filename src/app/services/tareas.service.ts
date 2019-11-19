import { Injectable } from '@angular/core';
import { TareaModel } from '../models/tarea.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas: Array<TareaModel>;
  private tareas$: Subject<Array<TareaModel>>;

  constructor() {
    this.tareas = new Array<TareaModel>();
    this.tareas$ = new Subject();
  }

  public subscribeTarea(): Observable<Array<TareaModel>> {
    return this.tareas$.asObservable();
  }

  public addTarea(tarea: TareaModel) {
    this.tareas.push(tarea);
    this.tareas$.next(this.tareas);
  }

}
