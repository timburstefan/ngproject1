import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css'],
})
export class ChildCComponent implements OnInit {
  @Input('srcPerson') person = {
    name: '',
    age: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
