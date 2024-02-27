import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LoginDataComponent } from './Components/login-data/login-data.component';
import {RegisterComponent} from './Components/register/register.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login-data', component: LoginDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
