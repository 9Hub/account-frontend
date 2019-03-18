import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { isNullOrUndefined } from "util";
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };
  
  private url:string= 'http://localhost:10301/p1';
  private token:string;

  public constructor(private http:HttpClient,private router:Router) { }

  public login(userForm):Observable<any> {
    return this.http.post<any>(`${this.url}/login`, userForm, this.httpOptions).pipe(tap(
      resp  => {
        //save toke
        this.saveToken(resp.first_name,resp.token.session_id);
      }
    ));
  }
 
  public accountRegister(userRegisterForm):Observable<any> {
    return this.http.post<any>(`${this.url}/accounts`,userRegisterForm,this.httpOptions).pipe(tap(
      resp => {
        //save toke
        this.saveToken(resp.first_name,"tokem:a001TestExpireDefault");
      }
    ));
  }

  logOut() {
    localStorage.removeItem(this.token);
    this.router.navigateByUrl('/');
    this.token = '';
  }

  private saveToken(name_token:string,token_id:string):void {
    localStorage.setItem(name_token,token_id);
    this.token = name_token;
  }

  public getToken():string {
    return this.token;
  }


  getCurrentUser():boolean {    
    if (!isNullOrUndefined(localStorage.getItem(this.token))) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}