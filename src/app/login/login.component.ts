import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {KeycloakService} from "../keycloak/keycloak.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message!: string;

  constructor(private formBuilder: FormBuilder, private keycloakService: KeycloakService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  onSubmit(loginData: any) {
    this.keycloakService.logIn(loginData)
      .subscribe(_ => this.message = 'Success!', err => this.message = 'Wrong username and/or password!')
  }
}
