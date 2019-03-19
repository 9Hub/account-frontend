/**
 *Documentation:
  the component returns a selector, a templateurl and the stylesurl
  in the function create Forms validate the email, first_name, last_name, 
  password, phone fields obtained by the io,
  olso in the function onSubmit data is printed the fields
  email, first_name, last_name, password, phone.
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/service-login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  
  private show = false;
  private message;
  private token:any;
  resgisterAccount:FormGroup;

  constructor(private fb: FormBuilder,private service: LoginService, private router:Router) { }

  ngOnInit() {
    this.resgisterAccount = this.fb.group({
      email:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      password:['',Validators.required],
      phone:['',Validators.required]
    });
  }

  onSubmit(){
    this.service.accountRegister(this.resgisterAccount.value).subscribe(
      (resp) => {
        this.router.navigateByUrl('/account');
      },
      Error => {
        this.show = true;
        this.message = Error.error.message;
      }
    );    
  }

}
