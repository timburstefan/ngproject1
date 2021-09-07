import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
})
export class CreatePersonComponent {
  @Output('padded') personAdded = new EventEmitter<{
    name: string;
    age: number;
  }>();
  @Output('premoved') personRemoved = new EventEmitter();
  @ViewChild('personNameInput', { static: true }) inputName: any;
  @ViewChild('personAgeInput', { static: true }) inputAge: any;

  addPerson() {
    // console.log(this.personNameInput.nativeElement.value);
    this.personAdded.emit({
      name: this.inputName.nativeElement.value,
      age: this.inputAge.nativeElement.value,
    });
  }
  removePerson() {
    this.personRemoved.emit();
  }
}
