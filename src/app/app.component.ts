import { Component } from '@angular/core';
import { saludo } from '../../firstSubmodule/';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ultimate-domi';
  toggleSidenav() {
    document
      .querySelector('.root-container .center .header')
      .classList.toggle('sidenav-opened');
    document.querySelector('.sidenav').classList.toggle('opened');
    document
      .querySelector('.root-container__full-overlay')
      .classList.toggle('opened');
    document
      .querySelector('.root-container .center .header .openSidenavButton')
      .classList.toggle('close');
    document
      .querySelector('.root-container .sidenav .closebtn')
      .classList.toggle('close');

    saludo();
  }
}
