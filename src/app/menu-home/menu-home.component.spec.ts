import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material';
import { MenuHomeComponent } from './menu-home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MenuHomeComponent', () => {
  let component: MenuHomeComponent;
  let fixture: ComponentFixture<MenuHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MenuHomeComponent
      ],
      imports:[
        MatButtonModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
