import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MenuAccountService {
  
  public constructor() { }

  private varFunc: any = null;

  public onData(func){
    this.varFunc = func;
  }

  public exec(){
    this.varFunc("datos enviados");
  }
}
