import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private serv: GeneralService) {}
  nume: string = 'By Stefan';
  persons = this.serv.persons;
  ngOnInit(): void {}
}
