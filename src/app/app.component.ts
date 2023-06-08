import {Component} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  course = COURSES[0];


  onCourseSelected(course :Course) {
    console.log("App Component -- click event.......", course);
  }

}
