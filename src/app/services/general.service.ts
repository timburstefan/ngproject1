import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  persons = [
    {
      name: 'Stefan',
      age: 23,
    },
  ];
  constructor() {}
  addPerson(name: string, age: number) {
    this.persons.push({
      name: name,
      age: age,
    });
  }
}
