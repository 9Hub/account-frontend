/**
 *Documentation:
  the component returns a selector, a templateurl and the stylesurl
  in the function create Forms validate the email fields, password obtained by the io,
  olso in the function onSubmit data is printed.
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/service-login/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  private loginForm:FormGroup;

  constructor(private fb: FormBuilder, private service:LoginService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      email:['',Validators.required, Validators.email],
      password:['',Validators.required, Validators.minLength(4)]  
   })
  }

  onSubmit(){
    // this.service.login(this.loginForm.value).subscribe( user =>{
    //   if (this.loginForm.invalid) {
    //     console.log("Dato incorecto!!!");
    //   }else{
    //     alert("usuario valido!")
        
    //     console.log(JSON.stringify(user.token));
    //   }
    // },Error => console.log(Error)
    // );
    
  }
    
}


