import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // person = 'Internshala';
  // google = 'google.com';
  // disableMyButton = false;
  // showGoogleButton = true;
  // name: any;
  // fruits: string[] = [];
  people: any[] = [{
    name: 'Bob',
    age: 28,
    country: 'AU'
  } , {
    name: 'Alice',
    age: 24,
    country: 'US'
  } , {
    name: 'Sherlock',
    age: 38,
    country: 'UK'
  }, {
    name: 'Raman',
    age: 21,
    country: 'IN'
  } , {
    name: 'Chin MI',
    age: 23,
    country: 'CH'
  }  ];

  constructor() {
    // this.fruits.push('Apples');
    // this.fruits.push('Oranges');
    // this.fruits.push('Grapes');
    // this.fruits.push('Bananas');
    // this.fruits.push('Melons');
    //
    // console.log(this.fruits);
  }

  ngOnInit(): void {
  }


  // toogleGoogleButton() {
  //   this.showGoogleButton = !this.showGoogleButton;
  // }
  //
  // shouldDisplay() {
  //   // tslint:disable-next-line:triple-equals
  //   if (this.name === 'Internshala'){
  //     return true;
  //   }
  // }
  onPersonClicked() {
    console.log('Person Clicked');
  }
}
