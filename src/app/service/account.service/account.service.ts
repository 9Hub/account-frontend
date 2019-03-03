import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  private  url: string = 'http://localhost:10301/p1/accounts';
  constructor(private http:HttpClient) { }
 
  accountRegister(userRegisterForm):Observable<any>{
    return this.http.post(this.url,userRegisterForm,this.httpOptions);
  }
}
