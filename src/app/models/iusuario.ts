export interface IUsuario {
  _id: string;
  nombre: string;
  apellido: string;
  edad: number;
  pass: string;
}
export class Usuario implements IUsuario {

  constructor(
    public _id: string,
    public nombre: string,
    public apellido: string,
    public edad: number,
    public pass: string
  ) {

  }
}
