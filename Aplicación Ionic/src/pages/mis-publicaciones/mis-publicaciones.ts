import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ControladorNoticias } from './../../providers/controlador-noticias/controlador-noticias';
/**
 * Generated class for the MisPublicacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-publicaciones',
  templateUrl: 'mis-publicaciones.html',
})
export class MisPublicacionesPage {

  publicaciones: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public controladorNoticias: ControladorNoticias) {
    if (window.localStorage.getItem("userData") != null) {
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log(data[0].usuario);
      this.ListarPublicaciones(data[0].usuario);
    } else {
      this.navCtrl.parent.parent.setRoot(LoginPage);
    }
  }

  ListarPublicaciones(id_usuario) {
    let loader = this.loadingCtrl.create({
      content: 'Espere Por Favor...'
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 1000);
    this.controladorNoticias.ListarPublicaciones(id_usuario).then((result) => {

      this.publicaciones = result;
      console.log(this.publicaciones);
      loader.dismiss();

    }, (err) => {
      loader.dismiss();
      console.log(err);
    });
  }

}
