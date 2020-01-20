import { IUsuario, Usuario } from './../../models/iusuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public usuario: Usuario = new Usuario('', '', 0, '');

  constructor() { }

  ngOnInit() {
  }

  public guardar() {
    console.log(this.usuario);
  }

}
