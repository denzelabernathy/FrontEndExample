import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cars',
  templateUrl: './new-cars.component.html',
  styleUrls: ['./new-cars.component.css']
})
export class NewCarsComponent implements OnInit {
  showNavigationArrows = false;
  interval = 5200;

  constructor() { }

  ngOnInit() {
  }

}
