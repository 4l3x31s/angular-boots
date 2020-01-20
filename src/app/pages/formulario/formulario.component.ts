import { DataService } from './../../values/data.service';
import { IUsuario, Usuario } from './../../models/iusuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { TokenService } from 'src/app/values/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public usuario: Usuario = new Usuario(null, null, null, null, null);
  myForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuariosService,
    public dataService: DataService,
    public tokenService: TokenService,
    public router: Router
  ) {

  }

  ngOnInit() {
    if(this.dataService.get()) {
      this.usuario = this.dataService.get();
      this.usuario.pass = '';
    }
    this.validaciones();
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
    if(this.usuario._id){
      this.usuarioService.put('/usuarios/operaciones', this.usuario, this.tokenService.get())
      .subscribe(data => {
        window.alert('Usuario Modificado')
        this.router.navigate(['inicio']);
      }, err => {
        window.alert(err.error);
      })
    }else {
      this.usuarioService.post('/usuarios/operaciones', this.usuario)
      .subscribe(data => {
        window.alert('Usuario Registrado');
        this.router.navigate(['login']);
      }, err => {
        window.alert(err.error);
      })
    }
  }

}
