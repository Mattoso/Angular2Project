import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from "app/user/user";
import { UserServiceService } from './user-service.service';
import { AuthenticationService } from "app/authentication.service";
import { Response } from '@angular/http';
import { LoggedInGuard } from './logged-in.guard';
import { Subject } from "rxjs/Subject";

@Injectable()
export class TaqtileApiService {
  email: string;

  private loggedIn = false;
  private baseUrl: string;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService,
    private userServiceService: UserServiceService
  ) { 
    this.loggedIn = localStorage.getItem('auth_token') != null;
    this.baseUrl = 'http://tq-template-node.herokuapp.com/';
  }

  fetchUsers(page: number, window: number): Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('auth_token'));

    let params = new URLSearchParams();
    params.append('pagination', JSON.stringify({page: page, window: window}))
  
    return this.http.get(`${this.baseUrl}users`, { params, headers })
                    .map(response => response.json());
  }

  createUser(name:string, email:string, password:string, role:string): Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('auth_token'));

    let body = { name, email, password, role };
    console.log(body);
    
    return this.http.post(`${this.baseUrl}user`, body, { headers })
                    .map(response => response.json());
  }

  getUser(id:number): Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('auth_token'));
    
    return this.http.get(`${this.baseUrl}user/${id}`, { headers })
                    .map(response => response.json());
  }

  login(email:string, password:string): Observable<any> {
    let headers = new Headers();

    let body = { email, password };

    return this.http.post(`${this.baseUrl}authenticate`, body)
                    .map(res => res.json())
                    .map((res) => this.onLogin(res));
  }


  isLoggedIn() {
    return this.loggedIn;
  }

  private onLogin(response): boolean {
    if (response.data) {
      localStorage.setItem('auth_token', response.data.token);
      localStorage.setItem('id', response.data.user.id);
      localStorage.setItem('email', response.data.user.email);
      localStorage.setItem('name', response.data.user.name);
      this.loggedIn = true;
    }

    return response.success;
  }
  
}
