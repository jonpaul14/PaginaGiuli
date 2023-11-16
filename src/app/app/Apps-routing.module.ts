import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Hoja1Component} from "./hoja1/hoja1.component";
import {Hoja2Component} from "./hoja2/hoja2.component";
import {Hoja3Component} from "./hoja3/hoja3.component";
import {Hoja4Component} from "./hoja4/hoja4.component";
import {Hoja5Component} from "./hoja5/hoja5.component";
import {Hoja6Component} from "./hoja6/hoja6.component";
import {Hoja7Component} from "./hoja7/hoja7.component";
import {Hoja8Component} from "./hoja8/hoja8.component";
import {Hoja9Component} from "./hoja9/hoja9.component";
import {Hoja10Component} from "./hoja10/hoja10.component";
import {Tienda1Component} from "./tienda1/tienda1.component";
import {Tienda2Component} from "./tienda2/tienda2.component";
import {LandingComponent} from "./landing/landing.component";


const routes: Routes = [
  {path : "", component : LandingComponent},
  {path : "hoja1", component : Hoja1Component},
  {path : "hoja2", component : Hoja2Component},
  {path : "hoja3", component : Hoja3Component},
  {path : "hoja4", component : Hoja4Component},
  {path : "hoja5", component : Hoja5Component},
  {path : "hoja6", component : Hoja6Component},
  {path : "hoja7", component : Hoja7Component},
  {path : "hoja8", component : Hoja8Component},
  {path : "hoja9", component : Hoja9Component},
  {path : "hoja10", component : Hoja10Component},
  {path : "pagina1", component : Tienda1Component},
  {path : "pagina2", component : Tienda2Component},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
