import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinecellarWinesComponent } from './winecellar-wines/winecellar-wines.component';
import { WinecellarAboutComponent } from './winecellar-about/winecellar-about.component';

const routes: Routes = [

  //En la raiz lo que se suele hacer es definir el path vacio, y despues se puede poner un component: componente o hacer el redirecTo
  {
    path: '',
    redirectTo: 'wines',
    pathMatch: 'full'
  },
  //Son objetos , una vez que los agregamos se agregan los import automaticamente, si no nos lo agrega los tenemos que poner a mano
  {
    path: 'wines',
    component: WinecellarWinesComponent
  },
  {
    path: 'about',
    component: WinecellarAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
