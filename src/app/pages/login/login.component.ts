import { DataService } from './../../values/data.service';
import { TokenService } from './../../values/token.service';
import { Usuario } from './../../models/iusuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario(null, null, null, null, null);
  myForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuariosService,
    public tokenService: TokenService,
    public dataService: DataService,
    public router: Router
  ) {

    this.validaciones();
  }

  ngOnInit() {
    console.log('inicio');
  }
  validaciones() {

    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    });
  }

  public guardar() {
    console.log(this.usuario);
    this.usuarioService.post('/usuarios/login', this.usuario)
    .subscribe((data: HttpResponse<any>) => {

      console.log(data.headers.get('token'));
      this.tokenService.set(data.headers.get('token'));
      this.dataService.set(data.body);
      this.router.navigate(['inicio']);
    }, err => {
      window.alert(err.error);

    })
  }

  public irRegistro() {
    this.router.navigate(['formulario']);
  }


}
