import { MisPublicacionesPage } from './../pages/mis-publicaciones/mis-publicaciones';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SiguiendoPage } from './../pages/siguiendo/siguiendo';
import { SeguirPage } from './../pages/seguir/seguir';
import { PerfilPage } from './../pages/perfil/perfil';
import { LoginPage } from '../pages/login/login';
import { ControladorUsuarios } from '../providers/controlador-usuarios/controlador-usuarios';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
  usuario: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public controladorUsuarios: ControladorUsuarios) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    const data = JSON.parse(localStorage.getItem('userData'));

    if (data == null) {

    } else {
      //this.BuscarUsuarioCodigo(data[0].usuario);
    }

  }

  ModuloInicio() {
    this.nav.setRoot(TabsPage);
  }

  ModuloPerfil() {
    this.nav.setRoot(PerfilPage);
  }

  ModuloSiguiendo() {
    this.nav.setRoot(SiguiendoPage);
  }

  ModuloSeguir() {
    this.nav.setRoot(SeguirPage);
  }

  ModuloMisPublicaciones() {
    this.nav.setRoot(MisPublicacionesPage);
  }

  CerrarSesion() {
    localStorage.clear();
    this.nav.setRoot(LoginPage);
  }

  BuscarUsuarioCodigo(id_usuario) {

    this.controladorUsuarios.BuscarUsuarioCodigo(id_usuario).then((result) => {

      this.usuario = result;
      console.log(this.usuario);

    }, (err) => {
      console.log(err);
    });
  }
}
