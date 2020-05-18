import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('person') person;
  @Output('personClicked') personClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.person);
  }

  getTextSize(person) {
    if (person.country === 'IN') {
      return '24px';
    }
  }

  onClick() {
     this.personClicked.emit();
     // console.log('Person was clicked');
  }
}
