/*
  Documentation:
  El componente se apoya en jasmine y karma para el testeo de funciones.
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterComponent } from './form-register.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

describe('FormRegisterComponent', () => {
  let component: FormRegisterComponent;
  let fixture: ComponentFixture<FormRegisterComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
