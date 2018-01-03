import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, App, LoadingController} from 'ionic-angular';
import { ControladorNoticias } from './../../providers/controlador-noticias/controlador-noticias';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  publicaciones: any;
  constructor(public navCtrl: NavController, public app: App, public loadingCtrl: LoadingController, public controladorNoticias: ControladorNoticias) {

    if (window.localStorage.getItem("userData") != null) {
      const data = JSON.parse(localStorage.getItem('userData'));
      
      this.ListarPublicacionesSeguidores(data[0].usuario);
    } else {
      this.navCtrl.parent.parent.setRoot(LoginPage);
    }

  }

  ListarPublicacionesSeguidores(id_usuario) {
    let loader = this.loadingCtrl.create({
      content: 'Espere Por Favor...'
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 1000);
    this.controladorNoticias.ListarPublicaciones(id_usuario).then((result) => {

      this.publicaciones = result;
      
      loader.dismiss();

    }, (err) => {
      loader.dismiss();
      console.log(err);
    });
  }

}
