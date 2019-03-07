import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/service-login/login.service';

import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HttpClientModule,HTTP_INTERCEPTORS }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { FormLoginComponent} from './login/form-login/form-login.component'
import { FormRegisterComponent } from './login/form-register/form-register.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    FormRegisterComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatChipsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTreeModule,
    MatIconModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
