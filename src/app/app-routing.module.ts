import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { MecanicoComponent } from './Components/mecanico/mecanico.component';
import { VehiculoComponent } from './Components/vehiculo/vehiculo.component';

const routes: Routes = [{path:"cliente", component:ClienteComponent},
{path:"mecanico", component:MecanicoComponent},
{path:"vehiculo", component:VehiculoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
