/**
 * Created by javier on 30/10/16.
 */



export class Tarea {
  descripcion: string;
  realizada: boolean;

  constructor(descripcion: string, realizada: boolean) {
    this.descripcion = descripcion;
    this.realizada = realizada;
  }
}
