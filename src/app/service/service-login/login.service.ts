import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
  
  private  url: string = 'http://localhost:10301/p1/login';
  private token;

  public constructor(private http:HttpClient,private router:Router) { }

  public login(userForm):Observable<any>{
    return this.http.post<any>(this.url,userForm ,this.httpOptions).pipe(tap(resp =>{
      this.token = resp;
      localStorage.setItem(resp.first_name,JSON.stringify(resp.token));
    }));
  }
 
  accountRegister(userRegisterForm):Observable<any>{
    return this.http.post(this.url,userRegisterForm,this.httpOptions).pipe(tap(resp =>{
      this.token = resp;
      localStorage.setItem(resp.first_name,JSON.stringify(resp.token))
    }));
  }

  logOut() {
    localStorage.removeItem(this.token.first_name);
    //for default navigate toute home, if is deleted the localStogare name;
    this.router.navigateByUrl('/');
  }
}
