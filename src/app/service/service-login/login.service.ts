import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  public constructor(private http:HttpClient) { }

  public login(userForm):Observable<any>{
    return this.http.post<any>(this.url,userForm ,this.httpOptions).pipe(map(user => {
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    }));
  }
 
  accountRegister(userRegisterForm):Observable<any>{
    return this.http.post(this.url,userRegisterForm,this.httpOptions);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
