import { Component, OnInit } from '@angular/core';
import { User } from "app/user/user";
import { TaqtileApiService } from "app/taqtile-api.service";
import { ActivatedRoute,Router } from "@angular/router";
import { UserServiceService } from "app/user-service.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  private user: User;

  constructor(
    private taqtileApiService: TaqtileApiService,
    private router: Router,
    private route: ActivatedRoute,
    private userServiceService: UserServiceService
  ) { }

  ngOnInit() {
    this.taqtileApiService.getUser(this.route.snapshot.params['id'])
                    .subscribe(
                      user => {
                        this.user = user.data;
                      },
                      error => this.router.navigate(['/pagina-erro']),
                      );
  }
}
