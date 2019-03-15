/**
  Documentation:
  the component returns a selector, a templateurl and the stylesurl
  in the function create Forms validate the email fields, password obtained by the io,
  olso in the function onSubmit data is printed.
**/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/service-login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  private loginForm:FormGroup;
  loading = false;
  show = false;
  itemCount:string = "Invalid dat";
  message:string;
  private name_token:string;
  private token:string;

  constructor(private fb:FormBuilder, private service:LoginService, private router:Router) { }
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]  
    })
    // this.saveToken
  }

  onSubmit(){
    this.service.login(this.loginForm.value).subscribe( 
      resp => {
        this.router.navigateByUrl('/account');        
      },
      error => {
        this.message = "Invalid data"
        return this.show = true;
      },
    );  
  }

  private saveToken(name_token,token: string): void {
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


