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

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  private resgisterAccount:FormGroup;

  constructor(private fb: FormBuilder,private service: AccountService) { }

  ngOnInit() {
    this.setCreateForm();
  }

  setCreateForm():any{
    this.resgisterAccount = this.fb.group({
      email:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      password:['',Validators.required],
      cel:['',Validators.required],
    });
  }

  onSubmit(){
    console.log(this.resgisterAccount.value);
    // this.service.accountRegister(this.resgisterAccount.value).subscribe(newAccount=>{
    //   if (this.resgisterAccount.invalid) {
    //     console.log("Dato invalido!!");
    //   }else{
    //     alert("registered user");
    //     console.log(JSON.stringify(newAccount));
    //   }
    // },Error =>console.log(Error)
    // )
  }
    
}
