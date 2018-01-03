import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ControladorNoticias {

  webIp = 'http://172.16.12.234:3000';

  constructor(public http: HttpClient) {
  }

  ListarPublicaciones(id_usuario) {

    return new Promise(resolve => {
      this.http.get(this.webIp + '/PublicacionBuscar?id_usuario=' + id_usuario + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

}
