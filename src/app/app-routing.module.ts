import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {
    path: 'pagina1',
    loadChildren: () => import('./pagina1/pagina1.module').then(m => m.Pagina1Module)
  },
  {path: '', redirectTo: '/pagina1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
