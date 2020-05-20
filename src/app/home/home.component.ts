import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = 'Internshala';

  amount = 1999;

  dateOBirth = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
