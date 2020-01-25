import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Using typescript
  clickCounter: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter += 1;
  }
  //Using this function to set conditionals
  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4, 
      notactive: this.clickCounter <= 4,
    }
    return myClasses;
  }

}
