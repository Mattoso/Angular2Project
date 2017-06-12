import { Component, OnInit } from '@angular/core';
import { User }from './user';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaqtileApiService } from "app/taqtile-api.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  constructor(
    private _TaqtileApiService: TaqtileApiService,
    private route: ActivatedRoute,
    private _location: Location
    ) { }

  ngOnInit() {
    
  }

}
