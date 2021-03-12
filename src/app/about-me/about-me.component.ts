import { Component, OnInit } from '@angular/core';
import { faIdeal } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faIdBadge, faIdCard, faIdCardAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


  faTopicIcon = faIdBadge;

  constructor() { }

  ngOnInit(): void {
  }

}
