import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ControladorUsuarios } from '../../providers/controlador-usuarios/controlador-usuarios';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  resposeData: any;
  loader: any;
  email_usu: '';
  pass_usu: '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public controladorUsuarios: ControladorUsuarios, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  IniciarSesion() {
    let loader = this.loadingCtrl.create({
      content: 'Espere Por Favor...'
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 1000);
    this.controladorUsuarios.InicioSesion(this.email_usu, this.pass_usu).then((result) => {
      this.resposeData = result;

      loader.dismiss();

      if (this.resposeData == null) {

        let alert = this.alertCtrl.create({
          title: 'Usuario Incorrecto',
          subTitle: 'Ingrese Credenciales Correctas',
          buttons: ['Aceptar']
        });
        alert.present();

      } else {
        localStorage.setItem('userData', JSON.stringify(this.resposeData));
        this.navCtrl.push(TabsPage);
      }
    }, (err) => {
      loader.dismiss();
      console.log(err);
    });
  }

  ModuloRegistrar(){
    this.navCtrl.push(RegisterPage);
  }

}
