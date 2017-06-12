import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TaqtileApiService } from "app/taqtile-api.service";
import { UserServiceService } from '../user-service.service';
import { LoggedInGuard } from '../logged-in.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;

  constructor(
    private userService: UserServiceService,
    private taqtileApiService: TaqtileApiService,
    ) { 
    this.loggedIn = this.taqtileApiService.isLoggedIn();
  }

  ngOnInit() {
    
  }
  
    logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }
}
