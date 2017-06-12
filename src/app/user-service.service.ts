import { Injectable } from '@angular/core';
import { User } from "app/user/user";
import { TaqtileApiService } from "app/taqtile-api.service";

@Injectable()
export class UserServiceService {

  private user: User;
  

  setUser(user: User) {
    this.user = user;
  }

  getId() {
    return this.user.id;
  }

  getName() {
    return this.user.name;
  }

  getEmail() {
      return this.user.email;
    }

}

