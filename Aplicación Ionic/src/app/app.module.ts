
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PerfilModificarPage } from './../pages/perfil-modificar/perfil-modificar';

import { ControladorUsuarios } from '../providers/controlador-usuarios/controlador-usuarios';
import { ControladorNoticias } from '../providers/controlador-noticias/controlador-noticias';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { SiguiendoPage } from '../pages/siguiendo/siguiendo';
import { SeguirPage } from './../pages/seguir/seguir';
import { PerfilPage } from '../pages/perfil/perfil';
import { MisPublicacionesPage } from './../pages/mis-publicaciones/mis-publicaciones';
import { ControladorPersona } from '../providers/controlador-persona/controlador-persona';
import { ControladorGestionProvider } from '../providers/controlador-gestion/controlador-gestion';
import { ControladorSeguirProvider } from '../providers/controlador-seguir/controlador-seguir';
 
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SiguiendoPage,
    SeguirPage,
    PerfilPage,
    MisPublicacionesPage,
    PerfilModificarPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SiguiendoPage,
    SeguirPage,
    PerfilPage,
    MisPublicacionesPage,
    PerfilModificarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ControladorUsuarios,
    ControladorNoticias,
    ControladorPersona,
    ControladorGestionProvider,
    ControladorSeguirProvider
  ]
})
export class AppModule {}
