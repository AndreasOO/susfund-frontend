import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // isCaseView: boolean | undefined

  constructor(public router: Router) {

  }

  // ngOnInit() {
  //   this.isCaseView = this.router.url.split('/').pop()!=='' && this.router.url.split('/').pop()!=='cases';
  // }

  get isCaseView() : boolean {
    return this.router.url.split('/').pop()!=='' && this.router.url.split('/').pop()!=='cases';
  }
}
