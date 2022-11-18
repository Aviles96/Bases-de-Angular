import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Routings
import { Routes, RouterModule } from '@angular/router';
//Se importa las rutas con sus componentes
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  //Nueva ruta perezosa solo carge cuando es necesario lazyload
  {
    path:'posts',
    // loadChildren: './pages/posts/posts.module#PotsModule'
    loadChildren: () => import('./pages/posts/posts.module'). then( m => m.PostsModule )
  },
  //Redirigir cualquier ruta no definida
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
