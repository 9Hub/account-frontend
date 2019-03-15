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
import { AutenticationService } from '../../service/autentication/autentication.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  private loading = false;
  private show = false;
  private itemCount:string = "Invalid dat";
  private text1:string;
  private token:string;
  private name_token:string;
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
        this.token = JSON.stringify(resp.token);
        
        console.log(this.name_token);
        console.log(this.token);
        this.router.navigateByUrl('/account');
      },
      Error => {
        this.text1 = Error;
        this.show = true;
      }
    )
    console.log(this.name_token);
    console.log(this.token);
  }

  public getTokenLocal():any{
    return this.token;
  }


}
