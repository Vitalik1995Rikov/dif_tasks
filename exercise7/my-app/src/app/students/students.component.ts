import {Component, Input} from '@angular/core';
import { Student } from '../app.component';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent {
    @Input() student: Student;
    toggle = true;
    deleteStudents() {
    this.toggle = !this.toggle;
  }
}