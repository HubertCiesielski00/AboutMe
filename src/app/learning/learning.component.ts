import { Component, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBook, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  faTopicIcon = faBook;

  constructor() { }

  ngOnInit(): void {
  }

}
