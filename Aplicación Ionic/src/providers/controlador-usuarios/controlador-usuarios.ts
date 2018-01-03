import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ControladorUsuarios {

  webIp = 'http://172.16.12.234:3000';

  constructor(public http: HttpClient) {

  }
  InicioSesion(email_usu, pass_usu) {

    return new Promise(resolve => {

      this.http.get(this.webIp + '/ValidarSesion?email_usu=' + email_usu + '&pass_usu=' + pass_usu + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }
  RegistrarUsuario(email_usu, pass_usu, nick_per) {
    return new Promise(resolve => {
      this.http.get(this.webIp + '/RegistrarUsuario?email_usu=' + email_usu + '&pass_usu=' + pass_usu + '&nick_per=' + nick_per + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

  BuscarUsuarioCodigo(id_usuario) {
    return new Promise(resolve => {
      this.http.get(this.webIp + '/UsuarioBuscarCodigo?id_usuario=' + id_usuario + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

}
