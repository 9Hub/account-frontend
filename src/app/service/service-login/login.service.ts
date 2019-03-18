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
  private token:any;

  public constructor(private http:HttpClient,private router:Router) { }

  public login(userForm):Observable<any>{
    return this.http.post<any>(`${this.url}/login`, userForm, this.httpOptions).pipe(tap(resp =>{
      if (resp) {
        //guardamos el token
        this.saveToken(resp.first_name,resp.token.session_id);
      }
    }));
  }
 
  public accountRegister(userRegisterForm):Observable<any>{
    return this.http.post<any>(`${this.url}/accounts`, userRegisterForm).pipe(tap(resp =>{
      if (resp) {
        //save token
        this.saveToken(resp.first_name,resp.token.session_id);
      }
    }));
  }

  logOut() {
    // localStorage.removeItem(this.token);
    // localStorage.clear();
    delete localStorage[this.token];
    //for default navigate toute home, if is deleted the localStogare name;
    this.router.navigateByUrl('/');
  }

  private saveToken(name_token:string,token_id:string):void{
    localStorage.setItem(name_token,token_id);
    this.token = name_token;
  }

  private getToken():string{
    if (!this.token) {
      this.token = localStorage.getItem("");
    }
    return this.token;
  }


  getCurrentUser():boolean{    
    if (!isNullOrUndefined(localStorage.getItem(this.token.first_name))) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}