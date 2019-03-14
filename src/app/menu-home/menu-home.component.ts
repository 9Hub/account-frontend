import { Component, OnInit} from '@angular/core';
import { MenuAccountService } from '../service/menu-account-service/menu-account-service';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent implements OnInit {

  constructor( private service:MenuAccountService,) { 
    service.onData((data)=>{
      this.menuHome = !data;
      this.menuAccount = data;
    });
  }

  menuHome: boolean = true;
  menuAccount: boolean = false;

  ngOnInit() {
  }

  signOut = ()=>{
    this.menuHome = true;
    this.menuAccount = false;
  }

}
