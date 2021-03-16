import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIdBadge, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faBook, faBookReader, faGlassWhiskey, faMailBulk } from '@fortawesome/free-solid-svg-icons';

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
  faicons = [faIdBadge,faCheckSquare,faBookReader,faMailBulk]

  Sections = ['O mnie', 'Umiejętności', 'Plany nauki', 'Kontakt'];

  PrevClass = "el1";

  test(elem:HTMLElement, Class:string){
    elem.classList.remove(this.PrevClass);
    elem.classList.add(Class);
    this.PrevClass = Class;
  }

}