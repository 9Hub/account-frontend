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
  private loading = false;
  private show = false;
  private message:string;

  constructor(private fb:FormBuilder, private service:LoginService, private router:Router) { }
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]  
    })
  }

  onSubmit(){
    this.service.login(this.loginForm.value).subscribe( 
      () => {
        this.router.navigateByUrl('/account');
      },
      Error => {
        this.message = Error.error.message;
        return this.show = true;
      },
    );  
  }

}


