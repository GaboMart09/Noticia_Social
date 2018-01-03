import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ControladorPersona } from './../../providers/controlador-persona/controlador-persona';
import { ControladorGestionProvider } from './../../providers/controlador-gestion/controlador-gestion';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-perfil-modificar',
  templateUrl: 'perfil-modificar.html',
})
export class PerfilModificarPage {

  id_per: any;
  nick_per: any;
  nombre_per: any;
  telefono_per: any;
  direccion_per: any;
  email_per: any;

  MensajeGenero: any;
  genero_per: any;
  genero: Array<string>;

  MensajePais: any;
  paises_per: any;
  pais: Array<string>;

  resposeData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public controladorGestionProvider: ControladorGestionProvider, public controladorPersona: ControladorPersona) {

    if (window.localStorage.getItem("userData") != null) {

      const data = JSON.parse(localStorage.getItem('userData'));
      this.ListarPersona(data[0].password);

      this.MensajeGenero = {
        title: 'Género',
        subTitle: 'Seleccionar Género'
      };
      this.ListarGeneros();

      this.MensajePais = {
        title: 'País',
        subTitle: 'Seleccionar País'
      };
      this.ListarPaises();

    } else {
      this.navCtrl.parent.parent.setRoot(LoginPage);
    }
  }

  ListarGeneros() {

    this.controladorGestionProvider.ListarGeneros().then((result) => {

      this.genero_per = result;

    }, (err) => {
      console.log(err);
    });
  }

  ListarPaises() {

    this.controladorGestionProvider.ListarPaises().then((result) => {

      this.paises_per = result;
    }, (err) => {
      console.log(err);
    });
  }

  ListarPersona(per_email) {

    this.controladorPersona.BuscarPersona(per_email).then((result) => {
      this.id_per = result[0].idPersona;
      this.nick_per = result[0].nick;
      this.nombre_per = result[0].nombrePersona;
      this.telefono_per = result[0].telefono;
      this.direccion_per = result[0].direccion;
      this.email_per = result[0].email;
      this.genero = [result[0].nombreGenero];
      this.pais = [result[0].nombrePais];
    }, (err) => {
      console.log(err);
    });
  }

  ModificarPersona() {

    let loader = this.loadingCtrl.create({
      content: 'Espere Por Favor...'
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 1000);

    this.controladorPersona.ModificarPersona(this.id_per, this.nick_per, this.nombre_per, this.telefono_per, this.direccion_per, this.genero, this.email_per, this.pais).then((result) => {

      this.resposeData = result;
      loader.dismiss();

      let alert = this.alertCtrl.create({
        title: 'Gestión Perfil',
        subTitle: this.resposeData[0].msm,
        buttons: ['Aceptar']
      });
      alert.present();

    }, (err) => {
      console.log(err);
    });
  }

}
