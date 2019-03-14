import { Component, OnInit} from '@angular/core';
import { MenuAccountService } from '../service/menu-account-service/menu-account-service';
// import { MenuAccountComponent } from '../menu-account/menu-account.component';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent implements OnInit {

  constructor( private service:MenuAccountService,) { 
    service.onData((data)=>{this.query_local_storage(data);});
  }

  // @ViewChild('ref', { read: MenuAccountComponent })
  // ref: MenuAccountComponent;

  // nextQuote(event) {
  //   this.ref.next();
  // }
  
  ngOnInit() {
  }

  query_local_storage(data){
    // this = this.menu;
    console.log('desde menu-home se imprime: '+data);
  }
}
