import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Tarea} from "./tarea.model";

@Component({
    moduleId: module.id,
    selector: 'tarea',
    templateUrl: 'tarea.component.html'
})
export class TareaComponent{

  @Input
  private tarea : Tarea;

  @Output
  private eliminar = new EventEmitter<any>();

  //noinspection JSAnnotator
  eliminarTarea(tarea:Tarea){
    this.eliminar.emit()
  }
}


