import { Component, OnInit } from '@angular/core';
import { faCheckSquare, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faCheckCircle, faIdBadge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css',
              '../global.css']
})
export class MySkillsComponent implements OnInit {

  constructor() { }

  faCheck = faCheckSquare;

  ngOnInit(): void {
  }

}
