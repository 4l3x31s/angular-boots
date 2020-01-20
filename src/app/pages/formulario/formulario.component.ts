import { IUsuario, Usuario } from './../../models/iusuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public usuario: Usuario = new Usuario(null, null, null, null);
  myForm: FormGroup;
  constructor(
    public fb: FormBuilder
  ) {

    this.validaciones();
  }

  ngOnInit() {
  }
  validaciones() {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    });
  }

  public guardar() {
    console.log(this.usuario);
  }

}
