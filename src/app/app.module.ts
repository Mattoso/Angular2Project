import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReadComponent } from './read/read.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { TaqtileApiService } from './taqtile-api.service';
import { UserServiceService } from './user-service.service';
import  {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
import { Ng2Webstorage } from 'ng2-webstorage';
import { AuthenticationService } from "app/authentication.service";
import { LoggedInGuard } from './logged-in.guard';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { User } from "app/user/user";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ReadComponent,
    FooterComponent,
    UserComponent,
    HomeComponent,
    UserDetailsComponent,
    PaginaErroComponent,
    AuthHomeComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2Webstorage
    ],
  providers: [
    TaqtileApiService,
    UserServiceService,
    AuthenticationService,
    LoggedInGuard,
    User
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
