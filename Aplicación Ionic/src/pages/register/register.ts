import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ControladorUsuarios } from '../../providers/controlador-usuarios/controlador-usuarios';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  resposeData: any;
  loader: any;
  email_usu: '';
  pass_usu: '';
  nick_per: '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public controladorUsuarios: ControladorUsuarios, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  RegistrarUsuario() {
    let loader = this.loadingCtrl.create({
      content: 'Espere Por Favor...'
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 1000);
    this.controladorUsuarios.RegistrarUsuario(this.email_usu, this.pass_usu, this.nick_per).then((result) => {
      this.resposeData = result;

      loader.dismiss();

      console.log(this.resposeData[0].msm);

      let alert = this.alertCtrl.create({
        title: 'Registro Usuario',
        subTitle: this.resposeData[0].msm,
        buttons: ['Aceptar']
      });

      alert.present();

    }, (err) => {
      loader.dismiss();
      console.log(err);
    });
  }

  ModuloIniciarSesion() {
    this.navCtrl.push(LoginPage);
  }

}
