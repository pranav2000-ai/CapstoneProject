import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { FundTransferComponent } from './user-portal/fund-transfer/fund-transfer.component';
import { AtmPinChangeComponent } from './user-portal/atm-pin-change/atm-pin-change.component';
import { LogoutComponent } from './user-portal/logout/logout.component'
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    UserPortalComponent,
    FundTransferComponent,
    AtmPinChangeComponent,
    LogoutComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
