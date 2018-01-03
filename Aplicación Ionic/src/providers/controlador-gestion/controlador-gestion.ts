import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ControladorGestionProvider {

  webIp = 'http://172.16.12.234:3000';
  constructor(public http: HttpClient) {

  }

  ListarGeneros() {

    return new Promise(resolve => {
      this.http.get(this.webIp + '/GeneroBuscar').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

  ListarPaises() {

    return new Promise(resolve => {
      this.http.get(this.webIp + '/PaisBuscar').subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

}
