import { IUsuario } from './../models/iusuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'http://localhost:3000';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {

  }
  get<T>(path: string, token?: string) {
    if (token) {
      return this.http.get<T>(this.url + path, {
        headers: new HttpHeaders()
        .set('token', token),
        observe: 'response'
      });
    } else {
      return this.http.get<T>(this.url + path, {
        observe: 'response'
      });
    }
  }
  post<T>(path: string, object: T, token?: string) {
    if(token){
    return this.http.post<T>(this.url + path, object, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('token', token),
      observe: 'response'
    });
  } else {
    return this.http.post<T>(this.url + path, object, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json'),
      observe: 'response'
    });
  }
  }
  put<T>(path: string,id: string, object: T, token?: string){
    if(token){
    return this.http.put<T>(this.url + path + id, object, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('token', token),
      observe: 'response'
    });
  } else {
    return this.http.put<T>(this.url + path + id, object, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json'),
      observe: 'response'
    });
  }
  }
  delete<T>(path: string, id: string, token?: string) {
    if(token){
    return this.http.delete<T>(this.url + path + id, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('token', token),
      observe: 'response'
      });
    } else {
      return this.http.delete<T>(this.url + path + id, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
        observe: 'response'
      });
    }
  }
}
