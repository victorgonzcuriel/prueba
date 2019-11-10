import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // feature, el path lo resuelve el modulo.
  // Se deja por motivos didacticos. Realmente esto es como un estatico, lo hace cargar segun entran a la aplicación.
  // Es mejor lazy porque solo se carga cuando piden el componente (dejo el estatico comentado)
  // {path: 'home', component: HomeComponent},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  // lazy, delega en un modelo el enrutamiento
  { path: 'tareas', loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule) },
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
