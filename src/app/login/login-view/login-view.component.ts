import { Component } from '@angular/core';
import {CasesFetcherService} from '../../cases-services/cases-fetcher.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-view',
  standalone: false,
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent {

  constructor(private fetcher:CasesFetcherService){

  }

  public hello() {
    console.log("hello")
  }

  public onSubmit(form:NgForm){

    console.log("inside onsubmit")
    const loginInfo = {
      username: form.value.username,
      password: form.value.password
    }

    this.fetcher.login(loginInfo).subscribe( tokenBearer => {
      localStorage.setItem('tokenBearer', tokenBearer.token);
      console.log("Token received on login request: "+ tokenBearer.token)
    })

  }

/*
  loginTry(username:string, password:string){

    const loginRequest = { username, password };

    this.fetcher.login(loginRequest).subscribe({
      next: (response) => {
        console.log("Login successful:", response);
      },
      error: (err) => {
        console.error("Login failed:", err);
      }
    });
  }
 */

}
