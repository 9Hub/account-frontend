import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule} from '@angular/material';
import { MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { MatTabsModule } from '@angular/material/tabs';
import { LoginService } from './service/service-login/login.service';

import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { FormLoginComponent } from './login/form-login/form-login.component'
import { FormRegisterComponent } from './login/form-register/form-register.component';
import { MatCardModule } from '@angular/material/card';

import { Page404Component } from './page404/page404.component';
import { MatTreeModule } from '@angular/material/tree';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { CdkTreeModule } from '@angular/cdk/tree';


@NgModule({
  declarations: [
    AppComponent,
    MenuHomeComponent,
    LoginComponent,
    FormLoginComponent,
    FormRegisterComponent,
    HomeComponent,
    Page404Component,
    FooterComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    HttpClientModule,
    MatCardModule,
    MatTreeModule,
    CdkTreeModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
