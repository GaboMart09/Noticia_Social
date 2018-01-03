import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilModificarPage } from './perfil-modificar';

@NgModule({
  declarations: [
    PerfilModificarPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilModificarPage),
  ],
})
export class PerfilModificarPageModule {}
