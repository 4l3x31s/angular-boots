import { DataService } from './../../values/data.service';
import { TokenService } from './../../values/token.service';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/iusuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public lstUsuarios: Array<Usuario> = [];

  constructor(
    public usuariosService: UsuariosService,
    public tokenService: TokenService,
    public dataService: DataService,
    public router: Router
  ) {

  }

  ngOnInit() {

    this.usuariosService.get('/usuarios/operaciones', this.tokenService.get())
    .subscribe(data => {
      this.lstUsuarios = Object.assign(data.body);
    }, err => {
      console.log(err);
    })
  }
  modificar(item: Usuario) {
    this.dataService.set(null);
    this.dataService.set(item);
    this.router.navigate(['formulario']);

  }
  eliminar(item: Usuario) {
    this.usuariosService.delete('/usuarios/operaciones/', item._id, this.tokenService.get())
    .subscribe(data => {
      window.alert('dato eliminado');
      this.router.navigate(['inicio']);
    }, err => {
      window.alert(err);
    })
  }

}
