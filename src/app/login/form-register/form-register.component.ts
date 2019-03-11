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
import { AccountService } from '../../service/account.service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  loading = false;
  show = false;
  itemCount:string = "Invalid dat";
  text1:string;

  private resgisterAccount:FormGroup;

  constructor(private fb: FormBuilder,private service: AccountService, private router:Router) { }

  ngOnInit() {
    this.resgisterAccount = this.fb.group({
      email:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      password:['',Validators.required],
      phone:['',Validators.required],
    });
  }

  onSubmit(){
    console.log(this.resgisterAccount.value);
    this.service.accountRegister(this.resgisterAccount.value).subscribe(
      resp => {
        if(this.resgisterAccount.valid) {
          this.router.navigateByUrl('/account');
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
    )
  }
    
}
