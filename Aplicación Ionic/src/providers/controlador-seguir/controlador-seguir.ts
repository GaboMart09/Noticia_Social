import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ControladorSeguirProvider {

  webIp = 'http://172.16.12.234:3000';

  constructor(public http: HttpClient) {
  }

  SeguirPersona(id_persona, id_seguidor) {

    return new Promise(resolve => {
      this.http.get(this.webIp + '/SeguidorSeguir?id_persona=' + id_persona + '&id_seguidor=' + id_seguidor + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

  DejarSeguirPersona(id_persona, id_seguidor) {

    return new Promise(resolve => {
      this.http.get(this.webIp + '/SeguidorDejarSeguir?id_persona=' + id_persona + '&id_seguidor=' + id_seguidor + '').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

}
