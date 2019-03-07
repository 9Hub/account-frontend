/* 
  Documentation:
  the component returns a selector, a templateurl and the stylesurl
*/


import { Component, OnInit } from '@angular/core';

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
