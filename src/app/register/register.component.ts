import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from "app/user/user";
import { TaqtileApiService } from "app/taqtile-api.service";
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  users: User;
  
  onRegister(name, email, password, role){
      this.taqtileApiService.createUser(name, email, password, role)
                  .subscribe(
                    users => console.log(users),
                    response => this.router.navigate(['/login'])
                      );
      }

    constructor(
      public router: Router, 
      private taqtileApiService: TaqtileApiService) {   
    }

  ngOnInit() {
    }

}
