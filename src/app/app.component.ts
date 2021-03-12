import { Component } from '@angular/core';
import { faIdBadge, faIdCard } from '@fortawesome/free-regular-svg-icons';
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
}