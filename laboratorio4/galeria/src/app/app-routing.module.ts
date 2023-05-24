import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/componentes/home/home.component';
import {GaleriaComponent} from '../app/componentes/galeria/galeria.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"galeria",component:GaleriaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
