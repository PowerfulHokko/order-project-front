import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ItemModule} from "./item/item.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {environment} from "../environments/environment";
import { LoginComponent } from './login/login.component';
import { KeycloakComponent } from './keycloak/keycloak.component';
import {AuthenticationInterceptor} from "./keycloak/authentication.interceptor";
import { AddItemComponent } from './add-item/add-item.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KeycloakComponent,
    AddItemComponent,
  ],
  imports: [
    BrowserModule,
    ItemModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    KeycloakAngularModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


