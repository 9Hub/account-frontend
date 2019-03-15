import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  private token: string;
  private name_token:string;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(name_token:string,token: string): void {
    localStorage.setItem(name_token, token);
    this.token = token;
    this.name_token = name_token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem(this.name_token);
    this.router.navigateByUrl('/');
  }
}
