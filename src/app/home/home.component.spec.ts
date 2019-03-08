/*
  Documentation:
  El componente se apoya en jasmine y karma para el testeo de funciones.
*/


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent
      ],
      imports:[
        MatToolbarModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
