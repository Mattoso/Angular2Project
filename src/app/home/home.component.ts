import { Component, OnInit } from '@angular/core';
import { TaqtileApiService } from "app/taqtile-api.service";
import { UserServiceService } from '../user-service.service';
import { LoggedInGuard } from '../logged-in.guard';
import { User } from "app/user/user";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedIn = false;
  nome:string;

  constructor(
    private userService: UserServiceService,
    private taqtileApiService: TaqtileApiService,
    public router: Router,
  ) { 
    this.loggedIn = this.taqtileApiService.isLoggedIn();
  }

  ngOnInit() {
    if (localStorage.getItem('name') != null ) {
      this.nome = localStorage.getItem('name');
      console.log(this.nome);
    }
  }
}
