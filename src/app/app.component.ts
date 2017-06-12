import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from "app/user/user";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


    ngOnInit() {
        
    }

    

}

