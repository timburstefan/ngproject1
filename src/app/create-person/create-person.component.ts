import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

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

  @ViewChild('personNameInput', { static: true }) personNameInput: any;
  constructor() {}

  ngOnInit(): void {}

  addPerson() {
    // console.log(this.personNameInput.nativeElement.value);
    this.personAdded.emit({
      name: this.personNameInput.nativeElement.value,
      age: this.newAge,
    });
  }
  removePerson() {
    this.personRemoved.emit();
  }
}
