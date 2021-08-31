import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-owned-cars',
  templateUrl: './pre-owned-cars.component.html',
  styleUrls: ['./pre-owned-cars.component.css']
})
export class PreOwnedCarsComponent implements OnInit {
  showNavigationArrows = false;
  interval = 5200;

  constructor() { }

  ngOnInit() {
  }

}
