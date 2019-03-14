/**
 *Documentation:
  the component returns a selector, a templateurl and the stylesurl
  in the function create Forms validate the email fields, password obtained by the io,
  olso in the function onSubmit data is printed.
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/service-login/login.service';
import { MenuAccountService } from '../../service/menu-account-service/menu-account-service';
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
  text1:string;

  constructor(
    private fb:FormBuilder, private service:LoginService, private router:Router, private menu:MenuAccountService
  ) { }
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]  
    })
  }

  onSubmit(){
    this.menu.exec();
    this.router.navigateByUrl('/account');
    this.service.login(this.loginForm.value).subscribe( 
      resp => {
        if(this.loginForm.valid) {
          console.log(JSON.stringify(resp.token));    
        }else{
          this.text1 = resp;
          this.show = true;
        }
      },
      Error => {
        this.text1 = Error;
        this.show = true;
      },
    );  
  }
}


