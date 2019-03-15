import { FormRegisterComponent } from './form-register/form-register.component';
import { FormLoginComponent } from './form-login/form-login.component';
/* 
  Documentation:
  the component returns a selector, a templateurl and the stylesurl
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin:FormLoginComponent;
  formRegister: FormRegisterComponent;
  constructor() { }

  ngOnInit() {
  }

  validToken():any{
    if (this.formLogin != null) {
      return this.formLogin.getTokenLocal();
    }else if(this.formRegister!= null){
      return this.formRegister
    }else{
      return null;
    }
  }


}
