import { Component, OnInit } from '@angular/core';
import { TaqtileApiService } from "app/taqtile-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from "app/user/user";


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  users: User[];

  constructor(
    private taqtileApiService: TaqtileApiService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.taqtileApiService.fetchUsers(0,100)
                    .subscribe(
                      users => {
                        this.users = users.data;
                        console.log(this.users)
                      },
                      error => this.router.navigate(['/pagina-erro']),
                      );
  }

  goToDetails(id: number) {
    this.router.navigate(['user-details', id]);
  }

}
