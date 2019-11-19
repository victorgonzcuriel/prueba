import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisesComponent } from './paises.component';
import { PaisComponent } from './pais/pais.component';


// Rutas dinamicas
const routes: Routes = [{path: '', component: PaisesComponent},
{path: 'pais/:id', component: PaisComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
