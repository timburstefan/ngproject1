import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nume: string = 'By Stefan';
  personsData = [
    {
      name: 'Stefan',
      age: 23,
    },
  ];

  addedPerson(personData: { name: string; age: number }) {
    this.personsData.push({
      name: personData.name,
      age: personData.age,
    });
  }
  removedPerson() {
    this.personsData.pop();
  }
}
