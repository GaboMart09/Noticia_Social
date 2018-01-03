import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ControladorPersona } from '../../providers/controlador-persona/controlador-persona';
import { ControladorSeguirProvider } from './../../providers/controlador-seguir/controlador-seguir';

@IonicPage()
@Component({
  selector: 'page-seguir',
  templateUrl: 'seguir.html',
})
export class SeguirPage {


  items: any;
  persona: any;
  usuarioB: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private alertCtrl: AlertController, public controladorPersona: ControladorPersona, public controladorSeguir: ControladorSeguirProvider) {
    if (window.localStorage.getItem("userData") != null) {

      const data = JSON.parse(localStorage.getItem('userData'));
      this.usuarioB = data[0].usuario;
      this.BuscarItems();

    } else {
      this.navCtrl.parent.parent.setRoot(LoginPage);
    }
  }

  BuscarItems() {
    let loader = this.loadingCtrl.create({
      content: 'Espere Por Favor...'
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 1000);
    this.controladorPersona.BuscarPersonas(this.usuarioB).then((result) => {

      this.items = result;
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
      console.log(err);
    });
  }


  BuscarPersonasBuscador() {
    let loader = this.loadingCtrl.create({
      content: 'Espere Por Favor...'
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 1000);

    this.controladorPersona.BuscarPersonasBuscador(this.persona, this.usuarioB).then((result) => {

      this.items = result;
      loader.dismiss();

    }, (err) => {
      loader.dismiss();
      console.log(err);
    });
  }

  SeguirPersona(id_seguir) {

    this.controladorSeguir.SeguirPersona(this.usuarioB, id_seguir).then((result) => {
      let alert = this.alertCtrl.create({
        title: 'En hora buena!',
        subTitle: result[0].msm,
        buttons: ['Aceptar']
      });
      alert.present();
    }, (err) => {
      console.log(err);
    });
  }

}
