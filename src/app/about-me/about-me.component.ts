import { Component, OnInit } from '@angular/core';
import { faCoffee, faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


  faBadge = faIdCard;

  constructor() { }

  ngOnInit(): void {
  }

}
