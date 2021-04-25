import { Component } from '@angular/core';

export interface Student {
  surname: string;
  name: string;
  dadname: string;
  birthday: string;
  mark: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class App {
  students: Student[] = [
    {surname: 'Ivanov', name: 'Ivan', dadname: 'Ivanovich', birthday: '01.01.1990', mark: 5.0},
    {surname: 'Petrov', name: 'Petr', dadname: 'Petrovich', birthday: '12.04.1998', mark: 2.6},
    {surname: 'Sidorov', name: 'Sidor', dadname: 'Sidorovich', birthday: '23.12.2002', mark: 4.1}
  ]
}