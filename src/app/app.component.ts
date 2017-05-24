import { Component } from '@angular/core';
import {Tarea} from "./tarea/tarea.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  nombre = '';

  mensajeEliminacion(nombreTarea:string){
    this.nombre = nombreTarea;
  }

  tareas :Tarea[] = [];


  agregarTarea(descripcion:string){
    this.tareas.push(new Tarea(descripcion,false));
  }

  eliminarTarea(tarea:Tarea){
    let indice = this.tareas.indexOf(tarea);
    if (indice> -1){
      this.tareas.splice(indice,1)
    }
  }

}
