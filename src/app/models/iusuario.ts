export interface IUsuario {
  nombre: string;
  apellido: string;
  edad: number;
  pass: string;
}
export class Usuario implements IUsuario {

  constructor(
    public nombre: string,
    public apellido: string,
    public edad: number,
    public pass: string
  ) {

  }
}
