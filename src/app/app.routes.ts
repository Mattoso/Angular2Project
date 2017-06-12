import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from "app/login/login.component";
import { ReadComponent } from "app/read/read.component";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HomeComponent } from "app/home/home.component";
import { UserDetailsComponent } from "app/user-details/user-details.component";
import { PaginaErroComponent } from "app/pagina-erro/pagina-erro.component";
import { LoggedInGuard } from './logged-in.guard';
import { AuthHomeComponent } from "app/auth-home/auth-home.component";


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pagina-erro', component: PaginaErroComponent},
  {path: 'user-details', component: UserDetailsComponent, canActivate: [LoggedInGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'read', component: ReadComponent},
  {path: 'authHome', component: AuthHomeComponent},
{
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' }
},
{
    path: 'login',
    component: RegisterComponent,
    data: { title: 'Login' }
},
{
    path: 'read',
    component: RegisterComponent,
    data: { title: 'read' }
},
{
    path: 'user-details/:id',
    component: UserDetailsComponent,
    data: { title: 'user-details' }
},
{
    path: 'authHome',
    component: AuthHomeComponent,
    data: { title: 'authHome' }
},
{ path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'pagina-erro',
    component: PaginaErroComponent,
    data: { title: 'PaginaErro' }
}
];

export const routing = RouterModule.forRoot(appRoutes);