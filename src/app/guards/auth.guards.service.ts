import { LoginService } from './../service/service-login/login.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate{

  constructor(private router: Router, private service:LoginService) { }

  canActivate():boolean{
    return this.service.getCurrentUser ? true : false;
  }
}
