import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TaqtileApiService } from "app/taqtile-api.service";


@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private taqtileApiService: TaqtileApiService) {}

  canActivate() {
    return this.taqtileApiService.isLoggedIn();
  }
}