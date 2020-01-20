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
      return this.http.get(this.url + path, {
        headers: new HttpHeaders()
        .set('token', token),
        observe: 'response'
      });
    } else {
      return this.http.get(this.url + path, {
        observe: 'response'
      });
    }
  }
  post(path: string, object: any, token?: string): Observable<any> {
    if(token){
      let headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('token', token);
    return this.http.post(this.url + path, object, {
      headers: headers,
      observe: 'response'
    });
  } else {
    let headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(this.url + path, object, {
      headers: headers,
      observe: 'response'
    });
  }
  }
  put<T>(path: string, object: T, token?: string){
    if(token){
    return this.http.put(this.url + path, object, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('token', token),
      observe: 'response'
    });
  } else {
    return this.http.put(this.url + path, object, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json'),
      observe: 'response'
    });
  }
  }
  delete<T>(path: string, id: string, token?: string) {
    if(token){
    return this.http.delete(this.url + path + id, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('token', token),
      observe: 'response'
      });
    } else {
      return this.http.delete(this.url + path + id, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
        observe: 'response'
      });
    }
  }
}
