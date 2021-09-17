import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
})
export class CreatePersonComponent {
  constructor(private serv: GeneralService) {}
  name = '';
  age = 0;
  addPerson() {
    this.serv.addPerson(this.name, this.age);
  }
  removePerson() {
    this.serv.persons.pop();
  }
}
