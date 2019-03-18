
import { Component, OnInit } from '@angular/core';
import { MenuAccountService } from '../service/menu-account-service/menu-account-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
  

export class AccountComponent implements OnInit{
  
  constructor(private menu:MenuAccountService){
    this.menu.exec(true);
  }

  ngOnInit() {
    
  }
}