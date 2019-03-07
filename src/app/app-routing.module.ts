// router module works establishing paging paths, this allows you to move in several pages

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {
    path:'home', component:HomeComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'**', component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
