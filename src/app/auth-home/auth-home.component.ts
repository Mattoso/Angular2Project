import { Component, OnInit } from '@angular/core';
import { TaqtileApiService } from "app/taqtile-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from "app/user/user";
import { UserServiceService } from "app/user-service.service";

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss']
})
export class AuthHomeComponent implements OnInit {

  user: User;
  id: number;

  constructor(
    private taqtileApiService: TaqtileApiService,
    public router: Router,
    public userServiceService: UserServiceService,
  ) { }

  ngOnInit() {
    this.taqtileApiService.getUser(+localStorage.getItem('id'))
                    .subscribe(
                      user => {
                        this.user = user.data;
                      }
                      );
  }

}
