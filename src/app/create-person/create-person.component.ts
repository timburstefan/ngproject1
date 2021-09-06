import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
})
export class CreatePersonComponent implements OnInit {
  @Output('padded') personAdded = new EventEmitter<{
    name: string;
    age: number;
  }>();
  @Output('premoved') personRemoved = new EventEmitter();
  newName = '';
  newAge = 0;

  constructor() {}

  ngOnInit(): void {}

  addPerson() {
    this.personAdded.emit({ name: this.newName, age: this.newAge });
  }
  removePerson() {
    this.personRemoved.emit();
  }
}
