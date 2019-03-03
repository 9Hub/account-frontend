import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/service-login/login.service';
import { FormLoginComponent } from './form-login/form-login.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',inputs:['matInput'],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  

  constructor( ) { }

  ngOnInit() {
    
  }




}
