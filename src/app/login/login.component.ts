import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TaqtileApiService } from "app/taqtile-api.service";
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { AuthenticationService } from "app/authentication.service";
import { LoggedInGuard } from '../logged-in.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

email: string;

constructor(
    private userService: UserServiceService,
    private taqtileApiService: TaqtileApiService,
    public router: Router,
    private authenticationService: AuthenticationService
    ) { 
      
    }

login(email, password){
      this.taqtileApiService.login(email, password)
                    .subscribe(
                      response => {
                        this.router.navigate(['/authHome'])
                     },
                     error => alert("Email ou senha incorretos"));
                  }

ngOnInit() { 
  }

}
