import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ControladorPersonaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ControladorPersona {

  webIp = 'http://172.16.12.234:3000';

  constructor(public http: HttpClient) {

  }

  BuscarPersonas(id_usuario) {

    return new Promise(resolve => {

      this.http.get(this.webIp + '/PersonasBuscar?id_usuario=' + id_usuario + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

  BuscarPersonasBuscador(par_busqueda, id_usuario) {

    return new Promise(resolve => {
      this.http.get(this.webIp + '/PersonasBuscarBuscador?par_busqueda=' + par_busqueda + '&id_usuario=' + id_usuario + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }


  BuscarPersona(per_email) {

    return new Promise(resolve => {

      this.http.get(this.webIp + '/PersonaBuscar?per_email=' + per_email + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }


  ModificarPersona(id_persona, nick_persona, nombre_persona, telefono_persona, direccion_persona, genero_persona, usuario_persona, pais_persona) {

    return new Promise(resolve => {
      this.http.get(this.webIp + '/PersonasModificar?id_persona=' + id_persona + '&nick_persona=' + nick_persona + '&nombre_persona=' + nombre_persona + '&telefono_persona=' + telefono_persona + '&direccion_persona=' + direccion_persona + '&genero_persona=' + genero_persona + '&usuario_persona=' + usuario_persona + '&pais_persona=' + pais_persona + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

  BuscarPersonaSiguiendo(id_usuario) {

    return new Promise(resolve => {

      this.http.get(this.webIp + '/PersonasBuscarSiguiendo?id_persona=' + id_usuario + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }


  BuscarPersonasSiguiendoBuscador(par_busqueda, id_usuario) {

    return new Promise(resolve => {
      this.http.get(this.webIp + '/PersonasBuscarSiguiendoBuscador?par_busqueda=' + par_busqueda + '&id_usuario=' + id_usuario + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }
}
