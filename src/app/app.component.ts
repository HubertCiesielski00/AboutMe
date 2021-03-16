import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIdBadge, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faBook, faBookReader } from '@fortawesome/free-solid-svg-icons';

import { browser } from 'protractor';
import { BrowserStack } from 'protractor/built/driverProviders';
import { Browser } from 'selenium-webdriver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AboutMe';
  faBook = faBookReader;
  faCheck = faCheckSquare;
  faBadge = faIdBadge;

  Sections = ['O mnie','Moje umiejętności','Plany rozwoju'];

  templateFunc(ToShow: HTMLElement, ToHide:HTMLElement, ToHide2: HTMLElement ){
    ToShow.classList.remove("section__hidden");
    ToHide.classList.add("section__hidden");
    ToHide2.classList.add("section__hidden");
  }
}