import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ControladorPersona } from './../../providers/controlador-persona/controlador-persona';
import { LoginPage } from '../login/login';
import { ControladorSeguirProvider } from './../../providers/controlador-seguir/controlador-seguir';

@IonicPage()
@Component({
  selector: 'page-siguiendo',
  templateUrl: 'siguiendo.html',
})
export class SiguiendoPage {

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
    this.controladorPersona.BuscarPersonaSiguiendo(this.usuarioB).then((result) => {

      this.items = result;
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
      console.log(err);
    });
  }

  BuscarPersonasSiguiendoBuscador() {
    let loader = this.loadingCtrl.create({
      content: 'Espere Por Favor...'
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 1000);

    this.controladorPersona.BuscarPersonasSiguiendoBuscador(this.persona, this.usuarioB).then((result) => {

      this.items = result;
      loader.dismiss();

    }, (err) => {
      loader.dismiss();
      console.log(err);
    });
  }

  DejarSeguirPersona(id_seguir) {

    this.controladorSeguir.DejarSeguirPersona(this.usuarioB, id_seguir).then((result) => {
      let alert = this.alertCtrl.create({
        title: 'En hora buena!',
        subTitle: result[0].msm,
        buttons: ['Aceptar']
      });
      alert.present();
      this.BuscarItems();

    }, (err) => {
      console.log(err);
    });
  }

}
