import { Component, OnInit} from '@angular/core';
import { MenuAccountService } from '../service/menu-account-service/menu-account-service';
import { LoginService } from './../service/service-login/login.service';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent implements OnInit {
  
  private titleUser:string;
  constructor( private service:MenuAccountService,private loginService:LoginService) { 
    this.service.onData((data)=>{
      this.menuHome = !data;
      this.menuAccount = data;
    });
    if(localStorage.getItem("tokenAccount")!=null){
      this.menuHome = false;
      this.menuAccount = true;    
      this.titleUser = this.loginService.getToken();
    }
  }

  menuHome: boolean = true;
  menuAccount: boolean = false;

  ngOnInit() {
    
  }

  signOut = ()=>{
    this.menuHome = true;
    this.menuAccount = false;
    this.loginService.logOut();
  }
  

}
