import { PerfilModificarPage } from './../perfil-modificar/perfil-modificar';
import { ControladorPersona } from './../../providers/controlador-persona/controlador-persona';
import { ControladorGestionProvider } from './../../providers/controlador-gestion/controlador-gestion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {


  usuario: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public controladorGestionProvider: ControladorGestionProvider, public controladorPersona: ControladorPersona) {

    if (window.localStorage.getItem("userData") != null) {

      const data = JSON.parse(localStorage.getItem('userData'));
      this.ListarPersona(data[0].password);

    } else {
      this.navCtrl.parent.parent.setRoot(LoginPage);
    }

  }

  ListarPersona(per_email) {

    this.controladorPersona.BuscarPersona(per_email).then((result) => {
      this.usuario = result;
    }, (err) => {
      console.log(err);
    });
  }

  ModuloModificarPerfil() {
    this.navCtrl.push(PerfilModificarPage);
  }
}
